# Open Data Hub Basic Tutorial
This tutorial will show users how to upload data and analyze it using the Open Data Hub.

## Prerequisies

The following requirements must be met before starting the tutorial:

- A running OpenShift or minishift cluster.
- A deployed instance of Open Data Hub [click here for instructions](https://gitlab.com/opendatahub/opendatahub-operator) with an S3-compatible object store (Ceph Object Storage recommended).
- Installed oc command line tool [click here for instructions](https://docs.openshift.com/container-platform/3.11/cli_reference/get_started_cli.html).

## Get Jupyter instance running

1. Go to your JupyterHub URL running in the Open Data Hub.  This can be found in the Open Data Hub deployment in OpenShift or by running the following command.
   ```
   oc get route jupyterhub -o jsonpath='{"https://"}{.spec.host}{"\n"}'
   ```

   If you don't have SSL certificates properly set up, you will need to use Private Browsing in Safari or Incognito Mode in Chrome.  If you are using FireFox, you can use the default mode but you will need to add a security exception by going to on Advanced -> Add Exception... -> Confirm Security Exception when the security warning displays in the browser.

2. Click on `Sign in with OpenShift` and sign into JupyterHub with your credentials.  If using minishift, you can use the default developer credentials (developer/developer).

   You will now be presented with a page to select your Jupyter notebook and provide some basic parameters to be passed into your notebook as environment variables.  The Open Data Hub has a number of notebooks, but we will focus on Spark for this tutorial.

3. Choose the `s2i-spark-minimal-notebook:3.6` notebook.

4. Enter your Ceph Access Key (`foo`) as `AWS_ACCESS_KEY_ID` and Ceph Secret Key (`bar`) as `AWS_SECRET_ACCESS_KEY`, enter `S3BUCKET` as Variable name, and `MY-DATA` (all upper case letters) as the Variable value, click `Spawn Server` to start the server.

## Open a terminal window in Jupyter

When your Jupyter server starts, you will see a simple file browser with couple controls above it. Click the `New` button and select `Terminal` from the dropdown menu. A new tab or window should open and you should see a standard terminal interface. This way you can access shell in the container running Jupyter server


## Create Your S3 Bucket
Before uploading data to Ceph, we will create a Ceph S3 bucket.

```
aws s3 mb s3://MY-DATA --endpoint-url=$S3_ENDPOINT_URL
```

NOTE: By default, AWS APIs and SDKs use subdomains when accessing S3 buckets (mybucket.mycephdomain.com).  Unfortunately Ceph is not configured to handle this format and uses path urls instead (mycephdomain.com/mybucket/, [read more on the different S3 URLs](https://docs.aws.amazon.com/AmazonS3/latest/dev/UsingBucket.html#access-bucket-intro)).

As a workaround, you can use buckets with names in all capital letters, such as MY-DATA.

## Uploading Your Data
For this step of the tutorial, you should first download sample datasets to use.

1. Download the text dataset for sentiment analysis [here](https://gitlab.com/opendatahub/opendatahub-operator/raw/master/tutorials/data/sample_text_data.tsv?inline=false).
   ``` 
   curl -L -O https://gitlab.com/opendatahub/opendatahub-operator/raw/master/tutorials/data/sample_text_data.tsv?inline=false
   ```

2. After downloading the dataset, you will be uploading it to the Ceph data lake using the AWS CLI.

   ```
   aws s3 cp sample_text_data.tsv s3://MY-DATA/datasets/sample_text_data.tsv --endpoint-url=$S3_ENDPOINT_URL
   ```

You've uploaded data to Ceph!  Now it's time to start up a JupyterHub notebook to analyze it.

## Analyzing Your Data

JupyterHub is used in the Open Data Hub for spawning Jupyter notebooks to create AI and machine learning models.  For more information on Jupyter notebooks, visit [https://jupyter.org/](https://jupyter.org/).

1. Your server will take a moment to spin up. When it is up, click the `New` button and select `Terminal` from the dropdown menu. When you are in the new terminal, you can use the following command to download the workshop notebook.
   ```
   curl -L -O https://gitlab.com/opendatahub/opendatahub-operator/raw/master/tutorials/text_analysis.ipynb
   ```

2. Go back to the Jupyter tree view and open the `text_analysis.ipynb` notebook by clicking on it.  This will open the notebook in Jupyter.

3. This notebook has almost everything installed that you need.  The first cell has a few Python packages that need installing.  Let's add one more.  At the top of the first cell, add the following line.

   ```
   !pip install matplotlib
   ```

4. Run your notebook by clicking on the `>| Run` button or hitting `Shift+Enter` for each cell, starting with the first.  When a cell is actively running, it will have `[*]` on the side.  Some cells will take time to run.  Once done, it will have a number, such as [1].  You can go through the entire notebook until all cells are run.

   Once this notebook is complete, you can view the data exported out from the code by using the AWS CLI.

   ```
   aws s3 ls s3://MY-DATA/output/ --endpoint-url=$S3_ENDPOINT_URL
   ```

   You should see your filtered data available for download.

## Run a Tensorflow Example

Now that you've run a Spark notebook, how about trying out a simple Tensorflow example?  First we need to shut down your running notebook and start a TensorFlow notebook.

1. Open up your JupyterHub again. If you don't remember the URL, you can retrieve this from the Open Data Hub project in OpenShift.

2. Click on the `Control Panel` button in the top right corner.

3. Click on the `Stop My Server` button to terminate your running notebook.  This should be done when you are finished with your notebooks to preserve resources.

4. Click on the `Start My Server` button.

5. Select the `s2i-tensorflow-notebook:3.6` notebook image and click `Spawn` leaving the rest of the options as they are.  This may take a few moments to start.

6. Download the by running the following command in the Jupyterhub server terminal

```
curl -L -O https://gitlab.com/opendatahub/opendatahub-operator/raw/master/tutorials/neural_network_raw.ipynb
```

8. Open the `neural_network_raw.ipynb` notebook and run the example.

Great, now you've completed the Tensorflow example.  There's lots more you can do with the Open Data Hub.  Try uploading your own data and analyzing it.  If you have questions, please contact contributors@lists.opendatahub.io and we'll help get you started.

## Local access to Ceph object storage and User Access and Secret Keys

Ceph is used in the Open Data Hub as a data lake.  For uploading and downloading data to your data lake, you need the Ceph endpoint url, user access and secret key.  

**NOTE**: If you've run the Dev deployment of Open Data Hub with Ceph Nano, follow the steps outlined below to set up access.


1. Log into the OpenShift environment
   ```
   oc login [your openshift url here]
   ```
2. Go to the Open Data Hub project
   ```
   oc project [open data hub project name]
   ```
3. Instruct openshift to forward a localhost port to the ceph container
   ```
   oc port-forward ceph-nano-0 8000 &
   ```
4. Create an environment variable for the Ceph endpoint.
   ```
   export CEPH_ENDPOINT="http://127.0.0.1:8000"
   ```

Ceph Endpoint URL: **http://127.0.0.1:8000**
User Access Key: foo
User Secret Key: bar

If you did not deploy Ceph Nano and have another Ceph cluster, use that endpoint, access and secret key for this tutorial.

### Configure and install AWS CLI
This tutorial uses AWS CLI for uploading data to Ceph Object Storage. Any S3-compatible tool or application can be used for interacting with Ceph.

It requires [Python](http://www.python.org/download/) 2.6.5 or higher and is installed using [pip](http://www.pip-installer.org/en/latest/).

```
pip install awscli
```

AWS CLI must be configured to use the Access Key and Secret Key of a Ceph user account.

```
aws configure
AWS Access Key ID []: - Enter your Ceph S3 Access Key.
AWS Secret Access Key []: - Enter your Ceph S3 Secret Key.
Default region name [None]: - Leave blank.
Default output format [None]: - Leave blank.
```

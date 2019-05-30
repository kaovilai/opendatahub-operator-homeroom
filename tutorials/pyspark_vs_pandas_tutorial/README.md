# Pyspark vs Pandas Tutorial
This tutorial explains how to convert basic Pandas functions into the equivalent Pyspark commands to leverage the distributed computing of Spark.

## Prerequisites

The following is required for the tutorial:

- A running OpenShift cluster.
- An installed Open Data Hub operator in the OpenShift cluster.
- A deployed Open Data Hub in a project namespace.

## Running the Tutorial

1. Go to the JupyterHub web page in a browser.  JupyterHub is used in the Open Data Hub for spawning Jupyter notebook servers with pre-installed tools for creating AI and machine learning models.  For more information on Jupyter notebooks, visit [https://jupyter.org/](https://jupyter.org/).

2. If this is your first time, you may need to provide your OpenShift credentials and give JupyterHub permission to access your profile information.

3. Click `Start My Server` to start a notebook server.

4. Select `s2i-spark-minimal-notebook:3.6` as the JupyterHub notebook image.

5. Leave the deployment size as `Default`.

6. Enter your Ceph S3 access key for the `AWS_ACCESS_KEY_ID` environment variable.

7. Enter your Ceph S3 secret access key for the `AWS_SECRET_ACCESS_KEY`.

8. Click on `Spawn` to start the notebook server.  This may take a minute as the OpenShift pods for the notebook and Spark are being created.

9. Now that your notebook server is running, upload the example notebook for this tutorial.  Click the `New` dropdown button and select `Terminal` from the dropdown menu. When you are in the new terminal, you can use shell commands directly on the container.  We'll use this to download the tutorial notebook onto the server using the following commands in the Jupyter terminal:

```
curl -L -O https://gitlab.com/opendatahub/opendatahub-operator/raw/master/tutorials/pyspark_vs_pandas_tutorial/pyspark_vs_pandas_tutorial.ipynb
```

10. Navigate back to the Jupyter Files view by clicking on the Jupyter logo in the terminal browser, or by going back to the previous browser tab.

11. Open the basic_tutorial_workshop.ipynb notebook by clicking on it.  This will open the notebook in Jupyter.  The notebook will contain the rest of the instructions for the tutorial.


12. Notebooks contain cells.  Run each cell in your notebook by clicking on the `>| Run` button or hitting `Shift+Enter` for each cell, starting with the first.  When a cell is actively running, it will have `[*]` on the side.  Some cells will take time to run.  Once done, it will have a number, such as [1].  You can go through the entire notebook until all cells are run.

13. That's it!  Thank you for participating in this tutorial.  If you have questions or would like to contribute to the Open Data Hub project, you can find us at [https://opendatahub.io/community.html](https://opendatahub.io/community.html).

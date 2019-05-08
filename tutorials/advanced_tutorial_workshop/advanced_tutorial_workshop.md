# Open Data Hub Advanced Tutorial Workshop
This tutorial is intended as part of an interactive in-person workshop and will show users how to use the Open Data Hub and Ceph to analyze data using machine learning algorithms.

## Prerequisites

The following has been provided for you as prerequisites for the workshop tutorial:

- A running OpenShift cluster.
- An installed Open Data Hub operator in the OpenShift cluster.
- A project space in OpenShift for deploying and managing Open Data Hub.

## Deploying Open Data Hub to Your OpenShift Project Space

In order to get started with the Open Data Hub, you need to deploy it into your project namespace.

1. Go to the OpenShift console login page provided on your handout. You may see a notice that you don't have SSL certificates properly set up for certificate authorization.  This will cause a warning to be displayed in your browser.  You will need to use Private Browsing in Safari or Incognito Mode in Chrome, or click on the `Proceed` link.  If you are using FireFox, you can use the default mode but you will need to add a security exception by going to on Advanced -> Add Exception... -> Confirm Security Exception when the security warning displays in the browser.

2. Enter the Attendee ID and Password on your handout provided during the workshop to log into OpenShift.

3. After logging in, go to your list of projects by clicking on `Home -> Projects`.  Click on the project with your Attendee ID to open that project namespace. Ex. user250.  This will take you to the project status page.

4. Now you can deploy the Open Data Hub into your project.  On the left side menu, go to `Catalog -> Developer Catalog`.  This will display a list of operators to deploy.  Find and click on `Open Data Hub`.

5. Once the Open Data Hub operator is selected, you should see a popup for Open Data Hub.  Click on `Create` when the Open Data Hub card is displayed.

6. The Open Data Hub configuration YAML file will be displayed.  Click on `Create` to deploy the Open Data Hub components and wait until the deployment is complete.

7. It will take a while for all of the Open Data Hub components to start up.  To ensure all pods of the Open Data Hub are deployed successfully, click on `Workloads -> Pods` on the left menu.  Wait until all pods should show `Ready` in the Readiness column.

8. Now you can start data science work in JupyterHub.  To do so, first you need to find the link to your JupyterHub.  Click on `Networking -> Routes` in the left menu.  Then click on the link to JupyterHub.  This is where you will run the rest of the tutorial.

## Running Jupyter Notebooks in OpenShift
1. Once you've opened JupyterHub from the link, you'll notice that you don't have SSL certificates properly set up for certificate authorization.  This will cause a warning to be displayed in your browser.  You will need to use Private Browsing in Safari or Incognito Mode in Chrome, or click on the `Proceed` link.  If you are using FireFox, you can use the default mode but you will need to add a security exception by going to on Advanced -> Add Exception... -> Confirm Security Exception when the security warning displays in the browser.

2. JupyterHub is used in the Open Data Hub for spawning Jupyter notebook servers with pre-installed tools for creating AI and machine learning models.  For more information on Jupyter notebooks, visit [https://jupyter.org/](https://jupyter.org/).  This may take a few moments to complete and you will be redirected to a Jupyter notebook server.  

3. When your notebook server is up, click the `New` dropdown button and select `Terminal` from the dropdown menu. When you are in the new terminal, you can use shell commands directly on the container.  We'll use this to download the tutorial notebooks and workshop files onto the server using the following commands in the Jupyter terminal:
   ```
   curl -L -o oc https://gitlab.com/opendatahub/opendatahub-operator/tutorials/misc/oc

   curl -L -o files.tar.gz https://gitlab.com/opendatahub/opendatahub-operator/-/archive/master/opendatahub-operator-master.tar.gz?path=tutorials%2Fadvanced_tutorial_workshop

   tar -xvzf files.tar.gz opendatahub-operator-master-tutorials/tutorials/advanced_tutorial_workshop/ --strip-components 2
   ```

4. Navigate back to the Jupyter Files view by clicking on the Jupyter logo in the terminal browser, or by going back to the previous browser tab.

5. Open the `01-Spark-with-Hybrid-Data.ipynb` notebook by clicking on it.  This will open the notebook in Jupyter.  The notebook will contain the next set of instructions for the tutorial.

6. Notebooks contain *cells*.  Run each cell in your notebook by clicking on the `>| Run` button or hitting `Shift+Enter` for each cell, starting with the first.  When a cell is actively running, it will have `[*]` on the side.  Some cells will take time to run.  Once done, it will have a number, such as [1].  You can go through the entire notebook until all cells are run.

7. Now go back to open the next Jupyter notebook by going to `File -> Close and Halt` to close your existing notebook, then clicking on `02-MNIST-Data-Exploration.ipynb`.  Run the notebook cells again to complete the tutorial.

8. Now go back to open the next Jupyter notebook by going to `File -> Close and Halt` to close your existing notebook, then clicking on `03-MNIST-TensorFlow.ipynb`.  Run the notebook cells again to complete the tutorial.

9. Now go back to open the next Jupyter notebook by going to `File -> Close and Halt` to close your existing notebook, then clicking on `04-Serving-TensorFlow-on-OpenShift.ipynb`.  Run the notebook cells again to complete the tutorial.

10. That's it!  Thank you for participating in this tutorial.  If you have questions or would like to contribute to the Open Data Hub project, you can find us at [https://opendatahub.io/community.html](https://opendatahub.io/community.html).

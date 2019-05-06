# Contributing to the project

## How to make and submit changes to the Open Data Hub operator repo

1. Fork the repository
2. Clone your fork
3. Add Git remote for the upstream repository
    ```
    git remote add upstream https://gitlab.com/opendatahub/opendatahub-operator
    ```
4. Create a Quay.io account
5. Create a new repository `opendatahub-operator` and configure automatic build trigger:
    * Make sure you mark it as `Public`
    * Select **Link to a GitLab Repository Push**
    * When prompted to "Select organization", select your Gitlab account
    * Select your `opendatahub-operator` fork
    * Leave **Trigger for all branches and tags** selected
    * Select the Dockerfile (`/build/Dockerfile`)
    * Select the context (`/`)
    * Skip the Robot Account configuration by clicking Continue

Now you have everything configured to start making changes

1. Create a branch in your cloned repository
    ```
    git checkout -b my-first-change
    ```
2. Make changes to the git repo
3. Commit the changes
    ```
    git commit -a -m "Updated Operator"
    ```
4. Push your changes to your forked repository
    ```
    git push --set-upstream origin my-first-change
    ```
5. Go to your Quay.io repository, to the **Builds** tab - you should see a new build running.

To test your changes - i.e. to deploy updated version of the operator to OpenShift, follow the README.md

1. Delete any existing Open Data Hub custom resources
    ```
    oc get opendatahub
    oc delete opendatahub <ODH OBJECT NAME>
    ```
2. (Re)Deploy the operator
   ```
   # If the operator exists
   # Find the name of the opendatahub operator pod and delete it
   oc get pods
   oc delete pod/<ODH OPERATOR POD NAME>

   # Create the new operator, if it didn't previously exist
   oc create -f deploy/operator.yaml
   ```

3. Deploy a new Open Data Hub custom resource
    ```
    oc create -f deploy/crds/opendatahub_v1alpha1_opendatahub_cr.yaml
    ```

Once you are happy with your changes, you can submit a Merge Request

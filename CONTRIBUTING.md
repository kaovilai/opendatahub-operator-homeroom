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

## How to add documentation for your changes

If you are proposing a change that will add features to the operator, you
are expected to create documentation for that feature. This project uses a
style of documentation inspired by the
[Modular Documentation Project](https://redhat-documentation.github.io/modular-docs/).

All documentation should be in [Asciidoc](http://asciidoc.org/) formatted
files stored in the `docs` directory. Most features will be covered by the
[Procedure template](https://github.com/redhat-documentation/modular-docs/blob/master/modular-docs-manual/files/TEMPLATE_PROCEDURE_doing-one-procedure.adoc).
You should follow this template when proposing your changes.

In general you should follow this process for creating your documentation:

1. Copy the [template file](https://raw.githubusercontent.com/redhat-documentation/modular-docs/master/modular-docs-manual/files/TEMPLATE_PROCEDURE_doing-one-procedure.adoc)
   into the `docs` directory and give a name that is appropriate for your
   feature.

1. Add your documentation to the new file. Make sure to fill out the title
   and identifier entries, and follow the suggestions in the template. If
   you have any questions, you should raise them during the review process
   when you propose your merge.

All new features should have a documentation file to inform users how that
feature is used and what they can expect. If you are unsure about how to
start or what content is appropriate, look to the documentation that exists
in the `docs` directory for inspiration or raise a question to the team
through the common channels.

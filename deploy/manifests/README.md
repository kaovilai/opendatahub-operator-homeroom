<img src="datahub_color_vert-wht-bg.png" alt="Open Data Hub, an AI platform powered by Open Source" title="Open Data Hub, an AI platform powered by Open Source" />

Add Open Data Hub to the OLM Catalog
----------
```bash
# As cluster-admin user
# Add the Open Data Hub CRD to the cluster
$ oc create -f opendatahub_v1alpha1_opendatahub_crd.yaml

# Create the namspace where you want to store the create the initial ClusterServiceVersion (CSV)
$ oc new-project opendatahub-operator

# Create the Open Data Hub operator catalogsource
$ oc create -n opendatahub-operator -f deploy/manifests/opendatahub-operator/opendatahub-operator.catalogsource.yaml

# Create an Open Data Hub Operator group.
# Determines where CRD is grouped and which namespaces will get a copy of the CSV in their catalog
# You'll want to add a targetNamespaces: ['opendatahub-operator', 'Additional=-Projects-Where-ODH-Should-Be-Available'] to the operatorgroup yaml so that Open Data Hub is available in the catalog for that project
$ oc create -f deploy/olm-catalog/opendatahub-operator/opendatahub-operator.operatorgroup.yaml

# Create a subscription to an Open Data Hub channel
# In the yaml, add set the sourceNamespace to the project/namespace that has the catalogSource you previously deployed
$ oc create -n opendatahub-operator -f deploy/manifests/opendatahub-operator/opendatahub-operator.subscriptions.yaml
```


Other Resources
----------
- [OLM ClusterServiceVersion](https://github.com/operator-framework/operator-lifecycle-manager/blob/master/Documentation/design/building-your-csv.md)
- [OLM OperatorGroup](https://github.com/operator-framework/operator-lifecycle-manager/blob/master/Documentation/design/operatorgroups.md)

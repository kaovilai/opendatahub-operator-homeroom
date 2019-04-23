<img src="datahub_color_vert-wht-bg.png" alt="Open Data Hub, an AI platform powered by Open Source" title="Open Data Hub, an AI platform powered by Open Source" />

Add Open Data Hub to the OLM Catalog
----------
```bash
# As cluster-admin user
# Create the namspace where you want to store the create the initial ClusterServiceVersion (CSV)
$ oc new-project opendatahub-operator

# Create an Open Data Hub Operator group.
# Determines where CRD is grouped and which namespaces will get a copy of the CSV in their catalog
$ oc create -f deploy/olm-catalog/opendatahub-operator/opendatahub-operator.operatorgroup.yaml

# Add the CSV to the cluster
$ oc create -f deploy/olm-catalog/opendatahub-operator/opendatahub-operator.v0.0.1.clusterserviceversion.yaml

# Create the RBAC Policy for the operator
$ oc create -f deploy/service_account.yaml
$ oc create -f deploy/role.yaml
$ oc create -f deploy/role_binding.yaml

# Add the Open Data Hub CRD to the cluster
$ oc create -f opendatahub_v1alpha1_opendatahub_crd.yaml

# Create a configmap from the CSV, Package and CRD files for the OLM Catalog to reference
$ oc create configmap opendatahub-operators \
  --from-file clusterServiceVersions=deploy/olm-catalog/opendatahub-operator/opendatahub-operator.v0.0.1.clusterserviceversion.yaml \
  --from-file customResourceDefinitions=deploy/crds/opendatahub_v1alpha1_opendatahub_crd.yaml \
  --from-file packages=deploy/olm-catalog/opendatahub-operator/opendatahub-operator.package.yaml

#TODO: Create the CatalogSource for opendatahub-operator catalog group -- Mapping between OperatorGroup and Configmap data
#TODO: Create the ConfigMap to store the CSV, CRD and PackageSource data
# ConfigMap is just an OLM bundle of -- https://github.com/operator-framework/community-operators#know-what-to-contribute
* opendatahub-operator.package.yaml
```


Other Resources
----------
- [OLM ClusterServiceVersion](https://github.com/operator-framework/operator-lifecycle-manager/blob/master/Documentation/design/building-your-csv.md)
- [OLM OperatorGroup](https://github.com/operator-framework/operator-lifecycle-manager/blob/master/Documentation/design/operatorgroups.md)

<img src="datahub_color_vert-wht-bg.png" alt="Open Data Hub, an AI platform powered by Open Source" title="Open Data Hub, an AI platform powered by Open Source" />

Open Data Hub Ansible Operator
----------
Implementation of the ansible operator used to the deploy the Open Data Hub in an openshift environment

Components
----------
Open Data Hub Core
* S3 Storage via [Ceph container](http://github.com/ceph/ceph-container)
* JupyterHub 
* Spark

Operator Image available @ https://quay.io/llasmith/opendatahub-operator
Custom Resource Definition: OpenDataHub


Manual Installation
----------
To add open data hub to the OLM Catalog to see the [olm-catalog README](/deploy/manifests/README.md)

The operator is currently designed to work within your existing namespace. You'll need cluster-admin privileges to create the OpenDataHub custom resource definition and apply the anyuid scc for the ceph container

```bash
# Add the OpenDataHub Custom Resource Definition. Requires cluster-admin privileges
$ oc create -f opendatahub_v1alpha1_opendatahub_crd.yaml

# Setup RBAC for the operator
$ oc create -f deploy/service_account.yaml
$ oc create -f deploy/role.yaml
$ oc create -f deploy/role_binding.yaml

# Deploy the OpenDataHub Operator in the namespace
$ oc create -f deploy/operator.yaml
```

```bash
# Deploy the OpenDataHub custom resources with configuration for your environment
$ oc create -f opendatahub_v1alpha1_opendatahub_cr.yaml
```

FOR A CEPH NANO DEPLOYMENT ONLY IN OCP3.11
Openshift user requires a security context to deploy the Ceph container. Failure to do so will cause the ceph pod initialization to fail with the message "mkdir: cannot create directory '/var/lib/ceph': Permission denied""
```bash
$ oc adm policy add-scc-to-user anyuid system:serviceaccount:<NAMESPACE>:default
```


Directory
----------
* build/ - Dockerfile used to build the operator image
* deploy/ - OpenShift templates for the CRD, RBAC and operator resources
* deploy/manifests - OpenShift catalog and subscription files for the package
* roles/ - Ansible roles used to deploy each component of the Open Data Hub
* playbook.yml - Ansible playbook that manages that orchestrates the deployment of the Open Data Hub within the namespace
* watches.yaml - Yaml that registers the Custom Resources managed by this operator

Other Resources
----------
- [opendatahub.io](https://opendatahub.io) - For information on the Open Data Hub project
- [Ansible Operator User Guide](https://raw.githubusercontent.com/operator-framework/operator-sdk/master/doc/ansible/user-guide.md)
- [Operator SDK](https://github.com/operator-framework/operator-sdk)
- [Operator Lifecycle Manager](https://github.com/operator-framework/operator-lifecycle-manager)


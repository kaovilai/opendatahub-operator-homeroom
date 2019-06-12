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
* Prometheus
* Grafana

Operator Image available @ https://quay.io/llasmith/opendatahub-operator
Custom Resource Definition: OpenDataHub


Installation
----------

**Automated installation through the Operator Lifecycle Manager (OLM)**

To add Open Data Hub to the OLM Catalog to see the [olm-catalog README](/deploy/manifests/README.md)

**Manual Installation**

To manually install the operator, see the
[Manual Installation documentation](/docs/manual-installation.adoc).

Directory
----------
* build/ - Dockerfile used to build the operator image
* deploy/ - OpenShift templates for the CRD, RBAC and operator resources
* deploy/manifests - OpenShift catalog and subscription files for the package
* docs/ - Documentation for the operator
* roles/ - Ansible roles used to deploy each component of the Open Data Hub
* playbook.yml - Ansible playbook that manages that orchestrates the deployment of the Open Data Hub within the namespace
* watches.yaml - Yaml that registers the Custom Resources managed by this operator

Other Resources
----------
- [opendatahub.io](https://opendatahub.io) - For information on the Open Data Hub project
- [Ansible Operator User Guide](https://raw.githubusercontent.com/operator-framework/operator-sdk/master/doc/ansible/user-guide.md)
- [Operator SDK](https://github.com/operator-framework/operator-sdk)
- [Operator Lifecycle Manager](https://github.com/operator-framework/operator-lifecycle-manager)
- [Prometheus](https://prometheus.io/)
- [Grafana](https://grafana.com/)
Prometheus
=========

The role will deploy Prometheus. It uses the k8s module to do so. The second task in the role is used to force a wait -- it is not required but highly recommended if Prometheus is being deployed in tandem with Grafana.


Role Variables
--------------

The following variables are used to set the images that the operator will deploy. We have tested the following defaults.

```
IMAGE_PROXY: openshift/oauth-proxy:v1.0.0
IMAGE_PROMETHEUS: openshift/prometheus:v2.3.2
IMAGE_ALERTMANAGER: openshift/prometheus-alertmanager:v0.15.1
IMAGE_ALERT_BUFFER: openshift/prometheus-alert-buffer:v0.0.2
```

Example Playbook
----------------

A custom playbook to deploy prometheus would look like the following.

```
- name: Deploy Monitoring setup
  hosts: localhost
  roles: 
    - role: prometheus 
```

License
-------

BSD

Author Information
------------------

aasthana@redhat.com

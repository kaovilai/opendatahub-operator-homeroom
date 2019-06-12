Grafana
=========

The role will deploy Grafana. It uses the k8s module to do so. The tasks in the role will do the following.

1. Get Prometheus route.
2. Get Grafana route.
3. Create the service account and access token for Grafana.
4. Wait until Grafana is successfully deployed.
5. Add Prometheus as a data source to Grafana.

Role Variables
--------------

The following variables are used to set the images that the operator will deploy. We have tested the following defaults.

```
IMAGE_GRAFANA: mrsiano/grafana-ocp:latest
IMAGE_PROXY: openshift/oauth-proxy:v1.1.0
```


Dependencies
------------

This playbook should only be run after the Prometheus playbook has been run.

Example Playbook
----------------


The Grafana deployment of the ODH comes standard with Prometheus as a data source, so we would recommend running the following playbook to deploy Prometheus and Grafana.

```
- name: Deploy Monitoring setup
  hosts: localhost
  roles: 
    - role: prometheus 
    - role: grafana
```

License
-------

BSD

Author Information
------------------

aasthana@redhat.com
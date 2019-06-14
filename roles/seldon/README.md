Seldon
=========

This role will deploy Seldon release 0.2.7. 

The settings used for seldon-core-crd are: 
`usage_metrics.enabled=false` 

The settings used for seldon-core are:
`rbac.enabled=true`
`apife.enabled=true`
`ambassador.enabled=false`
`single_namespace=true`

This role installs the following pods
1. Redis
2. Seldon Cluster Mananger
3. Seldon API manager

For more information on seldon settings and components please visit [Seldon install instructions](https://docs.seldon.io/projects/seldon-core/en/v0.2.7/workflow/install.html)

Role Variables
--------------

The following variables are used to set the images that the operator will deploy. We have tested the following defaults.

```
image: docker.io/bitnami/redis:4.0.14
image: seldonio/cluster-manager:0.2.8-SNAPSHOT
image: seldonio/apife:0.2.8-SNAPSHOT
```


Dependencies
------------

There are no dependencies. However, to install Seldon set odh_deploy: true in the Custom Resource file.


License
-------

Apache License 2.0 

Author Information
------------------

jnakfour@redhat.com

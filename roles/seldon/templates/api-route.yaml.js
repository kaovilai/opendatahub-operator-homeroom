apiVersion: route.openshift.io/v1
kind: Route
metadata:
  name: release-name-seldon-apiserver
  namespace: "{{ meta.namespace }}"  
spec:
  port:
    targetPort: http
  to:
    kind: Service
    name: release-name-seldon-apiserver

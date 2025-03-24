# What's this?

This is a simple repository that is resposible for geenrating my [github page](https://yoga1290.github.io), obivously!

# Run

Build on Docker and run on `tomcat:11`:
+ `docker compose up`
   + It triggers `npm i && npm run build` on `node:21-alpine` container
   + When done, it starts a `tomcat:11` container with the static/resources serving directory shared as docker volume.
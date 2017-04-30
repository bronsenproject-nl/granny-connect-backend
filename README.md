# granny-connect-backend

Granny Connect Backend is a service that is written in JAVA and packaged in Docker.

The services is used to serve the ionic-interface for Granny-Connect.

## Build Granny-Connect-Backend

Please run to build with maven:

```mvn package```

To package in Docker please run:

```docker build -t granny-connect-backend```

## Run Granny-Connect-Backend

Please run:

```docker run granny-connect-backend```
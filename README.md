# granny-connect background

Granny-Connect is an application for caregivers in the relative sense. The main tasks are:

 * Managing perscriptions
   * Perscription agenda
   * Pharmaceutical appointments
 * Managing contacts / appointments (formal and informal)
   * Docter appointments
   * Relative appointments
 * Resource management
   * "Zorgvinder?"
   * Caregiver support
 * Logbook
   * Weight
   * Temperature

# granny-connect-backend
The service is used to serve the ionic-interface for Granny-Connect.

It is a service that is written in JAVA and packaged in Docker.


## Build Granny-Connect-Backend

Please run to build with maven:

```mvn package```

To package in Docker please run:

```docker build -t granny-connect-backend```

## Run Granny-Connect-Backend

Please run:

```docker run granny-connect-backend```
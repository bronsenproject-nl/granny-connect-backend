# granny-connect background

Granny-Connect is an application for caregivers in the relative sense. The main tasks are:

It has 2 main functions. Check the mental and emotional health of the caregiver and record the physical, emtional and mental heatlth of the caretaker(s).

 * **Caregiver**
   * Health check caregiver
   * Resource management
     * "Zorgvinder?"
     * Caregiver support
 * **Caretaker(s)**
   * Managing perscriptions
     * Perscription agenda
     * Pharmaceutical appointments
   * Managing appointments (formal and informal)
     * Docter appointments
     * Relative appointments
   * Logbook
     * Weight
     * Temperature

# granny-connect-rest-api
The service is used to serve the ionic-interface for Granny-Connect.

It is a service that is written in JAVA and packaged in Docker.


## Build granny-connect-backend

Please run to build with maven:

 `npm install`  
 `npm run build`  
 `npm run start -- --database:host localhost`  

To package in Docker please run:

```docker build -t granny-connect-rest-api```

## Run granny-connect-backend

Please run:

```docker run granny-connect-rest-api```

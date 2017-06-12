# granny-connect background

Granny-Connect is an application for caregivers in the relative sense. The main tasks are:

It has 2 main functions. Check the mental and emotional health of the caregiver and record the physical, emtional and mental heatlth of the caretaker(s).

* **Careteam**
  * **Caregiver**
    * Health check caregiver
    * Resource management
      * "Zorgvinder?"
      * Caregiver support
  * **Caretaker(s)**
    * Managing agenda
    * Managing perscriptions
      * Perscription agenda
      * Pharmaceutical appointments
    * Managing appointments (formal and informal)
      * Docter appointments
      * Relative appointments
    * Logbook
      * Weight
      * Temperature

# granny-connect-backend
The service is used to serve the ionic-interface for Granny-Connect. It is written in NodeJS and packged in Docker.

## Build granny-connect-backend

* To build the NPM modules, please run: `npm install`  
* To transpile the TypeScript files, please run: `npm run build`  
* To package in Docker, please run: `docker build -t granny-connect-api`

## Run granny-connect-backend

* Run in test without Docker, please run: `npm run start -- --database:host localhost --env development`
* Run in production without Docker, please run: `npm run start -- --database:host localhost`  
* Run from a Docker container, please run: `docker run granny-connect-api`

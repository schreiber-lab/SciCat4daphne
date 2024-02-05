!!! warning  "Project is still under active development"
     Please consider this project in it's current state just as a 
     draft. The api is not yet stable and there may still be important 
     security vulnerabilities. Documentation is still far from being complete.

## Installation of SciCat4daphne
  
### Requirements
 
The described installation has been tested on the following systems:
 
 - Virtual machine running Ubuntu 20.04 
 
Tested dependency Versions:

 - `docker` version 24
 - `docker-compose` version 1.29, installed via _pip_
 
### Getting started
Just navigate into the `scicatlive4daphne` directory and run

```
docker-compose up -d
```

to look at log messages use

```
docker-compose logs
```
 
to stop all services use

```
docker-compose down
``` 
 
### Necessary adoptions 
 
 - configuration of upload frontend
 - password of MongoExpress
 - passwords of default users
 
 configuration templates are provided in `scicatlive4daphne/config`
 
## Services in detail
 
This is an overview of the different services invoked through docker-compose together with the most important configuration options.
 

 
### SciCat Backend 

the configuration file is located in 
    
```
/scicat4daphne/scicatlive4daphne/config/backend/config.env
```

but should not need site-specific changes for a basic installation. For a production environment e.g. the entries `pidPrefix` and `site` should be specified.
 
### SciCat Frontend 

this service uses the configuration file

```
scicatlive4daphne/config/frontend/config.json

```

where e.g. the appearance of the scientific metadata (tree view vs. simple tabular view) and the columns of the dataset table can be configured.
 
### Reverse Proxy (Traefik)

this service is used to _stitch_ the different services in docker-compose together
 
### Database (MongoDB)
  
all configuration happens in the `docker-compose.yaml`. Most important is the mounting point for the _ mongoDB_ on the host system which is specified at

```
    volumes:
      - "/srv/mongodb:/bitnami/mongodb"     # check that is mount exists on local file-system
```

in the `docker-compose.yaml` there are also some hints for database backups using the provided script.
 
### Upload Frontend 
 
 
Can be found at `http://scicat-host/upload` with configuration in `scicatlive4daphne/config/upload/env.js`. 
This file needs to be adopted for each running SciCat instance.

```
window.env = {
  "REACT_APP_API_URL": "http://your-scicat-domain.org/api/v3",
  "REACT_APP_API_URL2": "http://your-scicat-domain.org",
  "REACT_APP_STORE_KEY": "scicat",
  "REACT_APP_EXTERNAL_DATASETS_URL": "http://your-scicat-domain.org/datasets",
  "REACT_APP_ROUTER_BASENAME": "/upload",
  "PUBLIC_URL": "http://your-scicat-domain.org/upload",
  "REACT_APP_SCICAT_DEFAULT_DS_OWNER": "a_owner",
  "REACT_APP_SCICAT_DEFAULT_DS_GROUP": "a_group",
  "REACT_APP_SCICAT_DEFAULT_DS_OWNER_GROUP": "a_owner_group"
}
``` 
 
the primary change needed is to exchange `your-scicat-domain.org` according to the local conditions. For test installation e.g. replace with `localhost`
 
### Addon API 
 
Currently there is no configuration for this service. An interactive api-documentation can be found at `http://scicat-host/swagger-ui`.

 
!!! warning  "Not Secure"
    - calls to this additional backend api currently do not rely on any authentication 
 
### MongoDB Web GUI (MongoExpress)
 
Mainly intended for those who are managing the installation and for inspection of the DB. By default this service is deactivated (commented out in `docker-compose.yaml`). The login for this service is specified in the `docker-compose.yaml` and managed by `traefik`. The password is hashed using 🔴 which can e.g. be generated at 🔴.
 
 
## Maintenance and House Keeping
 
### Backup
 
The current backup strategy is to run the script `scicatlive4daphne\backup.sh` periodically e.g. in a _cron job_ running it via docker inside an already running container via
```
docker exec scicatlive4daphne_mongodb_1 /backup.sh
```
from the host system. This script basically relies on [mongodump](https://www.mongodb.com/docs/database-tools/mongodump/).
 
#### Restore from backup
 
  Please have a look at the documentation of [mongorestore](https://www.mongodb.com/docs/database-tools/mongorestore/).
  In case you want to import an existing _dump_ please do so starting from a clean Mongo DB before starting the SciCat backend for the first time.
  
 
 <!--
 ### Symbols for doc writing 
 ✅ ❌ ❓ 🔴 🔶
 -->
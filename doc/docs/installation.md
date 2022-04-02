!!! warning  "Project is still under active development"
     Please consider this project in it's current state just as a 
     draft. The api is not yet stable and there may still be important 
     security vulnerabilities. Documentation is still far from being complete.

## Installation of SciCat4daphne
  
### Requirements
 
The described installation has been tested on the following systems:
 
 - Virtual machine running Ubuntu 20.04 
 
Tested dependency Versions:

 - `docker` version 🔴
 - `docker-compose` version 🔴 installed via 🔴
 
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
 
  🔴 Still to be specified.
 
 - config of upload frontend
 - password of MongoExpress
 - passwords of default users
 
## Services in detail
 
This is an overview of the different services invoked through docker-compose together with the most important configuration options.
 
!!! help "ask questions / contribute to the configuration"
    Do not hesitate to participate in GitHub Issue 🔴
 
### SciCat Backend (Catamel)

the configuration file is located in 
    
```
scicatlive4daphne/config/catamel/config.local.js
```

but should not need site-specific changes for a basic installation. For a production environment the entries `pidPrefix` and `site` should be specified.
 
### SciCat Frontend (Catanie)

this service uses the configuration file

```
scicatlive4daphne/config/catanie/config.json

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
fd 

Obvious TODOs:
  - specify the user of the host system that creates the db (currently it is the user with the uid 🔴)
 
 
### Upload Frontend 
 
!!! warning  "Under development"
    This service may still change significantly especially if parts of it will be ported to Catanie. Please consider this part of the project as a working draft to to define the necessary features.
 
Can be found at `http://scicat-host/upload`.
 
### Addon API 
 
Currently there is no configuration for this service. An interactive api-documentation can be found at `http://scicat-host/swagger-ui`.

 
!!! warning  "Not Stable"
    This service may disappear completely in case it's functionality would be integrated into Catamel.
 
Know issues:
 
 - calls to this additional backend api currently do not check the token issued by Catamel
 
### MongoDB Web GUI (MongoExpress)
 
Mainly intended for those who are managing the installation and for inspection of the DB. By default this service is deactivated (commented out in `docker-compose.yaml`). The login for this service is specified in the `docker-compose.yaml` and managed by `traefik`. The password is hashed using 🔴 which can e.g. be generated at 🔴.
 
 
## Maintenance and House Keeping
 
### Backup
 
The current backup strategy 🔴
 
  🔶 TODO: Once there is a script for backup describe it here 
 
#### Restore from Backup
 
  🔴 Still to come...
  
### search-api

  🔶 TODO: still to be seen if there is a sensible how to integrate this in this context.
  
 
 
 <!--
 ### Symbols for doc writing 
 ✅ ❌ ❓ 🔴 🔶
 -->
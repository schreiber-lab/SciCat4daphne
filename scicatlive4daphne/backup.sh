#! /bin/bash

# this script assumes that there is a /backup mount in the docker container

cd /backup
mongodump
date=$(date +"%Y-%m-%d")
mv dump "dump_${date}"

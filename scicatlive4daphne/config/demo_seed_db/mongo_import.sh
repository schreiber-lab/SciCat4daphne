#!/bin/sh

cd /docker-entrypoint-initdb.d/scicat

for FILE_NAME in $(ls *.json)
do
    echo $FILE_NAME
    mongoimport --host localhost --db dacat --collection ${FILE_NAME%.*} --file $FILE_NAME --jsonArray
done

cd /docker-entrypoint-initdb.d/scicat_addon

for FILE_NAME in $(ls *.json)
do
    echo $FILE_NAME
    mongoimport --host localhost --db scicat_addons --collection ${FILE_NAME%.*} --file $FILE_NAME --jsonArray
done

# deploy doc
```
cd doc
mkdocs gh-deploy --force
```

#run backup script from host system inside docker container
```
docker exec scicatlive4daphne_mongodb_1 /backup.sh
```

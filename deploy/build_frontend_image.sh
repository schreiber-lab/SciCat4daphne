cd frontend

#cp -r src/assets/images  ../../scicatlive4daphne/config/catanie/images
#cp -r src/assets/icons  ../../scicatlive4daphne/config/catanie/icons

docker build -t pithan/frontend:latest .
docker login --username=pithan
docker push pithan/frontend:latest

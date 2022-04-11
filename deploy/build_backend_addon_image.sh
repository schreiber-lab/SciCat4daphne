cd ../backend_addon

docker build -t pithan/backend_addon:latest .
docker login --username=pithan
docker push pithan/backend_addon:latest

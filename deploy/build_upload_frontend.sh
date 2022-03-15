cd ..

docker run -v ${PWD}/upload_frontend:/home/node/app -v ${PWD}/deploy/upload_frontend/upload_frontend_build:/home/node/app/build -v ${PWD}/deploy/upload_frontend:/home/node/build_scripts -v ${PWD}/deploy/upload_frontend/env:/home/node/app/.env node:14.19-alpine ash home/node/build_scripts/build.sh

cd deploy/upload_frontend

docker build -t pithan/upload_frontend:latest .
docker login --username=pithan
docker push pithan/upload_frontend:latest

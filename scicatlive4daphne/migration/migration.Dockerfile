FROM node:16-bullseye-slim

RUN apt-get update && apt-get install -y \
    git \
    && rm -rf /var/lib/apt/lists/*

WORKDIR /home/node/app

RUN git clone https://github.com/SciCatProject/scicat-backend-next.git

WORKDIR /home/node/app/scicat-backend-next
COPY ./migrate-mongo-config.js ./migrate-mongo-config.js 

RUN npm install
CMD npm run migrate:db:up

FROM node:16.13-alpine as builder
WORKDIR /app

ARG NODE_ENV=${NODE_ENV}

COPY package.json ./
COPY package-lock.json ./

RUN npm i 

COPY . ./
COPY .env ./

ENV NODE_ENV=${NODE_ENV}

expose 8080

CMD ["node","index"]

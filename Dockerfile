# DEVELOPMENT DOCKER FILE

FROM node:23.9-alpine

LABEL authors="triddov"

WORKDIR /app

COPY package*.json .

RUN npm i

COPY . .

COPY ./dist ./dist

CMD ["npm", "run", "start:dev"]

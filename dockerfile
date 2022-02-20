FROM node:alpine
WORKDIR /usr/src/app
COPY package*.json .
run npm ci
copy . .
CMD [ "node", "app.js" ]

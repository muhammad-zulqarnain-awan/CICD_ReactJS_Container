FROM node:14-alpine

LABEL maintainer="Muhammad-Zulqarnain-Awan"

WORKDIR /app

COPY package.json ./

RUN npm install

COPY . .

RUN npm run build && npm install -g serve

WORKDIR /app/dist

EXPOSE 3000

CMD [ "serve" ]
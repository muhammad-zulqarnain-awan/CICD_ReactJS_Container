FROM node:alpine

LABEL maintainer="Muhammad-Zulqarnain-Awan"

WORKDIR /app

COPY package.json ./

RUN npm install

COPY . .

RUN npm run build && cd ./dist

EXPOSE 3000

CMD ["serve"]
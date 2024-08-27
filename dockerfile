FROM node:alpine

LABEL maintainer="Muhammad-Zulqarnain-Awan"

WORKDIR /app

COPY package.json ./

RUN npm install

COPY . .

RUN npm run build

RUN npm install -g serve

EXPOSE 3000

CMD ["serve"]
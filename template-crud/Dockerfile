FROM node

WORKDIR /usr/src/app

RUN apt-get update && apt-get install -y bash

COPY package*.json ./

COPY . .

EXPOSE 3000

CMD ["npm","start"]
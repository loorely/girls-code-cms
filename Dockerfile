FROM node:16.17.0

WORKDIR /app

COPY package*.json .

COPY yarn.lock .

RUN yarn install

COPY . .

EXPOSE 8000

CMD yarn start
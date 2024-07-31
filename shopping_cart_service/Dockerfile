FROM node:14-slim

WORKDIR /app

COPY ./package.json ./

RUN npm install
RUN npm install axios


COPY . .

EXPOSE 5003

CMD ["npm", "run", "dev"]
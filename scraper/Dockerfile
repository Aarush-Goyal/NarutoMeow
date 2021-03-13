FROM node:15-slim

WORKDIR /app

COPY package.json .

RUN npm install

COPY . .

CMD ["npm", "start"]

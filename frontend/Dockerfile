FROM node:25-slim

Add app.js .

COPY package.json ./

run npm install

COPY . .

CMD ["node", "/app.js"]
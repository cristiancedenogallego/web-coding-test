FROM node:12.19.0-alpine3.9 AS development

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install glob rimraf

RUN npm install 

COPY . .

RUN npm run build

FROM node:12.19.0-alpine3.9 as production

ARG NODE_ENV=production
ENV NODE_ENV=${NODE_ENV}

COPY ./scripts/wait-for-it.sh /var/www/html/wait-for-it.sh
RUN chmod +x /var/www/html/wait-for-it.sh


WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install --only=production

COPY . .

COPY --from=development /usr/src/app/dist ./dist

CMD ["/var/www/html/wait-for-it.sh" , "db:3306" , "--strict" , "--timeout=20000" , "--" , "/usr/local/bin/docker-entrypoint.sh", "node", "dist/main"]



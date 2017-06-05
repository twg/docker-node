FROM node:8.0.0-alpine

ENV NPM_CONFIG_LOGLEVEL warn

WORKDIR /code/

# COPY package.json .
# COPY package-lock.json .
COPY . .
RUN npm install


# RUN apk add --update --no-cache tini
# ENTRYPOINT ["/sbin/tini", "--", "npm", "start"]

EXPOSE 8000

CMD ["npm", "start"]

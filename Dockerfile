FROM node:8.0.0-alpine
ENV NPM_CONFIG_LOGLEVEL warn
WORKDIR /code/
COPY . .
RUN npm install
EXPOSE 8000
CMD ["npm", "start"]

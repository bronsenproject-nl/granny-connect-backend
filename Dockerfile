
FROM mhart/alpine-node:6

# install the tools we need
RUN apk update && apk add --no-cache \
    curl git \
    && rm -rf /var/cache/apk/*

# https://nodejs.org/en/docs/guides/nodejs-docker-webapp/
# Create app directory
RUN mkdir -p /usr/app/build
WORKDIR /usr/app

# Install app dependencies
COPY package.json /usr/app/
RUN npm install

# Install app
COPY build/. /usr/app/build

EXPOSE 11000

CMD [ "npm", "start" ]


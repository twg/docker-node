#!/bin/bash

# exit if any commands fail
set -e

# build an image with a nice name
docker build -t davidpellerin/node-api .

# run the tests
docker run davidpellerin/node-api npm run test

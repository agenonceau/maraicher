#!/bin/sh

cd back
npm install
npm run build

cd ..
docker-compose up --build
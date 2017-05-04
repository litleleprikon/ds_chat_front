#!/usr/bin/env bash

npm i --production
npm run build
docker build -t litleleprikon/ds-chat-front
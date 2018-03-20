#!/bin/bash

echo -e "\e[1;34m[KENGSENG] WELCOME TO TEST AUTOMATION OF ANGULAR-PHONECAT SAMPLE PROJECT!\e[0m"

npm i bower --save-dev
bower install
npm start &
npm run test-single-run
npm run e2e


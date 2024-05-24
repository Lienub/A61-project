#!/usr/bin/env bash

GREEN='\033[1;92m'
RED='\033[0;31m'
NC='\033[0m'

# Build the project
echo "Building the project..."
npm install
npm run build

if [ $? -eq 0 ]; then
    chmod +x ./configs/success.sh
    ./configs/success.sh
else
    npm run clear
    chmod +x ./configs/error.sh
    ./configs/error.sh
fi
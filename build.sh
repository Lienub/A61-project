!/usr/bin/env bash

Green='\033[0;32m' 
NC='\033[0m'

# Build the project
echo "Building the project..."
cd runic-calculator/
npm install
npm run build
cd ..
echo "----------------------------------------"
echo -e "${Green}Project built successfully!${NC}"
echo "----------------------------------------"

echo "Running build script .... \n \n "

echo "\n---------------------------------------\n\n    ⏳   Running Build for scraper...\n\n---------------------------------------\n\n"

cd scraper
docker build -t aarushgoyal/narutomeow-scraper .

echo "\n---------------------------------------\n   🚀   Build for scraper completed!\n---------------------------------------\n   "

echo "\n---------------------------------------\n\n    ⏳   Running Build for api...\n\n---------------------------------------\n\n"

cd .. && cd api
docker build -t aarushgoyal/narutomeow-api .

echo "\n---------------------------------------\n   🚀   Build for api completed!\n---------------------------------------\n   "

echo "\n---------------------------------------\n\n    ⏳   Running Build for bot...\n\n---------------------------------------\n\n"

cd .. && cd bot
docker build -t aarushgoyal/discord-bot .
cd ..

echo "\n---------------------------------------\n   🚀   Build for bot completed!\n---------------------------------------\n   "

echo "\n---------------------------------------\n\nAll builds finished!\n\n---------------------------------------\n\n"
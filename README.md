# Naruto Meow

<img src="./images/hero.png">
<br>
<br>
<a href="https://discord.com/oauth2/authorize?client_id=808017136563257404&scope=bot&permissions=2147483647" ><h4 align="center">Add the bot on your server</h4></a>
<br>
<br>

## Prerequisites

You should have a discord developer account

## Setting up the development environment

1. Fork the repo
2. Clone the repo
   ```bashPrerequisites
   git clone https://www.github.com/<your username>/my-bot.git
   ```
3. Install the packages required
   ```bash
   pipenv install
   ```
4. Setup the `.env` file
   ```
   TOKEN=<your token>
   WELCOME_MESSAGE_CHANNEL_ID=<your channel id>
   PREFIX=<your prefix>
   ```
5. Activate the shell

   ```bash
   pipenv shell
   ```

6. Run the bot
   ```bash
    python main.py
   ```

# My Bot

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
   ```
5. Activate the shell

   ```bash
   pipenv shell
   ```

6. Run the bot
   ```bash
    python main.py
   ```
import os
from dotenv import load_dotenv, find_dotenv

load_dotenv(find_dotenv())

TOKEN = os.environ.get('TOKEN')
WELCOME_MESSAGE_CHANNEL_ID = int(os.environ.get('WELCOME_MESSAGE_CHANNEL_ID'))
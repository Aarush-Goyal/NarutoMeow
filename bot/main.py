import os
import discord
from discord.activity import Game
from discord.ext import commands, tasks
from config.config import PREFIX, TOKEN, WELCOME_MESSAGE_CHANNEL_ID, DOMAIN

import socketio


# ---------------------------------------------------------------------------------------------

# client

client = commands.Bot(command_prefix=PREFIX)
sio = socketio.Client()


# ---------------------------------------------------------------------------------------------


@client.event
async def on_ready():
    general_channnel = client.get_channel(WELCOME_MESSAGE_CHANNEL_ID)
    await general_channnel.send('Meow!')
    await client.change_presence(status=discord.Status.online, activity=discord.Game("with Elon Musk on Mars"))


@commands.command()
async def load(context, extension):
    client.load_extension(f'cogs.{extension}')


for filename in os.listdir("./cogs"):
    if filename.endswith(".py"):
        client.load_extension(f'cogs.{filename[:-3]}')


# ---------------------------------------------------------------------------------------------

# socket
sio.connect(DOMAIN)


@sio.event
def connect():
    print("I'm connected!")


@sio.on("price_under")
def on_price_under(data):
    print(f'    \n  {data} \n   ')


# ---------------------------------------------------------------------------------------------
# running the client on the server
client.run(TOKEN)

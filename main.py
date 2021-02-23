import os
import discord
from discord.activity import Game
from discord.ext import commands, tasks
from config.config import PREFIX, TOKEN, WELCOME_MESSAGE_CHANNEL_ID

# client

client = commands.Bot(command_prefix=PREFIX)


# ---------------------------------------------------------------------------------------------


@client.event
async def on_ready():
    general_channnel = client.get_channel(WELCOME_MESSAGE_CHANNEL_ID)
    await general_channnel.send('I am online!')
    await client.change_presence(status=discord.Status.online, activity=discord.Game("with Elon Musk on Mars"))


@commands.command()
async def load(context, extension):
    client.load_extension(f'cogs.{extension}')


for filename in os.listdir("./cogs"):
    if filename.endswith(".py"):
        client.load_extension(f'cogs.{filename[:-3]}')


# ---------------------------------------------------------------------------------------------


# running the client on the server
client.run(TOKEN)

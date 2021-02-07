# https://discord.com/oauth2/authorize?client_id=808017136563257404&scope=bot&permissions=2147483647 -- oauth link to integrate the bot on your server

import discord
from discord import channel
from config import TOKEN, WELCOME_MESSAGE_CHANNEL_ID

# client

client = discord.Client()


@client.event
async def on_ready():
    general_channnel = client.get_channel(WELCOME_MESSAGE_CHANNEL_ID)
    await general_channnel.send('I am online!')


@client.event
async def on_message(message):
    if message.author == client.user:
        return

    if message.content.startswith('--hi'):
        await message.channel.send('Hello!')


# running the client on the server
client.run(TOKEN)

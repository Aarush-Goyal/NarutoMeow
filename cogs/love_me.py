import discord
from discord import client
from discord.ext import commands
# from main import WELCOME_MESSAGE_CHANNEL_ID


class LoveMe(commands.Cog):

    def __init__(self, client):
        self.client = client

    # Commands
    @ commands.command(brief="Tells the person the bots affection towards the message author")
    async def love_me(self, context, *args):
        await context.message.author.send(f'I love you {context.message.author}! \n https://media.giphy.com/media/ZOln4JxCoZay4/giphy.gif')


def setup(client):
    client.add_cog(LoveMe(client))

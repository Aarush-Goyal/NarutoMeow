import discord
from discord import client
from discord.ext import commands
# from main import WELCOME_MESSAGE_CHANNEL_ID


class WhoAmI(commands.Cog):

    def __init__(self, client):
        self.client = client

    # Commands
    @ commands.command(brief="Tells the person their username")
    async def who_am_i(self, context, *args):
        await context.message.channel.send(f'You are @{context.message.author}!')


def setup(client):
    client.add_cog(WhoAmI(client))

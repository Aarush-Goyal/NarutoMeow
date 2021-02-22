import discord
from discord import client
from discord.ext import commands
# from main import WELCOME_MESSAGE_CHANNEL_ID


class SendBob(commands.Cog):

    def __init__(self, client):
        self.client = client

    # Commands
    @ commands.command(brief="Sends bo*b")
    async def send_bob(self, context, *args):
        await context.message.channel.send(f'https://gph.is/g/EGyyPx1')


def setup(client):
    client.add_cog(SendBob(client))

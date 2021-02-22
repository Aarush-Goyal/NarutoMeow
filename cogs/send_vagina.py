import discord
from discord import client
from discord.ext import commands
# from main import WELCOME_MESSAGE_CHANNEL_ID


class SendVagina(commands.Cog):

    def __init__(self, client):
        self.client = client

    # Commands
    @ commands.command(brief="Sends vagina")
    async def send_vagina(self, context, *args):
        await context.message.channel.send(f'http://gph.is/2d4NgsA')


def setup(client):
    client.add_cog(SendVagina(client))

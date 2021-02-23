import discord
from discord import client
from discord.ext import commands
# from main import WELCOME_MESSAGE_CHANNEL_ID


class Send(commands.Cog):

    def __init__(self, client):
        self.client = client

    # Commands
    @commands.command(brief="Sends bobs or vagina")
    async def send(self, context, *args):
        if("bobs" in args):
            await context.message.channel.send(f'https://gph.is/g/EGyyPx1')
        if("vagina" in args):
            await context.message.channel.send(f'http://gph.is/2d4NgsA')


def setup(client):
    client.add_cog(Send(client))

import discord
from discord import client
from discord.ext import commands


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
        if("maal" in args):
            await context.message.channel.send(f'https://gph.is/2NxhzIo')
            await context.message.author.send(f'Chalo kabhi mars par Himalaya bhul jaoge!')


def setup(client):
    client.add_cog(Send(client))

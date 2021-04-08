import discord
from discord import client
from discord.ext import commands


class Clear(commands.Cog):

    def __init__(self, client):
        self.client = client

    # Commands
    @commands.command(name="clear", brief="Clears messages (by default 10 messages")
    async def send(self, context, *args):
        if (len(args) > 0):
            await context.message.channel.purge(limit=int(args[0]))
            await context.message.channel.send(f'https://gph.is/2S34plo')
            await context.message.channel.send(f'Cleared {int(args[0])} messages')
        else:
            await context.message.channel.purge(limit=10)
            await context.message.channel.send(f'https://gph.is/2S34plo')
            await context.message.channel.send(f'Cleared 10 messages')


def setup(client):
    client.add_cog(Clear(client))

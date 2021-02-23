import typing
import discord
from discord import client
from discord.ext import commands
import aiohttp


class Random(commands.Cog):

    def __init__(self, client):
        self.client = client

    # Commands
    @commands.command(name="random", brief="Sends random cat and dog embeds")
    async def random(self, context, *args):
        if("cat" in args):
            async with context.message.channel.typing():
                async with aiohttp.ClientSession() as cs:
                    async with cs.get("http://aws.random.cat/meow") as r:
                        data = await r.json()
                        embed = discord.Embed(title="Meow")
                        embed.set_image(url=data['file'])
                        await context.send(embed=embed)
        if("dog" in args):
            async with context.message.channel.typing():
                async with aiohttp.ClientSession() as cs:
                    async with cs.get("http://random.dog/woof.json") as r:
                        data = await r.json()
                        embed = discord.Embed(title="Woof")
                        embed.set_image(url=data['url'])
                        await context.send(embed=embed)


def setup(client):
    client.add_cog(Random(client))

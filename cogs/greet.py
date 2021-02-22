import discord
from discord import client
from discord.ext import commands
# from main import WELCOME_MESSAGE_CHANNEL_ID


class Greet(commands.Cog):

    def __init__(self, client):
        self.client = client

    # Commands
    @ commands.command(bbrief="Greets people with a gif")
    async def greet(self, ctx):
        await ctx.send("Greetings to all! :innocent: \n https://media.giphy.com/media/MF6DEuZXk1VNsjG675/giphy.gif ")


def setup(client):
    client.add_cog(Greet(client))

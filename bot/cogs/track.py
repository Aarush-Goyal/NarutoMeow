import discord
from discord import client
from discord.ext import commands
# from main import WELCOME_MESSAGE_CHANNEL_ID


class Track(commands.Cog):

    def __init__(self, client):
        self.client = client

    # Commands
    @ commands.command(brief="Tracks amazon links")
    async def track(self, ctx, prodLink, email):
        await ctx.send("Tracking price of :")
        await ctx.send(f'{prodLink}')
        await ctx.send(f"I will notify you at {email}")


def setup(client):
    client.add_cog(Track(client))

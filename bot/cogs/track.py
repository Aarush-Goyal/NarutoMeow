import discord
import requests
from discord import client
from discord.ext import commands
# from main import WELCOME_MESSAGE_CHANNEL_ID
from main import DOMAIN


class Track(commands.Cog):

    def __init__(self, client):
        self.client = client

    # Commands
    @ commands.command(brief="Tracks amazon links")
    async def track(self, context, prodLink, targetPrice):
        await context.send(f'Tracking price of {prodLink} for target price {targetPrice} and notifying on channel id {context.message.channel.id}')
        requests.post(f'{DOMAIN}/api/v1/amzn', {
            "url":
            prodLink,
            "targetPrice": targetPrice,
            "channelId": context.message.channel.id
        })


def setup(client):
    client.add_cog(Track(client))

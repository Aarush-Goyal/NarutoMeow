# https://discord.com/oauth2/authorize?client_id=808017136563257404&scope=bot&permissions=2147483647 -- oauth link to integrate the bot on your server

import discord
from discord import channel
from config import TOKEN, WELCOME_MESSAGE_CHANNEL_ID

# client

client = discord.Client()


@client.event
async def on_ready():
    general_channnel = client.get_channel(WELCOME_MESSAGE_CHANNEL_ID)
    await general_channnel.send('I am online!')


@client.event
async def on_message(message):
    if message.author == client.user:
        return

    if message.content.startswith('--hi'):
        await message.channel.send('Hello!')

    # sending embeds as messages
    if message.content.startswith('--send-embed'):
        myEmbed = discord.Embed(title="The Current Version",
                                description="The bot is in Version 1.0",
                                color=0x222222)
        myEmbed.add_field(name="Version Code:", value="v1.0.0", inline=False)
        myEmbed.add_field(name="Date released:",
                          value="8th Feb 2021",
                          inline=False)
        myEmbed.set_footer(text="These have been checked and verified")

        await message.channel.send(embed=myEmbed)


# running the client on the server
client.run(TOKEN)

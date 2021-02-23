import discord
from discord.ext import commands


class Version(commands.Cog):

    def __init__(self, client):
        self.client = client

    # Commands
    @ commands.command(brief="Tells the version of the bot")
    async def version(self, context):
        myEmbed = discord.Embed(title="The Current Version",
                                description="The bot is in Version 1.0",
                                color=0xfcba03)
        myEmbed.add_field(name="Version Code:", value="v1.5.0", inline=False)
        myEmbed.add_field(name="Date released:",
                          value="8th Feb 2021",
                          inline=False)
        myEmbed.set_footer(text="These have been checked and verified")
        await context.message.channel.send(embed=myEmbed)


def setup(client):
    client.add_cog(Version(client))

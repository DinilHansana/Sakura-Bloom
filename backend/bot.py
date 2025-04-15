
import discord
from discord.ext import commands
import asyncio
import os
from dotenv import load_dotenv

from music import Music

load_dotenv()

intents = discord.Intents.all()
bot = commands.Bot(command_prefix='!', intents=intents)

@bot.event
async def on_ready():
    print(f'Bot connected as {bot.user}')
    await bot.tree.sync()
    try:
        await bot.load_extension('music')
    except Exception as e:
        print(f'Failed to load music extension: {e}')

def run_bot():
    token = os.getenv("DISCORD_TOKEN")
    bot.run(token)

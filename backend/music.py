
import discord
from discord import app_commands
from discord.ext import commands
import wavelink
import os

class Music(commands.Cog):
    def __init__(self, bot: commands.Bot):
        self.bot = bot
        bot.loop.create_task(self.start_lavalink())

    async def start_lavalink(self):
        await self.bot.wait_until_ready()
        node = wavelink.Node(uri='http://localhost:2333', password='youshallnotpass')
        await wavelink.Pool.connect(client=self.bot, nodes=[node])

    @app_commands.command(name="play", description="Play a song from Spotify or YouTube.")
    async def play(self, interaction: discord.Interaction, query: str):
        if not interaction.user.voice or not interaction.user.voice.channel:
            await interaction.response.send_message("Join a voice channel first!", ephemeral=True)
            return

        vc: wavelink.Player = await interaction.user.voice.channel.connect(cls=wavelink.Player)
        tracks = await wavelink.Playable.search(query)
        if not tracks:
            await interaction.response.send_message("Track not found.")
            return

        await vc.play(tracks[0])
        await interaction.response.send_message(f"Now playing: {tracks[0].title}")

    @app_commands.command(name="stop", description="Stop music playback.")
    async def stop(self, interaction: discord.Interaction):
        if not interaction.guild.voice_client:
            await interaction.response.send_message("I'm not connected to a voice channel.", ephemeral=True)
            return

        vc: wavelink.Player = interaction.guild.voice_client
        await vc.disconnect()
        await interaction.response.send_message("Disconnected.")

async def setup(bot: commands.Bot):
    await bot.add_cog(Music(bot))

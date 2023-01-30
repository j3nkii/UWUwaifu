const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('uwu')
		.setDescription('Replies with Pong!'),
	async execute(interaction) {
		await interaction.reply('yes daddy?');
	},
};
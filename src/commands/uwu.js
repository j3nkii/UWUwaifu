const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('uwu')
        .setDescription('UWU'),
	async execute(interaction) {
		await interaction.reply('yes daddy?');
	},
};
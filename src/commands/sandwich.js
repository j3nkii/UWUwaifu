const { SlashCommandBuilder } = require('discord.js');
const { sandwiches } = require('../discord.js');
module.exports = {
	data: new SlashCommandBuilder()
		.setName('sandwich')
        .setDescription('UWU'),
	async execute(interaction) {
        console.log(interaction);
        const sammy = Math.floor(Math.random() * 10);
        await interaction.reply(`${sandwiches[sammy]}`);
	},
};
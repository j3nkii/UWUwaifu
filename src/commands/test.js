const { SlashCommandBuilder } = require('discord.js');
const { sandwiches, discordUsers } = require('../discord.js');
module.exports = {
	data: new SlashCommandBuilder()
		.setName('test')
        .setDescription('UWU'),
	async execute(interaction) {
        console.log(interaction);
        
	},
};
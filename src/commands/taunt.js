const { SlashCommandBuilder } = require('discord.js');
const { sandwiches, discordUsers } = require('../discord.js');
module.exports = {
	data: new SlashCommandBuilder()
		.setName('taunt')
        .setDescription('UWU')
        .addUserOption(option =>
            option
                .setName('victim')
                .setDescription('UWU')
                .setRequired(true)),
	async execute(interaction) {
        console.log(interaction);
        if(interaction.user.id !== discordUsers.THAT_I_AM)return;
		const victim = interaction.options.getUser('victim');
        await interaction.reply(`lol nerd ${victim}`);
	},
};
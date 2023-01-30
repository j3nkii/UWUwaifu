const { REST, Routes } = require('discord.js');
const { clientId, guildId, token } = require('./discordConfig.json');
const fs = require('node:fs');
const commands = [];
const commandFiles = fs.readdirSync('./src/commands').filter(file => file.endsWith('.js'));
for (const file of commandFiles) {
	console.log(file);
	const command = require(`./src/commands/${file}`);
	console.log(command);
	commands.push(command.data.toJSON());
}
const rest = new REST({ version: '10' }).setToken(token);
(async () => {
	try {
		console.log(`Started refreshing ${commands.length} application (/) commands.`);
		const data = await rest.put(
			Routes.applicationGuildCommands(clientId, guildId),
			{ body: commands },
		);
		console.log(`Successfully reloaded ${data.length} application (/) commands.`);
	} catch (error) {
		console.error(error);
	}
})();
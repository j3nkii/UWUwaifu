require('dotenv').config();
// const bigOlUWU = require('./uwuNoise.mp3')
const { google } = require('googleapis');
const { join } = require('node:path');

const { Client, Collection, Events, GatewayIntentBits, ActionRowBuilder, ButtonBuilder, ButtonStyle } = require('discord.js');
const { joinVoiceChannel, createAudioResource, createAudioPlayer, AudioPlayerStatus, NoSubscriberBehavior } = require('@discordjs/voice');
const { discordUsers, discordChannels, sandwiches, spreadsheets } = require('./src/discord');
const { cronEvents } = require('./src/cronEvents');
const fs = require('node:fs');
const path = require('node:path');


const client = new Client({ intents: [
	GatewayIntentBits.Guilds,
	GatewayIntentBits.GuildMembers,
	GatewayIntentBits.GuildMessages,
	GatewayIntentBits.MessageContent,
	GatewayIntentBits.GuildScheduledEvents,
	GatewayIntentBits.GuildVoiceStates,
]});
cronEvents(client);
client.commands = new Collection();
const commandsPath = path.join(__dirname, './src/commands');
const commandFiles = fs.readdirSync(commandsPath).filter(file => file.endsWith('.js'));
console.log('####');
console.log(commandFiles);
for(const file of commandFiles) {
	const filePath = path.join(commandsPath, file);
	const command = require(filePath);
	client.commands.set(command.data.name, command);
}
client.on(Events.InteractionCreate, async interaction => {
	if (!interaction.isChatInputCommand()) return;
	const command = client.commands.get(interaction.commandName);
	if (!command) return;
	try {
		await command.execute(interaction);
	} catch (error) {
		console.error(error);
		await interaction.reply({ content: 'There was an error while executing this command!', ephemeral: true });
	}
});








client.once(Events.ClientReady, (c) => {
	console.log('##################UWU WAIFU IS READY FOR YOU##################');
	console.log(`Ready! Logged in as ${c.user.tag}`);
});
const googleAuth = new google.auth.GoogleAuth({
	keyFile: 'uwuwaifu-g-sheets.json',
	scopes: 'https://www.googleapis.com/auth/spreadsheets'
});


client.on(Events.GuildMemberAdd, async (event) => {
	console.log(event);
	const channel = await client.channels.fetch(discordChannels.J3NKii_WELCOME);
	channel.send({
		content: `Hello, <@${event.user.id}>! Welcome to the mother fuckin channel`
	});
});

client.on(Events.GuildScheduledEventCreate, async (event) => {
	console.log(event);
	const row = new ActionRowBuilder()
			.addComponents(
				new ButtonBuilder()
					.setCustomId('primary')
					.setLabel('RSVP')
					.setStyle(ButtonStyle.Primary)
					.setURL('https://discord.gg/SYzV42y4?event=1069081998066458624')
			);
	const { name, description, scheduledStartTimestamp } = event;
	const date = new Date(scheduledStartTimestamp);
	console.log(event);
	const channel = await client.channels.fetch(discordChannels.J3NKii_ANNOUNCEMENTS);
	channel.send({
		content: `
			*** EVENT ALERT ***\n
			${name} is happening at ${date.toDateString()} @ ${date.toTimeString()}
		`,
		components: [row]
	});
});



client.on(Events.MessageCreate, async (message) => {
	// console.log(message);
	// ANOTHER BEER
	const identifier = message.content.replace(/^(\$uwu).*/, '$1');
	const uwuCommand = message.content.replace(/^\$uwu (.*)/, '$1');
	console.log(uwuCommand);
	if(identifier !== '$uwu') return;
	//universal commands
	switch (uwuCommand) {
		case 'who\'s daddy':
		case 'whos daddy':
		case 'who daddy':
			message.reply(`<@${discordUsers.THAT_I_AM}> is daddy`);
			break;
		case 'sandwich':
			if(message.author.id === '400871447842783252'){
				message.reply('no');
			}
			const sammy = Math.floor(Math.random() * 10)
			message.reply(`${sandwiches[sammy]}`);
			break;
	}
	// NOT j3nkii commands
	if(message.author.id !== discordUsers.THAT_I_AM){
		switch (uwuCommand) {
			case 'whos my waifu':
				message.reply('who cares');
				break;
			case '$uwu':
				message.reply('yes?');
				break;
		}
	// J3NKii Commands
	} else {
		switch (uwuCommand) {
		case 'whos my waifu':
			message.reply(`<@${discordUsers.uwu_WAIFU}>\'s your waifu`);
			break;
		case '$uwu':
			message.reply('yes daddy?');
			break;
		case 'uwu':
			console.log("$$$$$UUUWUWWUUWU");
			const player = createAudioPlayer({
				behaviors: {
					noSubscriber: NoSubscriberBehavior.Pause,
				},
			});
			let resource = createAudioResource(join(__dirname, './src/commands/uwuNoise.mp3'));
			await player.play(resource);
			await message.reply({ content: 'uwu', ephemeral: true });
			const connection = joinVoiceChannel({
				channelId: '1068427770385928193',
				guildId: '1068427420941684779',
				adapterCreator: message.guild.voiceAdapterCreator,
				selfDeaf: false,
				selfMute: false,
			});
			await connection.subscribe(player);
			player.on(AudioPlayerStatus.Idle, () => {
				player.stop();
				connection.destroy();
			});
			break;
		case 'test':
			// console.log('###test');
			// const connection = joinVoiceChannel({
			// 	channelId: '1068427770385928193',
			// 	guildId: message.guild.id,
			// 	adapterCreator: message.guild.voiceAdapterCreator
			// });
			break;
		default:
			break;
		}
	}
});

//make sure this line is the last line
client.login(process.env.CLIENT_TOKEN);
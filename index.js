require('dotenv').config(); 
const { google } = require('googleapis');
const { Client, Events, GatewayIntentBits, ActionRowBuilder, ButtonBuilder, ButtonStyle } = require('discord.js');
const { discordUsers, discordChannels, sandwiches, spreadsheets } = require('./src/discord')
const cron = require('node-cron');

const client = new Client({ intents: [
	GatewayIntentBits.Guilds,
	GatewayIntentBits.GuildMembers,
	GatewayIntentBits.GuildMessages,
	GatewayIntentBits.MessageContent,
	GatewayIntentBits.GuildScheduledEvents
]});

const googleAuth = new google.auth.GoogleAuth({
	keyFile: 'uwuwaifu-g-sheets.json',
	scopes: 'https://www.googleapis.com/auth/spreadsheets'
});
// const googleClient = googleAuth
// console.log(googleAuth);

cron.schedule('0 9 * * *', async() => {
	const channel = await client.channels.fetch(discordChannels.J3NKii_GENERAL);
	channel.send({
		content: `Good morning <@${discordUsers.THAT_I_AM}>!`
	});
});

cron.schedule('0 */2 * * *', async() => {
	const channel = await client.channels.fetch(discordChannels.J3NKii_GENERAL);
	channel.send({
		content: 'Don\'t forget to drink some water!'
	});
});

client.once(Events.ClientReady, (c) => {
	console.log(`Ready! Logged in as ${c.user.tag}`);
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
					.setLabel('Click me!')
					.setStyle(ButtonStyle.Primary)
					.setURL('https://discord.gg/SYzV42y4?event=1069081998066458624'),
					// https://discord.gg/SYzV42y4?event=1069082365542006814
					// https://discord.gg/j6442nWb?event=1069082789015720039
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
	if(identifier !== '$uwu') return;
	//universal commands
	switch (uwuCommand) {
		case 'who\'s daddy':
		case 'whos daddy':
		case 'who daddy':
			message.reply(`<@${discordUsers.THAT_I_AM}> is daddy`);
			break;
		case 'sandwich':
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
		case 'test':
			const channel = await client.guilds.fetch(1068427420941684779);
			console.log(channel);
			// const googleClient = await googleAuth.getClient();
			// const googleSheets = await google.sheets({ version: 'v4', auth: googleClient });
			// const metaData = await googleSheets.spreadsheets.get({
			// 	auth: googleAuth,
			// 	spreadsheetId: spreadsheets.RSVP
			// });
			// console.log(metaData);
			break;
		default:
			break;
		}
	}
});

//make sure this line is the last line
client.login(process.env.CLIENT_TOKEN); //login bot using token
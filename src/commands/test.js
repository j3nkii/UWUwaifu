const { SlashCommandBuilder } = require('discord.js');
const { sandwiches, discordUsers } = require('../discord.js');
const { join } = require('node:path');
const { joinVoiceChannel, createAudioResource, createAudioPlayer, AudioPlayerStatus, NoSubscriberBehavior } = require('@discordjs/voice');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('test')
        .setDescription('UWU'),
	async execute(interaction) {
        const player = createAudioPlayer({
            behaviors: {
                noSubscriber: NoSubscriberBehavior.Pause,
            },
        });
        let resource = createAudioResource(join(__dirname, 'uwuNoise.mp3'));
        await player.play(resource);
		await interaction.reply({ content: 'uwu', ephemeral: true });
        const connection = joinVoiceChannel({
            channelId: '1068427770385928193',
            guildId: interaction.guild.id,
            adapterCreator: interaction.guild.voiceAdapterCreator,
            selfDeaf: false,
            selfMute: false,
        });
        await connection.subscribe(player);
        player.on(AudioPlayerStatus.Idle, () => {
            console.log('The audio player has started playing!');
            player.stop();
            connection.destroy();
        });
	},
};

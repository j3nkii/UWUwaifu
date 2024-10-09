const cron = require('node-cron');
const { discordChannels, discordUsers } = require('./discord');

const cronEvents = async (client) => {
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

    cron.schedule('*/10 * * * *', async() => {
        const channel = await client.channels.fetch(discordChannels.J3NKii_NOTIFICATIONS);
        channel.send({
            content: 'NEW NOTIFICATION'
        });
    });
}

module.exports = {
    cronEvents
}
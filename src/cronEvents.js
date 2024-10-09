const cron = require('node-cron');
const axios = require('axios');
const { discordChannels, discordUsers } = require('./discord');

const cronEvents = async (client) => {
    cron.schedule('0 22 * * *', async() => {
        const channel = await client.channels.fetch(discordChannels.J3NKii_GENERAL);
        channel.send({
            content: `Time for bed, <@${discordUsers.THAT_I_AM}>!`
        });
    });

    cron.schedule('0 9 * * *', async() => {
        const channel = await client.channels.fetch(discordChannels.J3NKii_GENERAL);
        channel.send({
            content: `Good morning, <@${discordUsers.THAT_I_AM}>!`
        });
    });

    cron.schedule('0 */2 * * *', async() => {
        const channel = await client.channels.fetch(discordChannels.J3NKii_GENERAL);
        channel.send({
            content: 'Don\'t forget to drink some water!'
        });
    });

    cron.schedule('*/5 * * * *', async() => {
        const upsResponse = await axios.get('https://us-2.fountain.com/internal_api/portal/ups/applications/272a71c6-e001-4966-9ed4-ddcca0dab4b0/schedule_slots/days?timezone=America%2FChicago');
        const channel = await client.channels.fetch('1293652000327602288');
        console.log(upsResponse.data);
        const user = await client.users.fetch(discordUsers.THAT_I_AM);
        if (!user) return message.channel.send("User not found:(");
        if(!upsResponse.data.length){
            await channel.send({
                content: 'UPS STATUS :: no new appointments'
            });
        } else {
            await user.send('UPS STATUS :: New Appointment Found, schedule now \n https://us-2.fountain.com/apply/ups/applications/272a71c6-e001-4966-9ed4-ddcca0dab4b0');
            await channel.send({
                content: 'UPS STATUS :: New Appointment Found, schedule now \n https://us-2.fountain.com/apply/ups/applications/272a71c6-e001-4966-9ed4-ddcca0dab4b0'
            });
        }
    });
}

module.exports = {
    cronEvents
}
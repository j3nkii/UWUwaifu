const axios = require('axios');
const testFunction = async () => {
    const upsResponse = await axios.get('https://us-2.fountain.com/internal_api/portal/ups/applications/272a71c6-e001-4966-9ed4-ddcca0dab4b0/schedule_slots/days?timezone=America%2FChicago');
    console.log(upsResponse.data);
}
testFunction();
const {google} = require('googleapis');

class GoogleWrapper {
    constructor() {
        this.client = google.calendar({
            version: 'v3',
            auth: process.env.GOOGLE_API_KEY
        });
    }

    getEvents(startDate, endDate) {
        const start = startDate.toISOString();
        const end = endDate.toISOString();
        return this.client.events.list({
            calendarId: process.env.GOOGLE_CALENDAR_ID,
            timeMin: start,
            timeMax: end,
            singleEvents: true
        }).then((res => {
            const data = res.data.items.map((event, i) => {
                if (event.status == 'cancelled'){
                    return null;
                }
                return {
                    index: i,
                    start: event.start.dateTime,
                    end: event.end.dateTime,
                    title: event.summary,
                    location: event.location,
                    type: 'googleCalendar'
                };
            }).filter(i=> i !== null);
            return data;
        }));
    }

}


module.exports = GoogleWrapper;
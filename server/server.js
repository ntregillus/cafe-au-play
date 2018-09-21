const path = require('path');
const dotenv = require('dotenv');
const express = require('express');
if(process.env.NODE_ENV === 'test') {
    console.log('running in test mode');
    dotenv.config({path: '.env.test'});
} else if (process.env.NODE_ENV === 'development'){
    console.log('running in dev mode');
    dotenv.config({path: '.env.development'});
} else {
    dotenv.config({path: '.env.development'});
}

//initialize
const app = express();
const googleCalendarController = require('./controllers/googleCalendarController');
const port = process.env.PORT||3000;
const publicPath = path.join(__dirname, '..', 'public');

//routes
app.use(express.static(publicPath));
app.use('/api/google/calendar', googleCalendarController);

app.get('/', (req, res) => {
    res.sendFile(path.join(publicPath, 'index.html'));
});



//start server!
app.listen(port, () => {
    console.log('server is up!');
});

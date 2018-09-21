const express = require('express');
const Client = require('../clients/google');
const parseDate = require('../utilities/parseDate');
const router = express.Router();
const client = new Client();
router.get('/:startDate/:endDate', function(req, res){
    const startDate = parseDate(req.params.startDate);
    const endDate = parseDate(req.params.endDate);

    client.getEvents(startDate, endDate).then(data => {
        res.json(data);
    }).catch(error =>{
        console.log(error);
         res.send('fail');
    });
});

module.exports = router;
// Simple node.js web app for demonstrating containerizing apps
// For quick demo purposes only (not properly maintained)
'use strict';

var express = require('express');

const app = express();

app.set('views', 'views');
app.set('view engine', 'pug');

var message1 = 'Love Docker!'
const COMPUTERNAME = process.env.COMPUTERNAME || process.env.HOSTNAME
const PORT = process.env.PORT || 8080

const UEcontexts= [
    {
        id: 1,
        accesstype: 'non-3gpp',
        rattype: 'E-UTRA',
        currentplmn: '310-560',
        registrationstate: 'Deregistered'
    },
    {
        id: 2,
        accesstype: '3gpp',
        rattype: 'NR',
        currentplmn: '310-110',
        registrationstate: 'registered'
    },
    {
        id: 3,
        accesstype: '3gpp',
        rattype: 'E-UTRA',
        currentplmn: '302-651',
        registrationstate: 'Registered'
    }
]

// Display message and computername to client and to log
app.get('/', function(req, res) {
    console.log(message1, COMPUTERNAME, '\n');
    res.render('home.pug', { message1, COMPUTERNAME
  });
});

// Send COMPUTERNAME TO STDOUT
//app.get('/',(req,res) => {
//    console.log('Hello World');
//    res.send('<h1>Hello World<\h1>'); 
//});

// Gets HOSTNAME/COMPUTERNAME
app.get('/api/HOSTNAME',(req,res) => {
    res.json({COMPUTERNAME});
    console.log('Hostname: ', COMPUTERNAME, '\n') ;
});

// Gets All UEcontexts
app.get('/api/UEcontexts',(req,res) => {
    res.json(UEcontexts);
    console.log('UEcontexts Request', '\n');
});

//app.listen(8080, () => console.log(process.env.COMPUTERNAME));
app.listen(8080, () => console.log('Listening on Port:', PORT));

module.exports.getApp = app;
// Simple node.js web app for demonstrating containerizing apps
// For quick demo purposes only (not properly maintained)
'use strict';

var express = require('express');

const app = express();

const COMPUTERNAME = process.env.COMPUTERNAME || process.env.HOSTNAME
const PORT = process.env.PORT || 8080

const members = [
    {
        id: 1,
        name: 'John Doe',
        email: 'john@gmail.com',
        status: 'active'
    },
    {
        id: 1,
        name: 'Mary Smith',
        email: 'msmith@yahoo.com',
        status: 'inactive'
    },
    {
        id: 1,
        name: 'Tom Jones',
        email: 'tjones@gmail.com',
        status: 'active'
    }
]

// Gets All Members
app.get('/api/members',(req,res) => {
    res.json(members);
    console.log('Members Request');
});

// Send COMPUTERNAME TO STDOUT
app.get('/',(req,res) => {
    res.send('<h1>Hello World<\h1>');
    console.log('/', 'Hostname is: ', {COMPUTERNAME});
});

// Gets HOSTNAME/COMPUTERNAME
app.get('/api/HOSTNAME',(req,res) => {
    res.json({COMPUTERNAME});
    console.log('/api/hostname', 'Hostname is: ', {COMPUTERNAME} ) ;
});

//app.listen(8080, () => console.log(process.env.COMPUTERNAME));
app.listen(8080, () => console.log(COMPUTERNAME, 'Listening on Port:', PORT));

//module.exports.getApp = app;
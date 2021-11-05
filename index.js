const express = require('express');
const server = express();
const { PORT, HOST } = require('./config');

server.listen(PORT, HOST, ()=>{ console.log('Running at rport: ' + PORT); });
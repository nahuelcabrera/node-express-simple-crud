
const express = require('express');
const path = require('path');
const server = express();
const { PORT, HOST } = require('./config');
const { HomeRoutes, QuotesRoutes } = require('./routes');
const { notFoundMiddleware } = require('./middlewares');

server.use(express.static(path.join(__dirname, 'public')));
server.use(express.urlencoded({ extended: false }));
server.use(express.json());
server.use('/', HomeRoutes);
server.use('/quotes', QuotesRoutes);

server.use(notFoundMiddleware);

server.listen(PORT, HOST, ()=>{ console.log('Running at port:' + PORT); });
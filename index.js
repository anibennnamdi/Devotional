var express = require('express'),
    mongoose = require('mongoose'),
    app = express(),
    errorHandler = require('errorhandler'),
    bodyParser = require('body-parser'),
    config = require('./variables/application'),
    db = require('./app/db/dbconnections'),
    cors = require('cors'),
    server = require('http').createServer(app);



mongoose.Promise = Promise;
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());
require('./app/approute/routes')(express, app);
app.set('port', config.serverPort);

server.listen(app.get('port'), function () {
    console.log('Node running on port', app.get('port'));
});


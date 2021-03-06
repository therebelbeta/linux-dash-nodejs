//Dependencies
var express = require('express');
var requirePrivate = require('require-private');
var app = express();

var api = requirePrivate('sh')();

app.use(express.logger());
app.use(express.json());
app.use(express.urlencoded());

//Static Endpoint
app.use('/', express.static(__dirname + '/public/'));
//Static Endpoint
app.use('/new/', express.static(__dirname + '/new_public/'));

/*TODO: refactor api endpoint objects*/
app.get('/api/df', api.df);
app.get('/api/hostname', api.hostname);
app.get('/api/uptime', api.uptime);

//Initiate Server
app.listen(8080, function () {
  console.log('listening on http://localhost:8080');
});

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

/*TODO: refactor api endpoint objects*/
app.post('/api/sample', api.samplefunc); // local account check

//Initiate Server
app.listen(8080, function () {
  console.log('listening on http://localhost:8080');
});

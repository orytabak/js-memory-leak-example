var express = require('express');
var app = express();
var port = $PORT || 3000;

app.use(express.static('public'));

app.listen(port);
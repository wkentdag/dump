var express = require('express.io')
var app = express().http().io()
var port = process.env.PORT || 3000;
// Broadcast all draw clicks.
app.io.route('drawClick', function(req) {
    req.io.broadcast('draw', req.data)
})

// Send client html.
app.get('/', function(req, res) {
    res.sendfile(__dirname + '/client.html')
})


app.listen(port);
console.log('%s\t@ port %s', 'd\n\tu\n\t\tm\n\t\t\tp\n\t\t\t\t\'d', port);

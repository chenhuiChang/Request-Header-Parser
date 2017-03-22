var express = require('express');
var useragent = require('express-useragent');
var app = express();

app.use(useragent.express());

app.get('/', function(req, res) {
    var ip = req.headers['x-forwarded-for'],
        language = req.headers['accept-language'],
        software = req.useragent;
    
    res.writeHead(200, { 'Content-Type': 'application/json' });
    var ret = {
        'ipaddress': ip,
        'language': language.split(',')[0],
        'software': software.os
    };
    
    res.send(JSON.stringify(ret));
});
app.listen(process.env.PORT || 80, function() {
    console.log('server is running.');
});
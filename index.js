//importing node framework
var express = require('express');
let port = 3000;
 
var app = express();
//Respond with "hello world" for requests that hit our root "/"
app.get('/', function (req, res) {
 res.send('hello world, updated and deployed through Jenkins!');
});
//listen to port 3000 by default
app.listen(process.env.PORT || port);

console.info(`nodeJS App Started on ${port}`)
module.exports = app;
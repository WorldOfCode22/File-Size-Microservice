// server.js
// where your node app starts

// init project
var express = require('express');
var path = require('path');
var router = express.Router();
var app = express();

router.get('/',(req,res)=>{
  res.sendFile('index.html', { root: path.join(__dirname, '/views') });
});

app.use('/',router);
// listen for requests :)
var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});

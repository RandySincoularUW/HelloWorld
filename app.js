var express = require('express');
var app = express();

// Root Route
app.get('/', function (req, res) {
  console.log("in app.js.  The root route has been hit ...")
  res.send('Hello World! from my new Geog 576 app');
});

app.listen(8000, function () {
  console.log('Node.js and Express app listening on port 8000!');
});
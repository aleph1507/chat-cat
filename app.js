var express = require('express'),
    app = express();

app.route('/').get(function(req, res, next){
  res.send('<h1>Hello World</h1>');
});

app.listen(3000, function(){
  console.log('ChatCAT working on port 3000');
});

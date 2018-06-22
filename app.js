var express = require('express'),
    app = express(),
    path = require('path'),
    cookieParser = require('cookie-parser'),
    session = require('express-session');

app.set('views', path.join(__dirname, 'views'));
app.engine('html', require('hogan-express'));
app.set('view engine', 'html');
app.use(express.static(path.join(__dirname, 'public'))); // ./public
app.use(cookieParser());
app.use(session( { secret:'catscanfly', saveUninitialized:true, resave:true } ))

require('./routes/routes.js')(express, app);

// app.route('/').get(function(req, res, next){
//   // res.send('<h1>Hello World</h1>');
//   res.render('index', { title: 'Welcome to ChatCAT' });
// });

app.listen(3000, function(){
  console.log('ChatCAT working on port 3000');
});


// mongolab user chatcat pass: chatcat1

// mongodb://chatcat:chatcat1@ds161740.mlab.com:61740/chat_cat

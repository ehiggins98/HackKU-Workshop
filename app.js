// Note the "var" keyword: unlike C++, we use it to declare all variables, instead of specifying a type
var createError = require('http-errors')

// Express is a simple HTTP server framework for Node.js
var express = require('express')

// This module handles all requests for memes
var memeRouter = require('./routes/memeRouter')

// This module handles all requests for fonts
var fontRouter = require('./routes/fontRouter')

var app = express()

app.use(express.json())

// All requests of the format /meme/* (where * means any characters of any length) are forwarded to the memeRouter.
app.use('/meme', memeRouter)

// All requests of the format /font/* (where * means any characters of any length) are forwarded to the fontRouter.
app.use('/fonts', fontRouter)

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;

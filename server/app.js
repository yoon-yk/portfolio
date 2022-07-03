var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var cors = require('cors'); // CORS 미들웨어 적용
var mongoose = require('mongoose'); // require mongoose module

var db = mongoose.connection; 
db.on('error', console.error);
db.once('open', function(){    
    console.log("Connected to mongod server");
});

mongoose.connect('mongodb://mongo/endorsement'); // connect to MongoDB

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var endorsementRouter = require('./routes/endorsement');

var app = express();

app.use(cors()); // Enable All CORS Requests

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/endorsements', endorsementRouter); // endorsement 

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

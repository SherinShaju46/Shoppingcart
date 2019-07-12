var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

let expressHBS=require('express-handlebars');
let db=require('./dbconfig/db_connect');

var indexRouter = require('./routes/index');


var app = express();

// view engine setup
app.engine('.hbs',expressHBS({defaultLayout: 'layout',extname:'.hbs'}));
app.set('view engine', '.hbs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);


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

db.connect(function (error) {
  if(error){
    console.log('unable to connect database');
    process.exit(1);
  }
  else{
    console.log('shopping cart database connected successfully...');
  }

})

module.exports = app;

var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var bodyparser = require('body-parser');
var expressHbs = require('express-handlebars');
var session = require('express-session');
var mongoose = require('mongoose');
var passport = require('passport');
var flash = require('connect-flash');
var validator = require('express-validator');
var MongoDbStore = require('connect-mongo');

var indexRouter = require('./routes/index');
var userRouter = require('./routes/user');


var app = express();
mongoose.connect('mongodb+srv://final-mini:7umveTOVFs9V95L9@cluster0.spwts.mongodb.net/test', {useNewUrlParser: true, useUnifiedTopology: true});
require('./config/passport');

// view engine setup
app.engine('.hbs',expressHbs({defaultLayout: 'layout', extname: '.hbs'}));
app.set('view engine', '.hbs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(validator());
app.use(cookieParser());
app.use(session({
      secret: 'mysupersecret',
      resave: false,
      saveUninitialized: false,
      store: MongoDbStore.create({
          mongoUrl:'mongodb://localhost:27017/test'
      })
  })
);
app.use(function(req, res, next) {
 req.session.cookie.maxAge = 180 * 60 * 1000; // 3 hours
  next();
});
app.use(flash());
app.use(passport.initialize());
app.use(passport.session());
app.use(express.static(path.join(__dirname, 'public')));


app.use(function(req,res,next){
  res.locals.login = req.isAuthenticated();
  res.locals.session = req.session;
  next();
})
app.use('/user', userRouter);
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
  // res.status(err.status || 500);

  res.render('error');
});


app.listen(process.env.PORT || 5000,()=>{
  console.log('App started');
});


//7umveTOVFs9V95L9
var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors = require('cors');
const bodyParser = require('body-parser');
const session = require('express-session');

// routers
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var testAPIRouter = require('./routes/testAPI');
var restaurantApplicationRouter = require('./routes/restaurantApplication');
var programApplicationRouter = require('./routes/programApplication');
var loginRouter = require('./routes/login');
var pendingPrograms = require('./routes/pendingPrograms');

var adminRouter = require('./routes/admin');
var newSignupsRouter = require('./routes/newSignups');
var newSignupsProgramInfoRouter = require('./routes/newSignupsProgramInfo');
var newSignupsRestaurantInfoRouter = require('./routes/newSignupsRestaurantInfo');
var programRegistrationStatusRouter = require('./routes/programRegistrationStatus');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// cors settings
const corsOptions = {
  origin: 'http://localhost:3000',    // address of React server
  methods: "GET,HEAD,POST,PATCH,DELETE,OPTIONS", // type of actions allowed
  credentials: true,                // required to pass
  allowedHeaders: "Content-Type, Authorization, X-Requested-With",
}
// intercept pre-flight check for all routes. Pre-flight checks happen when dealing with special http headers.
app.options('*', cors(corsOptions));

// middleware
app.use(cors(corsOptions)); // use cors to allow cross-origin resource sharing since React is making calls to Express
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(session({ // session for login
  secret: 'fck-secret', // for signing the cookie
  resave: true,
  saveUninitialized: true,
  cookie: {
    maxAge: 200000, // when the cookie/session expires
    httpOnly: false,
    secure: false
  }
}));

// routes
app.use('/', indexRouter);
app.use('/api/users', usersRouter);
app.use('/api/testAPI', testAPIRouter);
app.use('/api/restaurantApplication', restaurantApplicationRouter);
app.use('/api/programApplication', programApplicationRouter);
app.use('/api/auth', loginRouter);
app.use('/api/admin', adminRouter);
app.use('/api/admin/pendingPrograms', pendingPrograms);
app.use('/api/admin/newSignups', newSignupsRouter);
app.use('/api/admin/newSignups/program', newSignupsProgramInfoRouter);
app.use('/api/admin/newSignups/restaurant', newSignupsRestaurantInfoRouter);
app.use('/api/admin/programRegistrationStatus/:programId', programRegistrationStatusRouter);


// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;

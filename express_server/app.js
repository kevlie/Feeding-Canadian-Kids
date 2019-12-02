var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
var cors = require("cors");
const bodyParser = require("body-parser");
const session = require("express-session");
const cookieSession = require("cookie-session");
require('dotenv').config()

// routers
var indexRouter = require("./routes/index");
var usersRouter = require("./routes/users");
var testAPIRouter = require("./routes/testAPI");
var restaurantApplicationRouter = require("./routes/restaurantApplication");
var programApplicationRouter = require("./routes/programApplication");
var courierApplicationRouter = require("./routes/courierApplication");
var loginRouter = require("./routes/login");
var pendingPrograms = require("./routes/pendingPrograms");

var adminRouter = require("./routes/admin");
var newSignupsRouter = require("./routes/newSignups");
var newSignupsProgramInfoRouter = require("./routes/newSignupsProgramInfo");
var newSignupsRestaurantInfoRouter = require("./routes/newSignupsRestaurantInfo");
var newSignupsCourierInfoRouter = require("./routes/newSignupsCourierInfo");
var programsRouter = require("./routes/programs");
var restaurantsRouter = require("./routes/restaurants");
var couriersRouter = require("./routes/couriers");
var programInfoRouter = require("./routes/programInfo");
var restaurantInfoRouter = require("./routes/restaurantInfo");
var courierInfoRouter = require("./routes/courierInfo");

var pairingRouter = require("./routes/pairing");
var courierPairingRouter = require("./routes/courierPairing");
var programRestaurants = require("./routes/programRestaurants");
var programDelivery = require("./routes/programDelivery");

var programRegistrationStatusRouter = require("./routes/programRegistrationStatus");
var restaurantRegistrationStatusRouter = require("./routes/restaurantRegistrationStatus");

var restaurantRouter = require("./routes/restaurantUserPage");
var courierRouter = require("./routes/courierUserPage");

var programUserRouter = require("./routes/programUserPage");
//var restaurantUserPageRouter = require('./routes/restaurantUserPage');

var app = express();

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "jade");

// cors settings
const corsOptions = {
  origin: process.env.REACT_SERVER, // address of React server
  methods: "GET,HEAD,POST,PATCH,DELETE,OPTIONS", // type of actions allowed
  credentials: true, // required to pass
  allowedHeaders: "Content-Type, Authorization, X-Requested-With"
};
// intercept pre-flight check for all routes. Pre-flight checks happen when dealing with special http headers.
app.options("*", cors(corsOptions));

// middleware
app.use(cors(corsOptions)); // use cors to allow cross-origin resource sharing since React is making calls to Express
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(
  session({
    // session for login
    secret: "fck-secret", // for signing the cookie
    resave: false,
    saveUninitialized: true,
    cookie: {
      maxAge: 200000, // when the cookie/session expires
      httpOnly: false,
      secure: false
    }
  })
);

// routes
app.use("/", indexRouter);
app.use("/api/users", usersRouter);
app.use("/api/testAPI", testAPIRouter);
app.use("/api/restaurantApplication", restaurantApplicationRouter);
app.use("/api/programApplication", programApplicationRouter);
app.use("/api/courierApplication", courierApplicationRouter);
app.use("/api/auth", loginRouter);
//app.use('/api/registerProgram', registerProgram);
app.use("/api/admin", adminRouter);
app.use("/api/admin/pendingPrograms", pendingPrograms);
app.use("/api/admin/newSignups", newSignupsRouter);
app.use("/api/admin/newSignups/program", newSignupsProgramInfoRouter);
app.use("/api/admin/newSignups/restaurant", newSignupsRestaurantInfoRouter);
app.use("/api/admin/newSignups/courier", newSignupsCourierInfoRouter);
app.use(
  "/api/admin/programRegistrationStatus/:programId",
  programRegistrationStatusRouter
);
app.use(
  "api/admin/restaurantRegistrationStatus/:restaurantId",
  restaurantRegistrationStatusRouter
);
app.use("/api/admin/programs", programsRouter);
app.use("/api/admin/restaurants", restaurantsRouter);
app.use("/api/admin/couriers", couriersRouter);
app.use("/api/admin/program", programInfoRouter);
app.use("/api/admin/restaurant", restaurantInfoRouter);
app.use("/api/admin/courier", courierInfoRouter);
app.use("/api/admin/pairing", pairingRouter);
app.use("/api/admin/courierPairing", courierPairingRouter);
app.use("/api/restaurantuserpage", restaurantRouter);
app.use("/api/programRestaurants", programRestaurants);
app.use("/api/programDelivery", programDelivery);
app.use("/api/courieruserpage", courierRouter);
app.use("/api/programuserpage", programUserRouter);

//app.use('/api/restaurantUserPage', restaurantUserPageRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

module.exports = app;

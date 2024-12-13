// first of all include express module
const express = require("express");

// now initialize an app

const app = express();

// assigning a port

const port = 3000;

// loading in build middleware

app.use(express.json());

// now creating our own middleware for login, authentication, validation

/*

const mylogin = function (req, res, next) {
  console.log("LOGGED");
  next();
};

// loading middlewares into application
app.use(mylogin);


const myauthentication = function (req, res, next) {
  console.log("Authenticated");
  next();
};
app.use(myauthentication);
const myvalidation = function (req, res, next) {
  console.log("Valid hai jaane do");
  next();
};
app.use(myvalidation);

*/

const bulayehueroutes = require('./routes/routes')

// launching the routes
app.use('/bahar', bulayehueroutes)

// define here what to show on the screen

app.get("/", (req, res) => {
  console.log("Mai route handler hu");
  console.log(req.body); // it may show undefined untill we show inbuild middlewares
  res.send("Application is here");
});

// here you can start your port by listening to it

app.listen(port, () => {
  console.log("Application is started my boy");
});

const express = require("express");
const app = express();
const path = require("path");
const logger = require("morgan");
const bodyParser = require("body-parser");
const methodOverride = require("method-override");
const cookieParser = require('cookie-parser');
const session = require('express-session');
const passport = require('passport');
// const axios = require('axios');
require('dotenv').config();
const PORT = process.env.PORT || 3001;
//=========================================================================================================================================
app.use(logger("dev"));
app.use(express.static("public"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(passport.initialize());
app.use(passport.session());
app.use(session({
  secret: process.env.SESSION_KEY,
  resave: false,
  saveUninitialized: true,
}));
//=========================================================================================================================================
app.get("/", (req, res) => {
  res.send("Welcome");
});

app.use('/favorites', require('./routes/movie-routes'));

app.use('/auth', require('./routes/auth-routes'))

app.use("*", (req, res) => {
  res.status(404).send("<h1>Not over here buddy</h1>");
});
//=========================================================================================================================================
app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});

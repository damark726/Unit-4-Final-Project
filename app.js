const express = require("express");
const app = express();
const path = require("path");
const methodOverride = require("method-override");
const bodyParser = require("body-parser");
const morgan = require("morgan");
require("dotenv").config();
const PORT = process.env.PORT || 3000;
//============================================================================================================================
app.use(morgan("dev"))

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({
  extended: false
}))

app.use(express.static("build"));

app.get("/", (req, res) => {
  res.json(req.user);
});


const cookieParser = require("cookie-parser");
app.use(cookieParser());

const session = require("express-session");
app.use(session({
  secret: process.env.SESSION_KEY,
  resave: false,
  saveUninitialized: true,
}));

const passport = require("passport");
app.use(passport.initialize());
app.use(passport.session());
//============================================================================================================================
app.use("/favorites", require("./routes/manganime-routes"));
app.use("/auth", require("./routes/auth-routes"))

app.listen(PORT, () => {
  console.log(`check us out on PORT ${PORT}`)
})

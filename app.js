const express = require("express");
const app = express();
const path = require("path");
const methodOverride = require("method-override");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const cookieParser = require("cookie-parser");
const session = require("express-session");
const passport = require("passport");
require("dotenv").config();
const PORT = process.env.PORT || 3001;
//========================================================================================================================================
app.use(morgan("dev"))
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static("client/build"));
app.use(cookieParser());
app.use(session({secret: process.env.SESSION_KEY, resave: false, saveUninitialized: true}));
app.use(passport.initialize());
app.use(passport.session());
//========================================================================================================================================
app.get("/", (req, res) => { res.send("<h1>Welcome to mangAnime</h1>") });
app.use("/favorites", require("./routes/manganime-routes"));
app.use("/auth", require("./routes/auth-routes"))
//========================================================================================================================================
app.listen(PORT, () => {
  console.log(`check us out on PORT ${PORT}`)
})

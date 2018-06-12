var express = require("express");
var mongoose = require("mongoose");

var path=require('path');
var bodyParser = require("body");
var cookieParser = require("cookie-parser");
var session = require ("express-session");
var flash = require("connect-flash");

var routes = require ("./routes");
var app = express();

mongoose.connect("mongodb://localhost:27017/zombie");
app.set("port",process.env.PORT || 3000);

app.set("views",path.resolve(__dirname,"views"));
app.set("view engine","ejs");

app.use(bodyParser.urlencoded({extended:false}));
app.use(cookieParser());
app.use(session({
    
}))


var express = require("express");
var bodyParser = require("body-parser");
var logger = require("morgan");
var mongoose = require("mongoose");

var Articles = require("./models/Articles");

var app = express();

var PORT = process.env.PORT || 3000;

app.use(logger("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

app.use(express.static("./public"));

mongoose.connect("mongodb://heroku_v77smffs:b431oess6hv33pjdr79e46m8j5@ds151820.mlab.com:51820/heroku_v77smffs");
var db = mongoose.connection;

db.on("error", function(err) {
  console.log("Mongoose Error: ", err);
});

db.once("open", function() {
  console.log("Mongoose connection successful.");
});

app.get("/", function(req, res) {
  res.sendFile(__dirname + "/public/index.html");
});

app.get("/api", function(req, res) {
  Articles.find({saved: true}).exec(function(err, doc) {
    if (err) {
      console.log(err);
    }
    else {
      res.send(doc);
    }
  });
});

app.post("/api", function(req, res) {
var newArticle = new Articles(req.body);
  newArticle.save(function(err, doc) {
    if (err) {
      console.log(err);
    }
    else {
      res.send("Saved Search");
    }
  });
});

app.put("/api", function(req, res){
    console.log(req.body);
    Articles.findByIdAndUpdate({
        _id: req.body.params.id
    }, {
        $set: {
            saved: false
        }
    }, function(error, doc) {
        if (error) {
            console.log(error);
        } else {
            res.send(doc);
        }
    });
});

app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});

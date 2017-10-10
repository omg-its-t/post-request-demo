var express = require("express");
var app = express();
var bodyParser = require("body-parser");

app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({extended: true}));

var friends = ["Theo", "Colleen", "Trevor", "Zak", "Shaun", "Cenzo"];

app.get("/", function(req, res){
    res.render("home");
});

app.post("/addfriend", function(req, res){
    //req.body.newFriend is accessing the value that was typed in a sent to the page through the (post) request body
    //body parser takes the request and turns it into a javascript object we can then access
    var newFriend = req.body.newFriend;
    friends.push(newFriend);
    res.redirect("/friends");
});

app.get("/friends", function(req, res){
    
    //first "friends" is the property, second "friend" is the actual array
    res.render("friends", {friends:friends});
});


app.listen(process.env.PORT, process.env.IP, function(){
    console.log("server started");
});
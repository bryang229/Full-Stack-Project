const express = require("express");  //Importing express (how we will host our backend)
const cors = require("cors");  //Import cors (allows us to talk to backend easily)
const bodyParser = require("body-parser")
// New app using express module
const app = express();
const axios = require("axios"); //import axios for talking to APIs

//Getting our classes and function from classes.js
let {NewUser,ExistingUser,formatDBReturn} = require("./classes")

//Setting up our app
app.use(cors());  //Starting our app using cors
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
    extended: false
}));

var serviceAccount = require("../key/loginsignupdemo-57163-firebase-adminsdk-c1afo-d222c1099a.json")
var admin = require("firebase-admin");

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
});

const db = admin.firestore();

app.post("/signUpUser", function (req, res){
    let username = req.body.username;
    let email = req.body.email;
    let password = req.body.password;
    console.log('Signing up!');
    // Task #1
    // Use the NewUser.signUpUser() method to sign in the user and send the response
})

app.post("/loginUser", async function (req, res){
    console.log('Logging in!');
    // Task #2
    // Get the username, email, and password from the body of the req
    // Use the ExistingUser.loginUser() method to login the user and send the response
    // Remember to use await!
})


app.get('/',function(req, res){
    res.send("Hello world")
})

app.listen(3000, function () {
    console.log("server is running on port 3000");
})
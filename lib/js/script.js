//Do this after completing /backend

let isLogIn = true;
let isLoggedIn = false;

let loginForm = new Component("login","form",false,null);
let signUpForm = new Component("signUp","form",false,null);
let prompt = new Component('loginOrSignUp','h1',false,null)
let loginButton = document.getElementById("loginButton");
let signUpButton = document.getElementById("signUpButton");

let url = "http://127.0.0.1:3000/"

// Shows login form
function loginMode(){
    loginForm.show();
    signUpForm.hide();
    pageState = -1;
    loginButton = document.getElementById("loginButton");
    prompt.addText("Login here!",true);
}

// Shows Sign up form
function signUpMode(){
    signUpNav();
    loginForm.hide();
    signUpForm.show();
    signUpButton = document.getElementById("signUpButton");
    pageState = 0;
    prompt.addText("Sign Up here!",true);
}
// Send the onclicks and null since user can't access your data until logged in!
// signUpNav makes the div only onclick for the signUp nav!
setNavOnClicks(loginMode,signUpMode,null,signUpNav);    
// Make sure to call the setNavOnClicks function!
// This stylize the nav bar!
// setNavOnClicks(loginOnclick, signUpOnClick, yourDataOnClick, stylingFunction)
// Call in your in your onClick (for the buttons)
// Stlying Functions: signUpNav, loginNav, loggedInNav
// 
// Task #3
// Create two async functions that will call the backend and try to either sign up or log the user in

// Task #4
// Create some way for the user to see that they were logged in

// Upchallenge:
// Look into cookies.js to save the user's loggin info with cookies keeping them signed in even when refreshing!

function dataToJson(username,password,email){
    return {
        "username" : username,
        'password' : password,
        "email"    : email
    }
}

function clearInputs(inputs){
    for(let input of inputs){
        input.value = "";
    }
}

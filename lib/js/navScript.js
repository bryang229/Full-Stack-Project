let navDivs = document.querySelectorAll("nav div");

let pageState = -1; 
// -1 -> logging in
//  0 -> signing up
//  1 -> userdata 

// Adds hover property to a given index of our navDivs array
function addHover(index){
    let div = navDivs[index];
    div.onmouseover = function (){
        div.style.opacity = .5;
        div.style.backgroundColor = '#2Fa183';
    }
    div.onmouseout = function (){
        div.style.opacity = 1;
        div.style.backgroundColor = '#6DA29C'
    }
}

// Removes hover property to a given index of our navDivs array
function removeHover(index){
    let div = navDivs[index];
    div.onmouseover = null;
    div.onmouseout = null;
}

// Removes hover property for all divs in our navDivs array
function removeAllHovers(){
    for(let i = 0; i < navDivs.length; i++){
        removeHover(i);
    }
}

// Only sets the login and sign up divs as hoverable
function loginNav(){
    removeAllHovers();
    for(let i = 0; i < 2; i++){
        addHover(i);
    }
}

// Only sets the login and sign up divs as hoverable
function signUpNav(){
    removeAllHovers();
    for(let i = 0; i < 2; i++){
        addHover(i);
    }
}

// Makes all divs hoverable
function loggedInNav(){
    removeAllHovers();
    for(let i = 0; i < navDivs.length; i++){
        addHover(i);
    }
}

// Styles navbar
function setNavOnClicks(logInOnClick,signUpOnClick,userDataOnClick,style){
    style()
    navDivs[0].onclick = logInOnClick;
    navDivs[1].onclick = signUpOnClick;
    navDivs[2].onclick = userDataOnClick;
}
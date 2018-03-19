// document.getElementById('btn2').style.color = "red";
// document.getElementById('btn2').style.fontSize = "32px";

// console.log("Here is my first console message");
// console.info("This is info");
// console.warn("Danger Will Robinson!");
// console.error("Uh Uh Uh. You did't say the magic word");

//Browser Alert
//alert('Here is my popup!');

//Browser Confirm Box
// var userResult = confirm("Did you remember to lock your car?");
// console.log(userResult);

//Browser Prompt Box
// var userName = prompt("What is your name?");
// console.log(userName);

/*
Variables
    Must start with a lowercase!
    Must start with a letter!
    Can contain underscore.
    May use camelCasing.
*/
// var username;
// var user_name;
// var room1;
// var userName;
// var theUsersFirstNameOnly;

// var age = 25;
// var decade = 10;
// var double = 2;
// var divide = 4;

// // divide result by 4 
// //other way to do it -
// //var newAge = (age + decade) / 4;

// var newAge = ( (age + decade) + double) / divide;

// console.log(newAge);
// console.log(age + decade);      

// var firstName = prompt("what is your first name?");
// var lastName = prompt("What is your last name?");
// alert(firstName + " " + lastName);

/* String Interpolation
    ${Variable}

 */
// alert(`${firstName} ${lastName}`);



function getUserVehicle(){
var make = prompt("What is the make of your vehicle?");
var year = prompt("What year is your vehicle?");
var color = prompt("What color is your vehicle?");

var result = color + ", " + year + " " + make + ".";
alert(result);
}


// alert(color + ", " + year + " " + make);

// alert(`${color}, ${year} ${make}`);



function primaryUser(){
    var first = prompt("What is your first name?");
    var last = prompt("What is your last name?");
    var place = prompt("Where were you born?");

    document.getElementById('primaryUser').innerHTML = first + " " + last + ", born in " + place;
}

function secondaryUser(){
    var name = prompt("What is your name?");
    var age = prompt("How old are you?");
    var location = prompt("Where do you live?");
    
    document.getElementById('secondaryUser').innerHTML = name + " " + age + ", lives in " + location;
}

function thirdUser(){
    var drink = prompt("What's your favorite drink?");
    var food = prompt("What's your favorite food?");
    var game = prompt("What's your favorite game?");

    document.getElementById('thirdUser').innerHTML = drink + " " + food + " " + game;
}

function fourthUser(){
    var language = prompt("What languages do you speak?");
    var country = prompt("What countries have you visited?")
    var vacation = prompt("What's your favorite vacation spot?");

    document.getElementById('fourthUser').innerHTML = language + ", " + country + ", " + vacation;
}
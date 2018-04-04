// function getUserName() {
//     var username = prompt('Please enter your full name.').split(" ");
//     // console.log(name);
//     outputUserName(username);
// }



// function outputUserName(nameArray) {
// //     console.log(nameArray);
//     // document.getElementById('firstName').innerHTML = nameArray[0];
//     // document.getElementById('lastName').innerHTML = nameArray[nameArray.length - 1];

//     /* || = OR */

//     for(var i = 0; i < nameArray.length; i++){
//         if( i == 0 || nameArray.length - 1 ){
//             console.log("we got the zeroth element!", nameArray[i]);
//             document.getElementById('firstName').innerHTML += nameArray[i] + " ";
//         }
//         // else{
//         //     console.log('not the zeroth');
//         // }
//     }
// }

// getUserName();

//


/**
 * ARRAYS
 */
// var cars = ['camaro', 'malibu', 'tesla'];
// console.log(cars[1]);
// console.log(cars.length);

// //PUSH METHOD
// cars.push('chevelle'); //add to array
// console.log(cars);

// //REMOVE METHOD
// cars.pop();
// console.log(cars);

// cars.pop();
// console.log(cars);

// var removedCar = cars.pop();
// console.log(cars);
// console.log(removedCar);

// //UNSHIFT METHOD
// cars.unshift("chevy", "chrysler");
// console.log(cars);

// //SHIFT METHOD
// cars.shift();
// console.log(cars);

// //SPLICE METHOD
// cars.splice(1, 1, "red", "green");
// console.log(cars);

// cars.splice(1, 1, "strawberry", "kiwi", "apple", "carrot");
// console.log(cars);

// cars.splice(2, 1);
// console.log(cars);


// //SLICE METHOD (NON-DESTRUCTIVE)
// cars.slice(4);
// var removed = cars.slice(4);
// console.log(cars);
// console.log(removed);


// let isSmall = (el) => el < 10;

// var isSmall = function(el){
//     return el < 10;
// }

//MOVIE PRACTICE

// var movies = ['The Butterfly Effect', 'Across the Universe', 'Kingsmen', 'Batman', 'Forrest Gump'];
// console.log(movies);

// movies.splice(0, 0, 'Die Hard');
// console.log(movies);

// movies.splice(3, 2, "Godfather I", "Godfather II", "Godfather III");
// console.log(movies);

// movies.push('Guardians of the Galaxy');
// console.log(movies);

// var separate = movies.slice(0, 3);
// console.log(separate);


// function getUserAge(){
//     var userAge = parseInt(prompt('How old are you?'));
// // AND &&
// // OR ||
//     if(userAge < 21){
//         console.log('not old enough');
//     }
//     else if (userAge == 21){
//         console.log('good to go');
//     }

//     else{
//         console.log('plenty old');
//     }
// }

// getUserAge();


// /**
//  * TERNARY OPERATION
//  */
// //----- question ------ answer - else ------- answer--- //
//  (5 == 5) ? console.log('true') : console.log('false');

//  function getAge() {
//      var age = prompt("what's my age again?");
//      (age >= "21") ? console.log('true') : console.log('false');
//  }

//  getAge();


 // write a function and prompt the user telling the user a "story" asking for 1 of 3 choices
 // each choice continues to their own function
 // wash rinse repeat thrice more

 // SIMPLE VERSION:
 // alerts, prompts, confirms
 // if / else if / else
 //
 // COMPLEX VERSION: 
 // loops
 // arrays


 var name;
 var job;
 var gender;
 var loc;

function chooseCharacter() {
    name = prompt('What is your name?', 'name');
    job = prompt('What is your profession?', 'programmer or chef');
    gender = prompt('What is your gender?');
    loc = prompt('Where do you live?');

    outputCharacter();
}

function outputCharacter() {
    document.getElementById('name').innerHTML = name;
    document.getElementById('job').innerHTML = job;
    document.getElementById('gender').innerHTML = gender;
    document.getElementById('loc').innerHTML = loc;

    if(
}
chooseCharacter();


 

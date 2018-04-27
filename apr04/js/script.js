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

 var start;
 var optionOne;
 var optionTwo;
 var user = document.getElementById('user');
 

 function showBegin(){
     var username = prompt("What's your name?", 'Sarah');
     document.getElementById('start').style.display = "none";
     document.getElementById('startingScene').style.display = "block";
     document.getElementById('choiceOne').style.display = "none";
     document.getElementById('choiceTwo').style.display = "none";
     user.innerHTML = username;
     
 }

    // var town = document.querySelector('button[id="#choice1"]');
    // town.addEventListener('click', showChoice1);
    
 function showChoice1(){
    document.getElementById('choiceOne').style.display = "block";
    document.getElementById('startingScene').style.display = "none";
    console.log('getting ready...');
 }

 function showChoice2(){
     document.getElementById('choiceTwo').style.display = "block";
     document.getElementById('startingScene').style.display = "none";
     console.log('packing picnic lunch...');
 }



//   function story(){

 
//  // HIT THE TOWN - optionOne
//  if (){
//      console.log('getting ready...');
//      optionOne = prompt('Go shopping or go the the park?', 'Enter "shop" or "dog park"');
//  }
 
//  // STAY IN - optionTwo
//  else if(start === 'in') {
//      console.log('changing into comfy clothes...');
//      var optionTwo = prompt('Watch TV or play video games?', 'Enter "tv" or "game"');
//      }
 
 
//  // SHOP - optionOne
//  if (optionOne === 'shop'){
//          console.log('heading to the mall...');
//          var shop = prompt('Shop for yourself or for your dog?', 'Enter "for me" or "my dog"');
//      }
     
//  //PARK
// else if (optionOne === 'dog park') {
//          console.log('grabbing picnic lunch...');
//          var park = prompt('Will you bring your dog to the park?', 'Enter "Yes" or "No"');
//      }
     
//  if (park === "Yes"){
//          console.log('playing fetch...');
//          confirm('Good choice! Your pup is happy and so are you!');
     
//  }
//  else if (park === "No"){
//      console.log('going back for dog...');
//      confirm("Wow, that's rude. I think you should reconsider.");
//  }
//      if (shop === "for me"){
//          console.log('going to pet store...');
//          confirm("I mean... I guess that's okay, but you should grab something for your dog too...");
//      }
//      else if (shop === "my dog"){
//          console.log('buying new dog bed...');
//          confirm ("Great choice! Your pup is happy and so are you!");
//      }
 
 
 
//  // TV
//  if (optionTwo === 'tv'){
//          console.log('grabbing the remote...');
//          confirm('You curl up on the couch with your pup and enjoy your night in front of the tube.');
//  }
     
//      // VIDEO GAME
//  else if (optionTwo === 'game'){
//          console.log('booting up Steam...');
//          confirm('You pull up your favorite game on your PC and play all night.'); 
     
//      }
    // }
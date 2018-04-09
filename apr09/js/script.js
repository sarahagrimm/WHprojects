// function welcomeMsg(str){
//     // console.log(str);
//     return "Welcome " + str;
// }

// console.log( welcomeMsg('Sarah'));
// // consoleInfo('Sarah');


// function calcNums(x, y){
//     // console.log(x + y);
//     return x + y;
// }

// console.log( calcNums(3, 2) );

// var h3 = document.querySelector('h3');
// var user = document.querySelector('#user');

// function concatStrings(str1, str2){
//     return str1 + " " + str2;
// }

// function getFirstName(){
//     return prompt('What is your first name?');
// }

// function getLastName(){
//     return prompt('What is your last name?');
// }

// user.textContent = concatStrings(getFirstName(), getLastName());
// html.innerHTML = concatStrings(getFirstName(), getLastName());

// function welcomeUser(){
//     h3.innerHTML = concatStrings(getFirstName(), getLastName());
// }

// welcomeUser();

var spans = document.querySelectorAll('span');
var occupations = ['janitor', 'teacher', 'developer', 'plumber', 'cashier', 'bus driver'];
var plurals = ['fish', 'monkeys', 'shoes', 'cactii'];
var adjective = ['pretty', 'ugly', 'terrible', 'reckless'];
var liquids = ['Dr Pepper', 'vodka', 'orange juice', 'water'];
var noun = ['dog', 'cat', 'pencil', 'computer'];
var number = ['one million', 'one billion', 'five trillion', 'a lot of'];
var celebrity = ['Katy Perry', 'Lorde', 'Jennifer Lawrence'];
var friend = ['Lea', 'Brooke', 'Nikki', 'Jennifer'];
var nationality = ['Aussie', 'French', 'American'];
var place = ['Maryland', 'California', 'New York', 'Australia'];
var famous = ['Post Malone', 'Gerard Way', 'Logic'];
var verb = ['run', 'jump', 'drive'];

for(var i = 0; i < spans.length; i++){
var s = spans[i];
    // SWITCH STATEMENT
switch(s.className){
    case 'occupation': 
    setText(s, occupations);
    break;
    case 'pluralNoun': 
    setText(s, plurals);
    break;
    case 'adjective':
    setText(s, adjective);
    break;
    case 'number':
    setText(s, number);
    break;
    case 'liquid':
    setText(s, liquids);
    break;
    case 'noun': 
    setText(s, noun);
    break;
    case 'place':
    setText(s, place);
    break;
    case 'famous':
    setText(s, famous);
    break;
    case 'verb':
    setText(s, verb);
    break;
    case 'nationality':
    setText(s, nationality);
    break;
    case 'celebrity':
    setText(s, celebrity);
    break;
    case 'friend':
    setText(s, friend);
    break;
}
}

function getRandNum(num){
    return Math.floor(Math.random() * num);
}

function setText(currSpan, testArray){
    currSpan.textContent = testArray[getRandNum(testArray.length)];
}
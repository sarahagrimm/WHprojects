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
 var location;

function chooseCharacter() {
    name = prompt('WHAT IS YOUR NAME?', 'name');
    job = prompt('WHAT IS YOUR PROFESSION?');
    gender = prompt('MALE or FEMALE');
    location = prompt('WHERE DO YOU LIVE?');

    outputCharacter();
}

function outputCharacter() {
    document.getElementById('name').innerHTML = name;
    document.getElementById('job').innerHTML = job;
    document.getElementById('gender').innerHTML = gender;
    document.getElementById('location').innerHTML = location;
}
chooseCharacter();


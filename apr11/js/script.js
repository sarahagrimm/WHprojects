// this - context based. Look to the left of the dot. ie: window = this.

var btns = document.querySelectorAll('button');

for(var i = 0; i < btns.length; i++){
    btns[i].addEventListener('click', function(evt){
        console.log(evt.target);
        console.log(this);
});
} 

window.addEventListener('click', function(evt){
    console.log(evt.target.nodeName);
    if(evt.target.nodeName === 'BUTTON'){
        console.log(evt.target);
        console.log(this);
    }
});

var cars = ['jeep', 'honda', 'jeep', 'subaru'];
var types = ['string', true, 5, [1,2,3]];
// console.log(types[3][1]);

var car= {
    type: 'jeep',
    model: 'wrangler',
    color: 'black',
    offroad: true,
    trim: ['sunroof', 'hardtop', '4 wheel drive']

};
// console.log(car.trim);

//firstname, lastname, height, hair, haircolor, facialhair, facialhaircolor, age

var me = {
    firstname: 'Sarah',
    lastname:   'Grimm',
    height: "6'4",
    hair:   true,
    haircolor: 'brown',
    facialhair: 'false',
    facialhaircolor: 'false',
    age: '25',
    greeting: function(msg){
        // console.log(msg + "me");
        console.log(this.firstname);
        console.log(msg + this.firstname);
    }
}

me.middlename = 'alberta';

// console.log(me);

// me.greeting("Hey there!");


// CONSTRUCTOR OBJECT
// function Person(first, last, age, eye){
//     this.firstname = first;
//     this.lastname = last;
//     this.age = age;
//     this.eye = eye;
//     this.greeting = function(msg){
//         console.log(msg + this.firstname);
//     }
// }

// var myDad = new Person('Steve', 'Grimm', '57', 'blue');
// console.log(myDad);

// var myMom = new Person('Elaine', 'Grimm', '51', 'hazel');
// console.log(myMom);

// var boyfriend = new Person('Calvin', 'Mayhle', '25', 'hazel');
// console.log(boyfriend);


var form = document.querySelector('form');


var users = [];
// var user = 0;
// console.log(user);
function UserAcc(email, username, password){
    this.email = email;
    this.username = username;
    this.password = password;
}
var submitBtn = document.querySelector('input[type="submit"]');
submitBtn.addEventListener('click', function(evt){
    evt.preventDefault();
    users.push( 
        new UserAcc(
            form.elements[0].value,
            form.elements[1].value,
            form.elements[2].value  
        ));
    // user++;
    // console.log(users);

    for(var i = 0; i < form.elements.length; i++){
        
    console.log(form.elements[i].value);
}
});
// console.log(submitBtn);



/* 
    username
    email address
    password

*/

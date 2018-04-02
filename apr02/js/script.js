// var p1 = document.getElementById('p1');
// console.log(p1);

// var p1q = document.querySelector('#p2');
// console.log(p1q);

// var pClass = document.querySelector('.p');
// console.log(pClass);

// var pLast = document.querySelector('p:last-of-type');
// console.log(pLast);
// pLast.style.fontSize = '28px';

// var pClasses = document.querySelectorAll('p');
// console.log(pClasses);
// pClasses[2].style.fontSize = '8px';
// pClasses[1].style.color = 'red';
// pClasses[3].style.fontWeight = 'boldest';

// var pByClassName = document.getElementsByClassName('p');
// console.log(pByClassName);
// pByClassName[0].style.fontSize = '32px';

// var pByTagname = document.getElementsByTagName('p');
// console.log(pByTagname);
// // pByTagname[9].style.color = 'yellow';
// console.log(pByTagname.length);

// //FOR Loop
// // |---------------------| ARGUMENTS
// // |---------| NEW VARIABLE
// //             |----| NUMBER OF LOOPS
// //                    |---| INCREMENTOR
// for(var i = 0; i < 10; i++){
//     pByTagname[i].style.color = 'red';
//     console.log(i);
// }

// var myName = "Sarah";
// console.log(myName.length);

// for(var i = 0; i < myName.length; i++){
//     console.log(i);
//     console.log(myName[i]);
// }

// function requestName() {
//     var name = prompt("What is your name?");
//     console.log(name + ' from inside the function');

//     printUsername(name);
// }

// requestName();

// function printUsername(x){
//     for (var i = 0; i < x.length; i++){
//         console.log(x[i]);
//     }
// }


// function getUserNums(){
//     var num1 = prompt('Please enter a number');
//     var num2 = prompt('Please enter another number');
//     addUserNums(num1, num2);
// }

// function addUserNums(x, y){
//     alert( parseInt(x) + parseInt(y) );
// }

// getUserNums();

//var p1 = document.querySelector('p');

var paragraphs = document.querySelectorAll('p');

// var pClasses = document.querySelectorAll('p');
// console.log(pClasses);
// pClasses[0].style.color = 'red';
// pClasses[1].style.color = 'green';
// pClasses[2].style.color = 'blue';

function getUserColors(){
    var userColors = prompt('pick some colors (comma separated)')
    // var color1 = prompt('Please enter a color.');
    // var color2 = prompt('Please enter another color.');
    // var color3 = prompt('Please enter one more color');

    // addUserColors(color1, color2, color3);
    console.log(userColors.split(','));
}

function addUserColors(x, y, z){
    //console.log(x, y, z);
    //alert( x + ", " + y + ", " + z );
    for(var i = 0; i < arguments.length; i++){
        paragraphs[i].style.color = arguments[i];
    }



    }

getUserColors();






/*
function addTwo(num) {
    return num + 2;

}

console.log(addTwo(2));

let addFour = num => num + 4;

console.log( addFour(2) );
*/

/*
function Counter(num) {
    this.num = num;
    this.timer = setInterval( () => {
        this.num++;
    }, 1000);
}

let num1 = new Counter(0);
let num2 = new Counter(100);
*/

// let numbersPlusTwo = [];

/*
for(let n = 0; n < numbers.length; n++){
    numbersPlusTwo.push( numbers[n] + 2 );
}

numbers.forEach(function(x, y, z){
    console.log(x, y, z);
});
console.log(numbersPlusTwo);
*/

/*
let numbersPlusTwo = numbers.map( x => x + 2 );

console.log(numbers, numbersPlusTwo);
*/
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

// let numbersEvens = numbers[Symbol.iterator]();
// console.log(numbersEvens.next);

let numbersEven = numbers.filter( x => x % 2 == 0 );
console.log(numbersEven);
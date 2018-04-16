// var theDate = new Date();
// console.log(theDate);
// console.log(theDate.getDate());
// console.log(theDate.getDay());
// console.log(theDate.getFullYear());
// console.log(theDate.getMonth());

// console.log(theDate.toLocaleString('en-us', {month: 'long'}));

// var myBday = new Date(1992, 07, 17);

// var bDayStr = `
// ${myBday.toLocaleString('en-us', {month: '2-digit'})}
// ${myBday.toLocaleString('en-us', {date: '2-digit'})}
// ${myBday.toLocaleString('en-us', {year: '2-digit'})}

// `;
// var dateStr = `
// Today's date is ${theDate.getDate()}th of ${(theDate.toLocaleString('en-us', {month: 'long'}))} ${theDate.getFullYear()}
// `
// ;

// document.body.textContent = bDayStr;

// var theTime = new Date();



var stopBtn = document.querySelector('button');
stopBtn.addEventListener('click', function(){
    clearInterval(myTimer);
});
var myTimer = setInterval(updateTimer, 1000);

function updateTimer(){
    var theTime = new Date();

    var timeStr = `  
    ${theTime.toLocaleString('en-us', {hour: 'numeric', hour12: false, minute: '2-digit', second: '2-digit'})}
    `
    ;
    document.querySelector('h3').textContent = timeStr;
}

var myDelay = setTimeout(hiLiteBg, 5000);
// var myDelay = setTimeout(runTimer, 5000);
function hiLiteBg(){
    document.body.classList.add('hiLite');
}

function runTimer(){
    var theTime = new Date();
    var timeStr = `
    ${theTime.toLocaleString('en-us', {hour: 'numeric', hour12: false, minute: '2-digit', second: '2-digit'})}
    `
    ;
    
    document.querySelector("h3").textContent = timeStr;
}
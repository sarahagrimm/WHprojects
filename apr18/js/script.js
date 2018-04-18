var paras = document.querySelectorAll('p');


// ! == not
// for(var i = 0; i < paras.length; i++){
    // console.log(paras[0].classList.contains('para'));
//     if(!paras[i].classList.contains('para')){
//         console.log('thats true');
//     }
// }


// console.log(3 === '3');
// console.log(typeof(3));
// console.log(typeof('3'));


// var usernum = parseInt(prompt('pick a number.'));

// if(typeof(usernum) == 'number'){
//     console.log(3 + usernum);
// }

// == loose comparison
// === strict comparison


// XMLHttpRequest
var weatherKey = '515ebfc3e8e509c251009096127eaafb';
var myUl = document.querySelector('ul');

console.log(new XMLHttpRequest());
var req = new XMLHttpRequest();
req.open('GET', 'http://api.openweathermap.org/data/2.5/forecast?id=524901&APPID=515ebfc3e8e509c251009096127eaafb');
req.onload = function(){
    if(req.readyState === 4){
        var apiData = JSON.parse(req.responseText);
        processData(apiData);
    }
}
req.send(null);

function processData(data){
    for(var i = 0; i < data.list.length; i++){
        var timeOfDay = data.list[i].dt;
        var myLi = `
        <li>
            <p>${timeOfDay}</p>
        </li>
        `;
        myUl.innerHTML += myLi;
    }
}
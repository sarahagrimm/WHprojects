var clientId = '9MBoo-EIZudSCJajzuTeFkwZ-rHdZ9wo';

var searchBox = document.querySelector('header input');
searchBox.addEventListener('keypress', userStr);

function githubUsers(data){
    console.log(data);
}

// UNIVERSAL GET REQUEST - CAN BE USED ON ANY PROJECT
function getReq(url, func){
    var req = new XMLHttpRequest();
    req.open('GET', url);
    req.onload = function(){
        if (req.readyState === 4 && req.status === 200){
            func(JSON.parse(req.responseText));
        }else{
            console.log('error', req.statusText);
        }
    }
    req.send(null);
}

// END UNIVERSAL REQUEST

function userStr(evt){
    console.log(searchBox.value);
    getReq(`https://api.github.com/search/users?q=${searchBox.value}&client_id=${clientId}`, githubUsers);
}
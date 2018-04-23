// if(typeof Storage != "undefined"){
//     console.log('yay storage');
// }else{
//     console.log('boo.');
// }

// var storageBtn1 = document.querySelector('#btn1');
// var storageBtn2 = document.querySelector('#btn2');
// storageBtn1.addEventListener('click', setLocalStorage);
// storageBtn2.addEventListener('click', setSessionStorage);

// function setLocalStorage(){
//     localStorage.setItem('lastname', 'grimm');
    
// }

// function setSessionStorage(){
//     sessionStorage.setItem('vehicle', 'jeep');
// }


var saveBtn = document.querySelector('input[type="submit"]');
if(localStorage.getItem("details") != null){
    saveBtn.removeEventListener('click', getUserInfo);
    saveBtn.addEventListener('click', checkPassword);
}else {
    saveBtn.addEventListener('click', getUserInfo);
    saveBtn.removeEventListener('click', checkPassword);
}

function getUserInfo(evt){
    evt.preventDefault();
    var radio = document.querySelector('input[type="radio"]:checked').value;
    var username = document.querySelector('input[type="text"]').value;
    var password = MD5(document.querySelector('input[type="password"]').value);


    localStorage.setItem("details", JSON.stringify(new userInfo(username, password, radio)) );

    // console.log(username, password);
    
}

function userInfo(un, pw, theme){
    this.user = un;
    this.pass = pw;
    this.theme = theme;
}

function checkUserinfo(){
    if(localStorage.getItem("details") !== null){
        document.querySelector('label[for="theme"]').style.display = 'none';
        var userInfo = JSON.parse(localStorage.getItem("details"));
        document.querySelector('input[type="text"]').value = userInfo.user;
        // console.log(userInfo);
        // alert('Please enter your password');
    }
}
checkUserinfo();


function checkPassword(evt){
    evt.preventDefault();
    var userName = document.querySelector('input[type="text"]').value;
    var userPass = MD5(document.querySelector('input[type="password"]').value);
    var userInfo = JSON.parse(localStorage.getItem("details"));
    if(userName === userInfo.user == userPass === userInfo.pass){
        alert('Welcome home');
        document.body.classList.add(userInfo.theme);
        // console.log('get info');
    } else {
        alert('Please enter proper credentials');
    }
}
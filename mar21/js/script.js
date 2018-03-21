function welcome() {
    var username = prompt("What is your name?");
    document.getElementById('welcome').innerHTML = username;
}

welcome();

// function toggleColor() {
//     //toggle alternates back and forth
//     document.body.classList.toggle('colorize');
//}

function  toggleImage() {
    document.body.classList.toggle('img');
}

toggleImage();

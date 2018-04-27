function userStr(evt){
    console.log(searchBox.value);
    getReq(`https://api.github.com/search/user?q=${searchBox.value}&client_id=${clientId}`, githubUsers);
}
//     if(
//     evt.key !== 'undefined' &&
//     evt.key !== 'Backspace' &&
//     evt.key !== 'Tab' 
// )
//     userSearch += evt.key;

//     getCharacter(userSearch);
//     console.log(userSearch);

//     var userSearch = ' ';





// var cardList = document.querySelector('main ul');
// function cardListData(cards){
//     console.log(cards);
//     for(var i = 0; i < cards.results.length; i++){
//         var card = `
//         <li>
//             <img src="${cards.results[i].image}" alt="${cards.results[i].name}">
//             <h3>${cards.results[i].name}</h3>
//         </li>
//         `;
//         cardList.innerHTML += card;
//     }
// }



// getReq('https://rickandmortyapi.com/api/character/', cardListData);

// function getCharacter(searchStr){
//     var characterArr = [];
//     // console.log(searchStr);

//     var req = new XMLHttpRequest();
//     req.open('GET', 'https://rickandmortyapi.com/api/character/');
//     req.onload = function(){
//         if (req.readyState === 4 && req.status === 200){
//             var obj = JSON.parse(req.responseText).results;
//             for(var i = 0; i < obj.length; i++){
//         if( obj[i].name.includes(searchStr))
//             }
//   }
// }
//     req.send(null);
//     console.log(characterArr);
//     for(var i = 0; i < characterArr.length; i++){
//         if (searchStr === characterArr[i].name){
//             console.log(searchStr,
//             characterArr[i].name,
//         'success'
//         );
//         }
//     }
// }

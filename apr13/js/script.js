var items = document.querySelector('#items');
var photos = document.querySelectorAll('li');

var itemArray = [
    {
        img: "http://unsplash.it/256/256?image=100",
        alt: "image 100",
        title: "Snowy Field",
        cost: 100,
        desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vel, soluta."
    }
];

function displayItems(arr) {
    for (var i = 0; i < arr.length; i++) {
            // console.log( arr[i].alt );
        var item = `
        <li data-sku="00${i + 1}">
            <input type="checkbox">
            <img src="${arr[i].img}" alt="${arr[i].alt}">
            <h3>${arr[i].title}</h3>
            <p>$${arr[i].cost}</p>
            <p>${arr[i].desc}</p>
        </li>`;
        items.innerHTML = item;
    }
}

displayItems(itemArray);

var items = document.querySelector('#items');


var itemArray = [
    {
        img: "http://unsplash.it/256/256?image=206",
        alt: "image 205",
        title: "Sunny Farmland",
        cost: 100,
        desc: "Another image i'm selling using other people's hard work."
    }
];

function displayItems(arr) {
    for (var i = 0; i < arr.length; i++) {
            // console.log( arr[i].alt );
        var item = `
        <li data-sku="00${i + 1}">
            <input type="checkbox">
            <img src="${arr[i].img}" alt="${arr[i].alt}">
            <h3>${arr[i].title}</h3>
            <p>$${arr[i].cost}</p>
            <p>${arr[i].desc}</p>
        </li>`;
        items.innerHTML += item;
    }
}

displayItems(itemArray);

var items = document.querySelector('#items');


var itemArray = [
    {
        img: "http://unsplash.it/256/256?image=310",
        alt: "is it working?",
        title: "Silouette of Man",
        cost: 100,
        desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vel, soluta."
    }
];

function displayItems(arr) {
    for (var i = 0; i < arr.length; i++) {
            // console.log( arr[i].alt );
        var item = `
        <li data-sku="00${i + 1}">
            <input type="checkbox">
            <img src="${arr[i].img}" alt="${arr[i].alt}">
            <h3>${arr[i].title}</h3>
            <p>$${arr[i].cost}</p>
            <p>${arr[i].desc}</p>
        </li>`;
        items.innerHTML += item;
    }
}

displayItems(itemArray);

var items = document.querySelector('#items');


var itemArray = [
    {
        img: "http://unsplash.it/256/256?image=400",
        alt: "is it working?",
        title: "Leaves",
        cost: 100,
        desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vel, soluta."
    }
];

function displayItems(arr) {
    for (var i = 0; i < arr.length; i++) {
            // console.log( arr[i].alt );
        var item = `
        <li data-sku="00${i + 1}">
            <input type="checkbox">
            <img src="${arr[i].img}" alt="${arr[i].alt}">
            <h3>${arr[i].title}</h3>
            <p>$${arr[i].cost}</p>
            <p>${arr[i].desc}</p>
        </li>`;
        items.innerHTML += item;
    }
}

displayItems(itemArray);

var items = document.querySelector('#items');


var itemArray = [
    {
        img: "http://unsplash.it/256/256?image=500",
        alt: "is it working?",
        title: "Skyscraper",
        cost: 100,
        desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vel, soluta."
    }
];

function displayItems(arr) {
    for (var i = 0; i < arr.length; i++) {
            // console.log( arr[i].alt );
        var item = `
        <li data-sku="00${i + 1}">
            <input type="checkbox">
            <img src="${arr[i].img}" alt="${arr[i].alt}">
            <h3>${arr[i].title}</h3>
            <p>$${arr[i].cost}</p>
            <p>${arr[i].desc}</p>
        </li>`;
        items.innerHTML +=item;
    }
}

displayItems(itemArray);

var items = document.querySelector('#items');


var itemArray = [
    {
        img: "http://unsplash.it/256/256?image=800",
        alt: "is it working?",
        title: "Busy People",
        cost: 100,
        desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vel, soluta."
    }
];

function displayItems(arr) {
    for (var i = 0; i < arr.length; i++) {
            // console.log( arr[i].alt );
        var item = `
        <li data-sku="00${i + 1}">
            <input type="checkbox">
            <img src="${arr[i].img}" alt="${arr[i].alt}">
            <h3>${arr[i].title}</h3>
            <p>$${arr[i].cost}</p>
            <p>${arr[i].desc}</p>
        </li>`;
        items.innerHTML +=item;
    }
}

displayItems(itemArray);

function addListener(arr){
    for(var i = 0; i< arr.length; i++){
       arr[i].addEventListener('click',function(evt){
           this.classList.toggle('selected');
           
           //TERNARY OPERATOR // aka super awesome if statement
           (this.firstElementChild.checked) ? 
           this.firstElementChild.checked = false : 
           this.firstElementChild.checked = true;
        //    console.log(this.firstElementChild.checked);

        console.log(this);
        selectedArray.push(this);
        
        console.log(Array.from(arr).slice(this.dateaset.sku) );

        console.log(selectedArray);
       });
       }
    //    selectedArray.push();
    }
    addListener(items.children);
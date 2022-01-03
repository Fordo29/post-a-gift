let recipent = document.getElementById("recipient");
let nameInput = document.getElementById("name");
let link = document.getElementById("link");
let price = document.getElementById("price");
let button = document.querySelector("button");


const postGiftInfo = () => {
    return fetch('https://mysterious-mesa-00016.herokuapp.com/items', {
        method: 'POST',
        body: JSON.stringify({ id: Date.now(), recipient: recipent.value, name: nameInput.value, link: link.value, priceInDollars: parseInt(price.value) }), 
        headers: {
            'Content-Type': 'application/json'
        }
        })
        .then(response => response.json())
        .then(data => console.log(data))
        .catch(err => console.log(err));

}

button.addEventListener('click', postGiftInfo);

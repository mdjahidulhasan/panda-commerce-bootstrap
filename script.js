//color change of h2 tags
const h2Tags = document.getElementsByTagName('h2');
for (const h2 of h2Tags) {
    h2.style.color = 'lightblue';
}

//bg-color for backpack section
document.getElementById('backpack').style.backgroundColor = 'tomato';

//border radius for card class
const cards = document.getElementsByClassName('card');
for (const card of cards) {
    card.style.borderRadius = '30px';
}

//onclick func for subscribe
function print() {
    console.log('Subscribe or puck u.')
}

//buy button removal onclick
const btnBuyNow = document.getElementsByClassName('buy-now');
for (const btn of btnBuyNow) {
    btn.addEventListener('click', function (event) {
        event.target.parentNode.removeChild(event.target);
    })
}

//Submit button
document.getElementById('email').addEventListener('keyup', function (event) {
    const submitBtn = document.getElementById('submit-btn');
    if (event.target.value == 'email') {
        submitBtn.removeAttribute('disabled');
    }
    else {
        submitBtn.setAttribute('disabled', true);
    }
})

document.getElementById('email').addEventListener('change', function (event) {
    const submitBtn = document.getElementById('submit-btn');
    if (event.target.value == 'email') {
        submitBtn.removeAttribute('disabled');
    }
    else {
        submitBtn.setAttribute('disabled', true);
    }
})

//img change on mouseenter
const images = document.getElementsByClassName('img');
for (const img of images) {
    img.addEventListener('mouseenter', function (event) {
        event.target.src = 'images/bags/bag-1.png';
    })
    img.addEventListener('mouseleave', function (event) {
        event.target.src = 'images/shoes/shoe-1.png';
    })
}

//ondblclick
document.getElementById('subscribe').addEventListener('dblclick', function (event) {
    event.target.style.backgroundColor = 'tomato';
})
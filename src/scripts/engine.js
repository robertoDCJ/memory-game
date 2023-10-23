const srcImage = [
    "./src/images/black-j.png",
    "./src/images/black-k.png",
    "./src/images/black-q.png",
    "./src/images/green-joker.png",
    "./src/images/red-j.png",
    "./src/images/red-joker.png",
    "./src/images/red-k.png",
    "./src/images/red-q.png",
    "./src/images/black-j.png",
    "./src/images/black-k.png",
    "./src/images/black-q.png",
    "./src/images/green-joker.png",
    "./src/images/red-j.png",
    "./src/images/red-joker.png",
    "./src/images/red-k.png",
    "./src/images/red-q.png",
];

let openCards = [];

let contador = 0;

let record;

let shuffleSrc = srcImage.sort(() => (Math.random() > 0.5 ? 2 : -1));

for (let i = 0; i < srcImage.length; i++) {
    let box = document.createElement('div');
    box.className = 'item';
    box.style.backgroundImage = `url('${shuffleSrc[i]}')`;
    box.onclick = handleClick;
    document.querySelector('.game').appendChild(box);
}

function handleClick() {
    if (openCards.length < 2) {
        this.classList.add('boxOpen');
        openCards.push(this);
    }

    if (openCards.length == 2) {
        setTimeout(checkMatch, 500);
    }
}

function checkMatch() {
    if (openCards[0].style.backgroundImage === openCards[1].style.backgroundImage) {
        openCards[0].classList.add('boxMatch');
        openCards[1].classList.add('boxMatch');
    } else {
        openCards[0].classList.remove('boxOpen');
        openCards[1].classList.remove('boxOpen');
    }

    openCards = [];
    contador++;

    if (document.querySelectorAll('.boxMatch').length === srcImage.length) {
        document.querySelector('.score').innerHTML = `Parabéns, você venceu 🥳🎉 usando ${contador} cliques`;
        document.querySelector('.score').style.opacity = '1';
    }
}


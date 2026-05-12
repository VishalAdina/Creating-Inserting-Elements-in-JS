const btn = document.querySelector('#btn');

btn.addEventListener('click', () => {
    document.body.classList.toggle('body2');
    document.querySelector('h1').classList.toggle('title2');
});

let cardExists = false;
let newcard;

function createcard() {
        const card = document.createElement('div');
        card.classList.add('cardStyle');
        card.innerHTML = `
            <h2>Card Title</h2>
            <p>This is a dynamically created card.</p>
        `;
        return card;
    }

btn.addEventListener('click', () => {
    if (cardExists) {
        newcard.remove();
        cardExists = false;
        return;
    }
    else {
    newcard = createcard();
    document.body.appendChild(newcard);
     cardExists = true;
    }
});

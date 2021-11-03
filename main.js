const adviceDisplay = document.querySelector('.advice'),
      btnGenerate = document.querySelector('.btn'),
      url = 'https://api.adviceslip.com/advice/';

let randomId, randomAdvice;

async function getRandomAdvice(id) {
    await fetch(url + id)
    .then(response => response.json())
    .then(data => {
        randomAdvice = data;
        console.log(randomAdvice);
    })
    .catch(err => console.log(err));

    generateAdvice(randomAdvice);
}

function generateAdvice(randomAdvice) {
    return adviceDisplay.innerHTML = `${randomAdvice.slip.advice}`;    
}

function init() {
    randomId = Math.floor(Math.random() * 225);

    getRandomAdvice(randomId);
}

btnGenerate.addEventListener('click', function() {
    adviceDisplay.innerHTML = '';
    init();
});

init();
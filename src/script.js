const vote = document.querySelector('.vote')
const dog = document.querySelector('.dog')
const parrot = document.querySelector('.parrot')
const cat = document.querySelector('.cat')
const result = document.querySelector('.result')
const vote_cats = document.querySelector('.vote-cats')
const vote_parrots = document.querySelector('.vote-parrots')
const vote_dogs = document.querySelector('.vote-dogs')

const url_cats = new URL('https://sf-pyw.mosyag.in/sse/vote/cats')
const url_dogs = new URL('https://sf-pyw.mosyag.in/sse/vote/dogs')
const url_parrots = new URL('https://sf-pyw.mosyag.in/sse/vote/parrots')
const url_result = new URL('https://sf-pyw.mosyag.in/sse/vote/stats')

const ES = new EventSource(url_result);

function count_pet(summ_count, pet) {
    return Math.round(pet*100/summ_count)
}


function counter() {
    vote.style.display = 'none'
    result.style.display = ''
    ES.onmessage = function (message) {
        response = JSON.parse(message.data);
        ES.close();
        let {cats, parrots, dogs} = response;
        let summ_count = cats + parrots + dogs
        console.log("For 100% we take summ of all pets. Now it's " + summ_count)
        vote_cats.style.cssText = 'width: ' + count_pet(summ_count, cats) + '%;'
        console.log('Cats percent is - ' + count_pet(summ_count, cats))
        vote_cats.textContent = 'Cats ' + count_pet(summ_count, cats) + '%'
        vote_parrots.style.cssText = 'width: ' + count_pet(summ_count, parrots) + '%;'
        console.log('Parrots percent is - ' + count_pet(summ_count, parrots))
        vote_parrots.textContent = 'Parrots ' + count_pet(summ_count, parrots) + '%'
        vote_dogs.style.cssText = 'width: ' + count_pet(summ_count, dogs) + '%;'
        console.log('Dogs percent is - ' + count_pet(summ_count, dogs))
        vote_dogs.textContent = 'Dogs ' + count_pet(summ_count, dogs) + '%'
    }
};

function post_vote(url){
    fetch(url, {
        method: 'POST',
        body: ''
        })
};

dog.onclick = () => {
    post_vote(url_dogs)
    counter()
};

parrot.onclick = () => {
    post_vote(url_parrots)
    counter()
};

cat.onclick = () => {
    post_vote(url_cats)
    counter()
};
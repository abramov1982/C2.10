const vote = document.querySelector('.vote')
const dog = document.querySelector('.dog')
const parrot = document.querySelector('.parrot')
const cat = document.querySelector('.cat')
const result = document.querySelector('result')

const url_cats = new URL('https://sf-pyw.mosyag.in/sse/vote/cats')
const url_dogs = new URL('https://sf-pyw.mosyag.in/sse/vote/dogs')
const url_parrots = new URL('https://sf-pyw.mosyag.in/sse/vote/parrots')
const url_result = new URL('https://sf-pyw.mosyag.in/sse/vote/stats')

const ES = new EventSource(url_result);

ES.onmessage = function (message) {
    response = JSON.parse(message.data);
    ES.close();
    console.log(response)
    let {cats, parrots, dogs} = response;
    console.log(cats)
    console.log(parrots)
    console.log(dogs)
    
}


function post_vote(url){
    fetch(url, {
        method: 'POST',
        body: ''
        })
};

function vote_display(){
    vote.style.display = 'none'
};
dog.onclick = () => {
    post_vote(url_dogs)
    vote_display()
};

parrot.onclick = () => {
    post_vote(url_parrots)
    vote_display()
};

cat.onclick = () => {
    post_vote(url_cats)
    vote_display()
};
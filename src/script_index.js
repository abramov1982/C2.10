const vote = document.querySelector('.vote')
const dog = document.querySelector('.dog')
const parrot = document.querySelector('.parrot')
const cat = document.querySelector('.cat')
const url_cats = new URL('https://sf-pyw.mosyag.in/sse/vote/cats')
const url_dogs = new URL('https://sf-pyw.mosyag.in/sse/vote/dogs')
const url_parrots = new URL('https://sf-pyw.mosyag.in/sse/vote/parrots')
const url_result = new URL('https://sf-pyw.mosyag.in/sse/vote/stats')

const ES = new EventSource(url_result);

function post_vote(url){
    fetch(url, {
        method: 'POST',
        body: ''
        })
};

window_operation = () => {
    window.open('result.html', '_self') 
}

dog.onclick = () => {
    post_vote(url_dogs)
    window_operation()
};

parrot.onclick = () => {
    post_vote(url_parrots)
    window_operation()
};

cat.onclick = () => {
    post_vote(url_cats)
    window_operation()
};
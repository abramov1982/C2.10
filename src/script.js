const progress = document.querySelector('.progress-bar')

console.log('%O', progress)

const header = new Headers({
    'Access-Control-Allow-Credentials': true,
    'Access-Control-Allow-Origin': '*'
})

const url = new URL('https://sf-pyw.mosyag.in/sse/stream-randoms')

const ES = new EventSource(url, header)

ES.onerror = error => {
    ES.readyState ? progress.textContent = "Some error" : null;
}

ES.onmessage = ({ data }) => {
    progress.style.cssText = `width: ${data}%`
    progress.textContent = `${data}%`
}
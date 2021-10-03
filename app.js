let button = document.querySelector('#btn')

button.addEventListener('click', function() {
    const word = document.getElementById('str').value;
    const count  = word.length;
    const outputDiv = document.getElementById('output');

    outputDiv.innerHTML = `<h1>${count}</h1>`
})
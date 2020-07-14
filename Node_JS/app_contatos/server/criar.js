enviar = document.getElementById('enviar');
form = document.getElementById('form');

enviar.addEventListener("click", function(event){
    create();
    event.preventDefault()
  });

function create() {
    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const telefone = document.getElementById('telefone').value;

    postData('http://localhost:3333/contatos', { nome: nome, email: email, telefone: telefone })
    .then(data => {
      console.log(data); // JSON data parsed by `data.json()` call
    });
   
}

async function postData(url = '', data = {}) {
    // Default options are marked with *
    const response = await fetch(url, {
      method: 'POST', // *GET, POST, PUT, DELETE, etc.
      mode: 'cors', // no-cors, *cors, same-origin
      headers: {
        'Content-Type': 'application/json'
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: JSON.stringify(data) // body data type must match "Content-Type" header
    });
    return response.json(); // parses JSON response into native JavaScript objects
  }
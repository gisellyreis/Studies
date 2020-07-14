enviar = document.getElementById('enviar');
form = document.getElementById('form');
const container = document.getElementById('container');

enviar.addEventListener("click", function(event){
    event.preventDefault();
    create();
  });

function create() {
    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const telefone = document.getElementById('telefone').value;

    postData('http://localhost:3333/contatos', { nome: nome, email: email, telefone: telefone })
    .then(data => {
      console.log(data); // JSON data parsed by `data.json()` call

      if(data.message) {
        warning(data.message);
      }
      else {
          console.log('não tem erro');
            success('Contato criado com sucesso!');
      }
    });
   
}

function warning(msg) {
    div = document.createElement('div');
    text = document.createTextNode(msg);
    div.setAttribute('class', 'alert alert-warning');
    div.setAttribute('role', 'alert');
    div.appendChild(text);

    btn = document.createElement('button');
    btn.setAttribute('type', 'button');
    btn.setAttribute('class', 'close');
    btn.setAttribute('data-dismiss', 'alert');
    btn.setAttribute('aria-label', 'Close');

    span = document.createElement('span');
    span.setAttribute('aria-hidden', 'true');
    text = document.createTextNode('x');
    span.appendChild(text);

    btn.appendChild(span);
    div.appendChild(btn);

    container.appendChild(div);
}

function success(msg) {
    div = document.createElement('div');
    text = document.createTextNode(msg);
    div.setAttribute('class', 'alert alert-success');
    div.setAttribute('role', 'alert');
    div.appendChild(text);

    btn = document.createElement('button');
    btn.setAttribute('type', 'button');
    btn.setAttribute('class', 'close');
    btn.setAttribute('onclick', 'goBack()');
    btn.setAttribute('data-dismiss', 'alert');
    btn.setAttribute('aria-label', 'Close');

    span = document.createElement('span');
    span.setAttribute('aria-hidden', 'true');
    text = document.createTextNode('x');
    span.appendChild(text);

    btn.appendChild(span);
    div.appendChild(btn);

    container.appendChild(div);
}

function goBack() {
    location.replace("./home.html");
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
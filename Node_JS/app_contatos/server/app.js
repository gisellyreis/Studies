
const contatos = document.getElementById('contatos');
const container = document.getElementById('container');
let data = {};

list();

function list() {
    fetch(
        "http://localhost:3333/contatos"
        )
        .then((res) => res.json())
        .then((res) => {
            console.log(res);
            data = res;
                        
            if(data.rows <= 0) {
                info('Ainda não há pessoas cadastradas!');
            }
            else {
                data.results.forEach(contato => {
                    th = document.createElement('th')
                    tdTel = document.createElement('td')
                    tdEmail = document.createElement('td')
                    tr = document.createElement('tr')
                    tdEx = document.createElement('td')
                    tdEd = document.createElement('td')
                    btnEd = document.createElement('button')
                    btnEx = document.createElement('button')

                    text = document.createTextNode(contato.nome)
                    th.appendChild(text)
                    tr.appendChild(th)

                    text = document.createTextNode(contato.telefone)
                    tdTel.appendChild(text)
                    tr.appendChild(tdTel)

                    text = document.createTextNode(contato.email)
                    tdEmail.appendChild(text)
                    tr.appendChild(tdEmail)

                    text = document.createTextNode('Excluir')
                    btnEx.appendChild(text)
                    btnEx.setAttribute('onclick', `handleDelete(${contato.id})`)
                    tdEx.appendChild(btnEx)
                    tr.appendChild(tdEx)

                    text = document.createTextNode('Editar')
                    btnEd.appendChild(text)
                    tdEd.appendChild(btnEd)
                    btnEd.setAttribute('onclick', `edit(${contato.id})`)
                    tr.appendChild(tdEd)

                    tr.setAttribute('id', contato.id)
                    contatos.appendChild(tr)                
                });
            }
    })

}

function handleEdit(id) {
    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const telefone = document.getElementById('telefone').value;
   
    postData(`http://localhost:3333/contatos/${id}`,  { nome: nome, email: email, telefone: telefone })
    .then((res) => {
        console.log(res);
    })
    /* 
        fetch(
            `http://localhost:3333/contatos/${id}`, {
            method: "PUT",
            headers: {
                'Content-Type':'application/x-www-form-urlencoded'
              },
            body: `nome=${nome}&email=${email}&telefone=${telefone}`
        }) 
    */
        
}

function edit(id) {
    const contato = document.getElementById(id);
    fetch(
        `http://localhost:3333/contatos/${id}`
        )
        .then((res) => res.json())
        .then((res) => {
            console.log(res);
            const {nome, telefone, email} = res[0];
            contato.innerHTML = '';

            form = document.createElement('form');
            inputNome = document.createElement('input');
            inputNome.setAttribute('value', nome);
            inputNome.setAttribute('id', 'nome');
            form.appendChild(inputNome);

            inputTel = document.createElement('input');
            inputTel.setAttribute('value', telefone);
            inputTel.setAttribute('id', 'telefone');
            form.appendChild(inputTel);

            inputEmail = document.createElement('input');
            inputEmail.setAttribute('value', email);
            inputEmail.setAttribute('id', 'email');
            form.appendChild(inputEmail);

            submit = document.createElement('input');
            submit.setAttribute('type', 'submit');
            submit.setAttribute('value', 'Enviar');
            form.appendChild(submit);
            form.setAttribute('id', 'edit-form');
            form.setAttribute('onsubmit', `handleEdit(${id})`);

            container.appendChild(form);
    })
};

function handleDelete(id) {
    const contato = document.getElementById(id);
    contato.innerHTML = '';
    danger('Contato Excluido!');

    async function del(url = '') {
        const response = await fetch(url, {
          method: 'DELETE', 
          mode: 'cors',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(data)
        });
        return response.json();
    }

    del(`http://localhost:3333/contatos/${id}`)
    .then(data => {
        console.log(data); 
    });
    
}

async function postData(url = '', data = {}) {
    const response = await fetch(url, {
      method: 'PUT', 
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    });
    return response.json();
}

function danger(msg) {
    div = document.createElement('div');
    text = document.createTextNode(msg);
    div.setAttribute('class', 'alert alert-danger');
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

function info(msg) {
    div = document.createElement('div');
    div.setAttribute('class', 'alert alert-info');
    div.setAttribute('role', 'alert');
    
    strong = document.createElement('strong');
    text = document.createTextNode(msg);
    strong.appendChild(text);
    div.appendChild(strong);

    container.appendChild(div);
}
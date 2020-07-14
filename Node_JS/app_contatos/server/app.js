
const contatos = document.getElementById('contatos');
const container = document.getElementById('container');
let data = {};

list();
strong = document.createElement('strong');

function list() {
    fetch(
        "http://localhost:3333/contatos"
        )
        .then((res) => res.json())
        .then((res) => {
            console.log(res);
            data = res;
            
            strong = document.createElement('strong')
            
            if(data.rows <= 0) {
                text = document.createTextNode('Ainda não há pessoas cadastradas!')
                strong.appendChild(text)
                container.appendChild(strong)
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
                    console.log(contato)

                
                });
            }
    })

}

var initDel = {
    method: 'DELETE',
    mode: 'cors',
    cache: 'default'
};


function handleEdit(id) {
   /*  const contato = document.getElementById(id);
    //debugger
    */
    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const telefone = document.getElementById('telefone').value;
   
    fetch(
        `http://localhost:3333/contatos/${id}`, {
            method: "PUT",
            headers: {
                'Content-Type':'application/x-www-form-urlencoded'
              },
            body: `nome=${nome}&email=${email}&telefone=${telefone}`
        })
        .then((res) => res.json())
        .then((res) => {
            console.log(res);
            data = res;
          
    })
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
            console.log(nome);
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
    fetch(
        `http://localhost:3333/contatos/${id}`, initDel
        )
        .then((res) => res.json())
        .then((res) => {
            console.log(res);
            data = res;
          
    })
}

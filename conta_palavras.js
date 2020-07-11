const fs = require('fs');
const readline = require('readline');
const readable = fs.createReadStream('./arquivo.txt');

let lst;
var s = fs.readFile('./arquivo.txt', 'utf-8', function(err, data) {
    if(err) console.log("erro ao ler arquivo");
    lst = data.split();
});

const rl = readline.createInterface({
    input: readable,
});

const data = {lista: [], contador: 0}
let d = 0;
rl.on('line', (line) => {
    data.lista.push(line.split(' '));
    console.log(data.lista);
    data.lista.forEach(element => {
        data.contador = element.length;
    });
    d += data.contador;
    console.log(d);
})
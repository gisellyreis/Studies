const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mysql = require('mysql');
const cors = require('cors');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'senha',
    database: 'agenda'
});

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const router = express.Router();
router.get('/', (req, res) => {
    res.json({ message: 'Ok' });
})

router.get('/contatos', (req, res) => {
    connection.query('SELECT * FROM Contatos', function(error, results, fields) {
        if(error) return res.json(error);
        else return res.json({rows: results.length, results: results});
    });
})

router.get('/contatos/:id?', (req, res) => {
    let filter = '';
    if(req.params.id) filter = ' WHERE id =' + parseInt(req.params.id);
    execSQLQuery('SELECT * FROM Contatos' + filter, connection, res);
    // usar para fazer buscas
})

router.delete('/contatos/:id', (req, res) => {
    execSQLQuery('DELETE FROM Contatos WHERE id =' + parseInt(req.params.id), connection, res);
}) 

router.post('/contatos', (req, res) => {
    const { nome, telefone, email } = req.body;
    if(!nome || !telefone || !email) 
        return res.json({ message: 'Preencha todos os campos!' });

    connection.query(`SELECT * FROM Contatos WHERE email ='${email}'`, function(error, results, fields) {
        if(error) console.log(error);
        else {
            if(results.length>0) return res.json({ message: 'Email já está cadastrado!' });
            else 
                return execSQLQuery(`INSERT INTO Contatos(nome, email, telefone) VALUES('${nome}', '${email}', '${telefone}') `, connection, res);
        } 
    });
   
})

router.put('/contatos/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const { nome, telefone, email } = req.body;
    execSQLQuery(`UPDATE Contatos SET nome='${nome}', email='${email}', telefone='${telefone}' WHERE id=${id}`, connection, res);
})

app.use('/', router);

//connection.end();
app.listen(3333);
console.log('API OK!');

// Conecta ao banco de dados
function execSQLQuery(sqlQry, connection, res) {
    connection.query(sqlQry, function(error, results, fields) {
        if(error) res.json(error);
        else res.json(results);
    });
}
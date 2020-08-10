const mysql = require('mysql');

const con = mysql.createConnection({
    host: 'localhost',
    user: user,
    password: senha,
    database: 'estudo'
});

con.connect((err) => {
    if(err) {
        console.log('Erro connecting to database...', err)
        return
    }

    console.log('Connection established!');
    
})

/* con.query('SELECT * FROM author', (err, rows) => {
    if (err) return console.log(err);

    console.log('Authors: ', rows, '\n\n');
})

con.query('SELECT * FROM book', (err, rows) => {
    if (err) return console.log(err);

    console.log('Books: ', rows, '\n\n');
}) */

con.query(
    'SELECT b.id, b.title, a.nome, a.location FROM book as b INNER JOIN author as a ON b.author = a.id',
    (err, rows) => {
        if(err) console.log(err);

        rows.forEach(row => {
            console.log(`${row.title} by ${row.nome}, ${row.location}\n`)
        });
    }
)

// INSERT new book into table
/* const newBook = {title: 'Computer Networks', author: 2}

con.query(
    'INSERT INTO book SET ?', newBook, (err, res) => {
        if(err) return console.log(err);

        console.log(`New book added with ID: ${res.insertId}`)
    }
) */

// UPDATE 
/* con.query(
    'UPDATE book SET title = ? WHERE ID = ?',
    ['Redes de Computadores', 6],
    (err, res) => {
        if(err) return console.log(err);

        console.log('Chnged', res);
    }
) */

// DELETE 
/* con.query(
    'DELETE FROM book WHERE id = ?', [6],
    (err, res) => {
        if(err) return console.log(err);

        console.log(`Deleted ${res.affectedRows} row(s)`);
    }
) */

con.end((err) => {
    if(err) {
        console.log('Erro to finish connection...', err)
        return
    }

    console.log('The connection was finish')
})


DROP DATABASE agenda;
CREATE DATABASE agenda;

use agenda;

CREATE TABLE IF NOT EXISTS Contatos (
    id int NOT NULL AUTO_INCREMENT,
    nome VARCHAR(250) NOT NULL,
    email VARCHAR(250) NOT NULL,
    telefone VARCHAR(11) NOT NULL,

    PRIMARY KEY (id)
);
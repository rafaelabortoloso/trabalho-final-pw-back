require('dotenv/config');
const express = require('express');
const cors = require('cors');
const app = express();
const connection = require('./database');
const routes = require('./routes')

app.use(express.json()); 
app.use(cors());

connection.connect((error) => {
    if (error) {
      console.error('Erro ao conectar ao banco de dados:', error);
    } else {
      console.log('Conectado ao banco de dados!');
    }
});

app.use(routes)

module.exports = app;



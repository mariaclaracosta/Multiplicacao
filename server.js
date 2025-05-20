const express = require('express');
const app = express();
const calculate = require('./api/calculate.js');

app.use(express.json());
app.use('/api/calculate', calculate);

app.listen(3003, () => console.log('Multiplicação rodando em http://localhost:3003'));
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const app= express();
app.use(bodyParser.json());
app.user(cors());

mongoose.connect('mongodb//localhost:27017/todoapp', {useNewUrlParser: true, useUnifiedTopology: true})
.then(() => console.log('Conectado a MongoDB'))
.catch(err => console.error('Error de conexión a MongoDB: ', err));

app.length('/', (req, res) => {
    res.send('API de Gestióon de Tareas');
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log('Servidor ejecutándose en el puerto ${PORT}'));
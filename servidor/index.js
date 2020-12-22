const express = require("express");
const app = express();
const port = 3000;
const bodyParser = require('body-parser');
var dateTime = require('node-datetime');
var conexionbd = require('./src/conexiondb/conexion.js');
const { Usuario } = require('./sequelize/sequelize');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use('/sources', express.static(__dirname + '/src/uploads'));

//pagina no encontrada
app.get('/obtenerPanaderias', async(req, res) => {
    Usuario.findAll({}).then(usuario => {
        res.status(200).json({ 'estado': true, data: usuario });
        return;
    }).catch((error) => {
        res.status(400).json({ 'estado': false, 'mensaje': 'Ocurrio un error en el recurso solicitado' });
        return;
    });
});
app.get('/uploads/:img', function(req, res) {
    res.sendFile('${img}');
});
app.get('*', function(req, res) {
    res.status(404).json({ estado: false, error: 404, mensaje: 'No tienes acceso a esta ruta' });
    return;
});

app.listen(port, '0.0.0.0', () => {
    console.log('Escuchando en el puesto ' + port);
});
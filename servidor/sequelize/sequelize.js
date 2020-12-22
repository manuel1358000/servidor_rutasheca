const Sequelize = require('sequelize');

const UsuarioModel = require('../src/models/usuario.js');

const DBURL = 'mysql://root:manuel@192.168.1.3:3307/db_rutasheca';

const sequelize = new Sequelize(DBURL);

const Usuario = UsuarioModel(sequelize,Sequelize);


sequelize.sync()
    .then(()=>{
        console.log('Tablas Creadas');
    });
    module.exports = {
        Usuario
    }
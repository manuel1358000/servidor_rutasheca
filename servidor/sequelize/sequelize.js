const Sequelize = require('sequelize');

const UsuarioModel = require('../src/models/usuario.js');

const DBURL = 'mysql://root:manuel@basedatos:3306/db_rutasheca';

const sequelize = new Sequelize(DBURL);

const Usuario = UsuarioModel(sequelize,Sequelize);


sequelize.sync()
    .then(()=>{
        console.log('Tablas Creadas');
    });
    module.exports = {
        Usuario
    }

module.exports = (sequelize, type) => {
    const usuario = sequelize.define('usuario', {
        idUsuario: {
            unique: true,
            type: type.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        nombres: {
            type: type.STRING
        },
        especialidad: {
            type: type.STRING(1000)
        },
        direccion: {
            type: type.STRING(1000)
        },
        descripcion: {
            type: type.STRING(5000)
        },
        logo: {
            type: type.STRING
        },
        telefono: {
            type: type.STRING(350)
        },
        propietario: {
            type: type.STRING(350)
        },
        fotografia: {
            type: type.STRING(1000)
        }
    }, {
        timestamps: true,
        tableName: "usuario"
    })
    return usuario;
}
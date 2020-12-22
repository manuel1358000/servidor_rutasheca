var mysql = require('mysql');
const config = require('../../config/authdb.key');
 var mysql_pool  = mysql.createPool({
    connectionLimit : 100,
    host            : '192.168.1.3',
    user            : config.user,
    password        : config.password,
    database        : 'db_rutasheca',
    port            :3307   
  });

 module.exports.mysql_pool=mysql_pool;
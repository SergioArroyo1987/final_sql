const mysql=require('mysql2/promise');
const conexion=mysql.createPool({
    host:'localhost',
    user:'root',
    password:'77357590s',
    database:'appbooks',
    waitForConnections:true,
    connectionLimit:10,
    maxIdle:10,
    idleTimeout:60000,
    queueLimit:0
});

module.exports={conexion};
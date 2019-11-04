'use strict';

const mysql = require('mysql');
const db_ip = '34.95.47.253'; // the IP for Google Cloud Platform MySQL instance

const connection = mysql.createConnection({
    host: db_ip,
    user: 'root',
    password: '',
    database: 'my_db'
});

connection.connect(function (err) {
    if (err) throw err;
});

module.exports = connection;

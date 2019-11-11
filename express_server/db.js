'use strict';

const mysql = require('mysql');
const db_ip = '34.95.47.253'; // the IP for Google Cloud Platform MySQL instance
const db_name = 'fck_test_db'; // name of database to connect to

const connection = mysql.createConnection({
    host: db_ip,
    user: 'root',
    password: 'woffuk-qivzo8-jeCfuz',
    database: db_name
});

connection.connect(function (err) {
    if (err) throw err;
});

module.exports = connection;

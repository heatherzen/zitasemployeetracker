const mysql = require("mysql2");

const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "Fir3srpt3v3@$",
    database: "employees"
});

connection.connect(function (err){
    if (err) throw err;
});

module.exports = connection;
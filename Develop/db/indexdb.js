const connection = require('./connection');

class DB {
    
    constructor(connection) {
        this.connection = connection;
    }

viewAllEmployees() {
    return this.connection.promise().query(
        "SELECT * FROM employee"
    );
}

viewAllDepartments() {
    return this.connection.promise().query(
        "SELECT * FROM department"
    );
}

viewAllRoles() {
    return this.connection.promise().query(
        "SELECT * FROM role"
    );
}



}
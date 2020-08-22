const connection = require('./connection');

class DB {

    constructor(connection) {
        this.connection = connection;
    }

    viewAllEmployees() {
        return this.connection.promise().query(
            "SELECT employee_id, first_name, last_name, title, department_name, salary, manager_name FROM employee WHERE id = ?", employee
        );
    }



    viewAllDepartments() {
        return this.connection.promise().query(
            "SELECT * FROM department"
        );
    }

    viewAllRoles() {
        return this.connection.promise().query(
            "SELECT title, role_id, department_name, salary FROM ?", role
        );
    }

    addRole(role) {
        return this.connection.promise().query(
            "INSERT INTO role SET ?", role
        );
    }

    addEmployee(employee) {
        return this.connection.promise().query(
            "INSERT INTO employee SET ?", employee
        );
    }

    addDepartment(department) {
        return this.connection.promise().query(
            "INSERT INTO department SET ?", department
        );
    }

    updateEmployeeRole(role) {
        return this.connection.promise().query(
            "SELECT employee_id FROM employee AND UPDATE title WHERE role_id =?", role
        );
    }

}

module.exports = new DB(connection);
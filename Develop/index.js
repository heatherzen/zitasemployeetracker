const logo = require('asciiart-logo');
// const db = require('./db');
//const { viewAllEmployees, addDepartment } = require('./db/indexdb');
const inquirer = require('inquirer');
const { addEmployee, updateEmployeeRole } = require('./db');
require('console.table');

init();

function init() {
    const loGo = logo({ name: "Employee Tracker" }).render();

    console.log(loGo);

    inquirer
        .prompt([
            {
                type: 'list',
                name: 'action',
                message: 'What would you like to do?',
                choices: [
                    {
                        name: "View All Departments",
                        value: "view_dept"
                    }, 
                    {
                        name: "View All Roles",
                        value: "view_role"
                    },
                    {
                        name: "View All Employees",
                        value: "view_employees"
                    },
                    {
                        name: "Add a Department",
                        value: "add_dept"
                    },
                    {
                        name: "Add a Roll",
                        value: "add_role"
                    },
                    {
                        name: "Add an Employee",
                        value: "add_employee"
                    },
                    {
                        name: "Update Employee Role",
                        value: "update_employee"
                    }
                ]
            }])
    .then(answer => {

        switch(answer){
            case 'view_dept':
                viewAllDepartments();
                break;
            case 'view_role':
                viewAllRoles();
                break;
            case 'view_employees':
                viewAllEmployees();
                break;
            case 'add_dept':
                deptAdd();
                break;
            case 'add_role':
                addRole();
                break;
            case 'add_employee':
                addEmployee();
                break;
            case 'update_employee':
                updateEmployeeRole();
                break;
        }
    })
}
function deptAdd() {
    inquirer.prompt([
        {

            type: 'input',
            name: 'add_dept',
            message: 'What is the name of the Department?'
        }
    ]).then(deptAddAnswer => {
        addDepartment(deptAddAnswer)
    })
}

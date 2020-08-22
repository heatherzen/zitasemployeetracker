const logo = require('asciiart-logo');
// const db = require('./db');
//const { viewAllEmployees, addDepartment } = require('./db/indexdb');
const inquirer = require('inquirer');
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
                        //  "View All Roles", "View All Employees", "Add a Department", "Add a Roll", "Add an Employee", "Update Employee Role"]

                    }
                ]
            }])
    // .then(answer => {

    //     switch(answer){
    //         case 'View All Departments':
    //             viewAllDepartments();
    //             break;
    //         case 'View All Roles':
    //             viewAllRoles();
    //             break;
    //         case 'View All Employees':
    //             viewAllEmployees();
    //             break;
    //         case 'Add a Department':
    //             deptAdd();
    //             break;
    //     }
    // })
}
// function deptAdd() {
//     inquirer.prompt([
//         {

//             type: 'input',
//             name: 'add_dept',
//             message: 'What is the name of the Department?'
//         }
//     ]).then(deptAddAnswer => {
//         addDepartment(deptAddAnswer)
//     })
// }

const {  prompt  } = require('inquirer');
const logo = require('asciiart-logo');
const db = require('./db/indexdb');
require('console.table');

init();

function init() {
    const loGo = logo({ name: "Employee Tracker" }).render();

    console.log(loGo);

    
}
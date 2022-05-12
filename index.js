const inquirer = require('inquirer');
const Manager = require('./lib/Manager.js');
const Engineer = require('./lib/Engineer.js');
const Intern = require('./lib/Intern.js');
const fs = require('fs');

let teamArray = [];

const createManager = () => {
    inquirer.prompt([
        {
            type: 'text',
            name: 'name',
            message: "What is the managers name?",
        },
        {
            type: 'number',
            name: 'employeeID',
            message: " employee ID?",
        },
        {

            type: 'text',
            name: 'officeNumber',
            message: "What is the phone number?",
        },
        {
            type: 'text',
            name: 'email',
            message: "What is the email?",
        }
    ]) .then (answers => {
        let manager = new Manager (answers.name, answers.employeeID, answers.email, answers.officeNumber);
        teamArray.push(manager)
        createMenu()
    }) 

}

    const createEngineer = () => {
        inquirer.prompt([
            {
                type: 'text',
                name: 'name',
                message: "What is the name?",
            },
            {
                type: 'number',
                name: 'employeeID',
                message: "What is the employee ID?",
            },
            {
                type: 'text',
                name: 'email',
                message: "What is the email?",
            },
            {
                type: 'text',
                name: 'github',
                message: "What is the github username?",
            }
        ]) .then (answers => {
            let engineer = new Engineer (answers.name, answers.employeeID, answers.email, answers.github);
            teamArray.push(engineer)
            createMenu()
        })
    }

    const createIntern = () => {
        inquirer.prompt([
            {
                type: 'text',
                name: 'name',
                message: "What is the  name?",
            },
            {
                type: 'number',
                name: 'employeeID',
                message: "What is the employee ID?",
            },
            {
                type: 'text',
                name: 'email',
                message: "What is the email?",
            },
            {
                type: 'text',
                name: 'school',
                message: "What school does/ did you attend?",
            }
        ]) .then (answers => {
            let intern = new Intern (answers.name, answers.employeeID, answers.email, answers.school);
            teamArray.push(intern)
            createMenu()
        })
    }
    createManager()
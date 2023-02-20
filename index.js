const inquirer = require("inquirer");
const fs = require("fs");
const createTeamDirectory = require("./lib/document")
const { readFile, writeFile } = require('fs/promises')
const path = require('path')

const Engineer = require("./lib/engineer.js")
const Intern = require("./lib/intern.js")
const Manager = require("./lib/manager.js");

//CLI array of questions

const questions = [
        {
            type: 'input',
            name: 'name',
            message: 'Please enter managers name',
        },
        {
            type: 'input',
            name: 'id',
            message: 'Please enter managers employee ID',
        },
        {
            type: 'input',
            name: 'email',
            message: 'Please enter managers email address',
        },
        {
            type: 'input',
            name: 'officeNumber',
            message: 'Please enter managers office number',
        },
        {
            type: 'list',
            name: 'newTeamMember',
            message: 'Do you want to add a new team member to your team?',
            choices: ['Engineer', 'Intern', 'My team is complete']
        }
    ];

//insert engineer questions if Engineer is selected



//function to create HTML file
function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(), fileName), data);
}

function init() {
    inquirer.prompt(questions).then((responses) => {
        console.log('creating HTML file');
        writeToFile('index.html', createTeamDirectory({ ...responses }))
    })
}

init();
//const Employee = require("./employee.js");

// class Engineer extends Employee {
//     constructor (name, id, email, github) {
//         super(name, id, email)
//         this.github = github
//     }
//     getRole(){
//         return "Engineer"
//     }
//     getGithub(){
//         return this.github
//     }
// }

function Employee(name, id, email) {
    this.name = name;
    this.id = id;
    this.email = email;
}
function Engineer(name, id, email, github) {
    Employee.call(this, name, id, email)
    this.github = github
}


module.exports = Engineer;

// .prompt([
//     {
//         type: 'input',
//         name: 'engineerName',
//         message: 'Please enter the engineer name',
//     }
//     {
//         type: 'input',
//         name: 'engineerID',
//         message: 'Please enter the engineer employee ID',
//     }
//     {
//         type: 'input',
//         name: 'engineerEmail',
//         message: 'Please enter the engineer email address',
//     }
//     {
//         type: 'input',
//         name: 'engineerGithub',
//         message: 'Please enter the engineer GitHub username',
//     }
//     {
//         type: 'list',
//         name: 'newTeamMember',
//         message: 'Do you want to add a new team member to your team?',
//         choices: ['Engineer', 'Intern', 'My team is complete']
//     }
// ])
//const Employee = require("./employee.js");

// class Manager extends Employee {
//     constructor (name, id, email, officeNumber) {
//         super(name, id, email)
//         this.officeNumber = this.officeNumber
//     }
//     getRole(){
//         return "Manager"
//     }
//     getOfficeNumber () {
//         return this.officeNumber
//     }
// }
function Employee(name, id, email) {
    this.name = name;
    this.id = id;
    this.email = email;
}

function Manager(name, id, email, officeNumber) {
    Employee.call(this, name, id, email)
    this.officeNumber = officeNumber
}


module.exports = Manager;

// //manager question prompts


//     return inquirer
//             .prompt([
//                 {
//                     type: 'input',
//                     name: 'managerName',
//                     message: 'Please enter managers name',
//                 }
//                 {
//                     type: 'input',
//                     name: 'managerID',
//                     message: 'Please enter managers employee ID',
//                 }
//                 {
//                     type: 'input',
//                     name: 'managerEmail',
//                     message: 'Please enter managers email address',
//                 }
//                 {
//                     type: 'input',
//                     name: 'managerOffice',
//                     message: 'Please enter managers office number',
//                 }
//                 {
//                     type: 'list',
//                     name: 'newTeamMember',
//                     message: 'Do you want to add a new team member to your team?',
//                     choices: ['Engineer', 'Intern', 'My team is complete']
//                 }
//             ])
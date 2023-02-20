//const Employee = require("./employee.js");

// class Intern extends Employee {
//     constructor (name, id, email, school){
//         super(name, id, email)
//         this.school = school
//     }
//     getRole(){
//         return "Intern"
//     }
//     getSchool () {
//         return this.school
//     }
// }
function Employee(name, id, email) {
    this.name = name;
    this.id = id;
    this.email = email;
}

function Intern(name, id, email, school) {
    Employee.call(this, name, id, email)
    this.school = school
}

module.exports = Intern;


// .prompt([
//     {
//         type: 'input',
//         name: 'internName',
//         message: 'Please enter the interns name',
//     }
//     {
//         type: 'input',
//         name: 'internID',
//         message: 'Please enter the interns employee ID',
//     }
//     {
//         type: 'input',
//         name: 'internEmail',
//         message: 'Please enter the interns email address',
//     }
//     {
//         type: 'input',
//         name: 'internSchool',
//         message: 'Please enter the interns school',
//     }
//     {
//         type: 'list',
//         name: 'newTeamMember',
//         message: 'Do you want to add a new team member to your team?',
//         choices: ['Engineer', 'Intern', 'My team is complete']
//     }
// ])
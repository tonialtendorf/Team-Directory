const Employee = require('../lib/employee.js')

//test to ensure a new employee is created when all CLI prompts are completed
describe('Employee', () => {

    describe('new employee', () => {
      it('should create a new employee including name, email, and id once CLI prompts are completed', () => {
        const employee2 = "";
        const e = new Employee(this.name, this.id, this.email);
        expect(employee2).toEqual("object");
      });
    });
  });
  


  // describe('new employee', () => {
  //   it('should create a new employee including name, email, and id once CLI prompts are completed', () => {
  //     const e = new Employee(this.name, this.id, this.email);
  //     expect(typeof(e)).toEqual("object");
  //   });
  // });



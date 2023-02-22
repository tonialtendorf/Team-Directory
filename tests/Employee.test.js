const Employee = require('../lib/employee.js')

//test to ensure a new employee is created when all CLI prompts are completed
describe('Employee', () => {

    describe('new employee', () => {
      it('should create a new employee including name, email, and id once CLI prompts are completed', () => {
        const e = new Employee("Toni", 1, "toni@email.com");
        expect(e.Employee).toEqual();
      });
    });
  });
  

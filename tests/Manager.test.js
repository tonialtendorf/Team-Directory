//inquire manager.js file

const Manager = require("../lib/manager.js") 

//test to ensure a managers office number populates
describe('Manager', () => {

    describe('manager office number', () => {
      it('A managers office number should populate if a manager is added to the directory', () => {
        const testOfficeNumber = "10";
        const e = new Manager("Toni", 1, "toni@email.com", testOfficeNumber);
        expect(e.officeNumber).toEqual(testOfficeNumber);
      });
    });
  });
  

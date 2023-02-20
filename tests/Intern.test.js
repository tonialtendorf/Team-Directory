//inquire intern.js file
const intern = require("../lib/intern.js")

//test to ensure an interns school populates
describe('Intern', () => {

    describe('intern school', () => {
      it('A school name should populate if a new intern is added to the directory', () => {
        const testSchool = "Winona";
        const e = new intern("Toni", 1, "toni@email.com", testSchool);
        expect(e.school).toEqual(testSchool);
      });
    });
  });
  

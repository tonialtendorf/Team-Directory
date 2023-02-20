const Engineer = require("../lib/engineer.js")

//test to ensure an engineers github account populates
describe('Engineer', () => {

    describe('Github Account', () => {
      it('A Github account should populate if a new engineer is added to the directory', () => {
        const testGithub = "username";
        const e = new Engineer("Toni", 1, "toni@email.com", testGithub);
        expect(e.github).toEqual(testGithub);
      });
    });
  });
  

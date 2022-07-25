const Intern = require('../lib/Intern');

describe('Intern', () => {
    describe('Initialisation', () => {
        // Positive tests
        it("should create a new object with a 'school' property set to the 'school' argument provided when called with the 'new' keyword.", () => {
            // Arrange
            const name = "Dua Lipa";
            const id = 1;
            const email = "dualipa@gmail.com";
            const school = "Parliament Hill School";

            // Act
            const obj = new Intern(name, id, email, school);

            // Assert
            expect(obj.school).toEqual(school);
        });

        // Exception tests
        it("should throw an error if 'school' is not a string", () => {
            // Arrange
            const name = "Dua Lipa";
            const id = 1;
            const email = "dualipa@gmail.com";
            const school = 1;

            // Act
            const cb = () => new Intern(name, id, email, school);
            const err = new Error("Expected parameter 'school' to be a non-empty string.");
      
            // Assert
            expect(cb).toThrowError(err);
        });
    });

    describe('getSchool', () => {
        it("should return the school of a new 'Intern' object.", () => {
            // Arrange
            const name = "Dua Lipa";
            const id = 1;
            const email = "dualipa@gmail.com";
            const school = "Parliament Hill School";

            // Act
            const result = new Intern(name, id, email, school).getSchool(school);

            // Assert
            expect(result).toEqual(school);
        });
    });

    describe('getRole', () => {
        it("should return 'Intern' as the role of a new 'Intern' object.", () => {
            // Arrange
            const name = "Dua Lipa";
            const id = 1;
            const email = "dualipa@gmail.com";
            const school = "Parliament Hill School";
            const role = "Intern";

            // Act
            const result = new Intern(name, id, email, school).getRole(role);

            // Assert
            expect(result).toEqual(role);
        });
    });
});
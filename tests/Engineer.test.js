const Engineer = require('../lib/Engineer');

describe('Engineer', () => {
    describe('Initialisation', () => {
        // Positive tests
        it("should create a new object with a 'github' property set to the 'github' argument provided when called with the 'new' keyword.", () => {
            // Arrange
            const name = "Dua Lipa";
            const id = 1;
            const email = "dualipa@gmail.com";
            const github = "dualipa";

            // Act
            const obj = new Engineer(name, id, email, github);

            // Assert
            expect(obj.github).toEqual(github);
        });

        // Exception tests
        it("should throw an error if 'github' is not a string", () => {
            // Arrange
            const name = "Dua Lipa";
            const id = 1;
            const email = "dualipa@gmail.com";
            const github = 1;

            // Act
            const cb = () => new Engineer(name, id, email, github);
            const err = new Error("Expected parameter 'github' to be a non-empty string.");
      
            // Assert
            expect(cb).toThrowError(err);
        });
    });

    describe('getGithub', () => {
        it("should return the github username of a new 'Engineer' object.", () => {
            // Arrange
            const name = "Dua Lipa";
            const id = 1;
            const email = "dualipa@gmail.com";
            const github = "dualipa";

            // Act
            const result = new Engineer(name, id, email, github).getGithub(github);

            // Assert
            expect(result).toEqual(github);
        });
    });

    describe('getRole', () => {
        it("should return 'Engineer' as the role of a new 'Engineer' object.", () => {
            // Arrange
            const name = "Dua Lipa";
            const id = 1;
            const email = "dualipa@gmail.com";
            const github = "dualipa";
            const role = "Engineer";

            // Act
            const result = new Engineer(name, id, email, github).getRole(role);

            // Assert
            expect(result).toEqual(role);
        });
    });
});
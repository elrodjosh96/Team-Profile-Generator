const Intern = require('../lib/intern');

describe('Check if Intern has name, id , email, school', () => {
    it('Should be an Intern', () => {
        const intern = new Intern('Han', '1', 'hansolo@gmail.com', 'UGA');
        expect(intern.name).toBe('Han');
        expect(intern.id).toBe('1');
        expect(intern.email).toBe('hansolo@gmail.com');
        expect(intern.getRole()).toBe('Intern');
        expect(intern.school).toBe('UGA');
    });
})
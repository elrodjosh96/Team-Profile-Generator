const Manager = require('../lib/manager');

describe('Check if Manager has name, id , email, office number', () => {
    it('Should be an Manager', () => {
        const manager = new Manager('Han', '1', 'hansolo@gmail.com', '753');
        expect(manager.name).toBe('Han');
        expect(manager.id).toBe('1');
        expect(manager.email).toBe('hansolo@gmail.com');
        expect(manager.getRole()).toBe('Manager');
        expect(manager.officeNumber).toBe('753');
    });
})
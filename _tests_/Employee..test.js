const Employee = reqcuire('../lib/Employee');

describe('Check if Employee has name, id , email', () => {
    it('Should be an Employee', () => {
        const employee = new Employee('Han', '1', 'hansolo@gmail.com');
        expect(employee.name).toBe('Han');
        expect(employee.id).toBe('1');
        expect(employee.email).toBe('hansolo@gmail.com');
        expect(employee.getRole()).toBe('Employee');
    });
})
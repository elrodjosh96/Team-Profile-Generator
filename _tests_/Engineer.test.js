const Engineer = reqcuire('../lib/Engineer');

describe('Check if Engineer has name, id , email, github profile', () => {
    it('Should be an Engineer', () => {
        const engineer = new Engineer('Han', '1', 'hansolo@gmail.com');
        expect(engineer.name).toBe('Han');
        expect(engineer.id).toBe('1');
        expect(engineer.email).toBe('hansolo@gmail.com');
        expect(engineer.getRole()).toBe('Engineer');
        expect(engineer.github).toBe('test');
    });
})
import Generic from "./Generic";

describe('Fizz', () => {
    const generic = new Generic();

    it('has not value', () => {
        expect(generic.value).toBe(undefined);
    });

    it('checks return true when 3', () => {
        expect(generic.check(5)).toBe(true);
    });

    it('checks return true when 5', () => {
        expect(generic.check(3)).toBe(true);
    });

    it('checks return true when 15', () => {
        expect(generic.check(6)).toBe(true);
    });
});
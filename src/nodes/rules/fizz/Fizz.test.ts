import Fizz from "./Fizz";

describe('Fizz', () => {
    const fizz = new Fizz();

    it('has value', () => {
        expect(fizz.value).toBe("FIZZ");
    });

    it('checks return false when 5', () => {
        expect(fizz.check(5)).toBe(false);
    });

    it('checks return true when 3', () => {
        expect(fizz.check(3)).toBe(true);
    });

    it('checks return true when 6', () => {
        expect(fizz.check(6)).toBe(true);
    });
});
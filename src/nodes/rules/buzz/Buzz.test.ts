import Buzz from "./Buzz";

describe('Buzz', () => {
    const buzz = new Buzz();

    it('has value', () => {
        expect(buzz.value).toBe("BUZZ");
    });

    it('checks return false when 3', () => {
        expect(buzz.check(3)).toBe(false);
    });

    it('checks return true when 5', () => {
        expect(buzz.check(5)).toBe(true);
    });

    it('checks return true when 10', () => {
        expect(buzz.check(5)).toBe(true);
    });
});
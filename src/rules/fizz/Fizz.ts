import Rule from '../Rule';

export default class Fizz implements Rule {
    private static FIZZ_MULTIPLIER = 3;
    value: string = "FIZZ"

    check(value: number): boolean {
        return (value % Fizz.FIZZ_MULTIPLIER === 0)
    }
}
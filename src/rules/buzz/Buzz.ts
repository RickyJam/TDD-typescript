import Rule from '../Rule';

class Buzz implements Rule {
    private static BUZZ_MULTIPLIER = 5;
    value: string = "BUZZ"

    check(value: number): boolean {
        return (value % Buzz.BUZZ_MULTIPLIER === 0)
    }
}


export default Buzz;
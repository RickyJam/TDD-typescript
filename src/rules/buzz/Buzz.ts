import Rule, { RuleResult } from '../Rule';

class Buzz extends Rule {

    private static BUZZ_MULTIPLIER = 5;
    value: string = "BUZZ"

    check(value: number): boolean {
        return (value % Buzz.BUZZ_MULTIPLIER === 0)
    }

    handle(currentValue: number): RuleResult {
        return {
            value: this.value,
            isValid: this.check(currentValue)
        }
    }
}



export default Buzz;
import Rule, { RuleResult } from '../Rule';

export default class Fizz extends Rule {
    private static FIZZ_MULTIPLIER = 3;
    value: string = "FIZZ"

    check(currentValue: number): boolean {
        return (currentValue % Fizz.FIZZ_MULTIPLIER === 0)
    }
    
    handle(currentValue: number): RuleResult {
        return {
            value: this.value,
            isValid: this.check(currentValue)
        }
    }
}
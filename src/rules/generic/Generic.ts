import Rule, { RuleResult } from '../Rule';

export default class Generic extends Rule {
    value: string = undefined

    check(_: number): boolean {
        return true;
    }
 
    handle(currentValue: number): RuleResult {
        return {
            value: currentValue.toString(),
            isValid: this.check(currentValue)
        }
    }
}
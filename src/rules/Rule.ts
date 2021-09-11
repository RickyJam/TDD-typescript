type RuleResult = {
    value: string,
    isValid: boolean
}

export default abstract class Rule {
    abstract value: string

    abstract check(currentValue: number): boolean;

    abstract handle(currentValue: number): RuleResult
}

export { RuleResult };
import Rule from '../rules/Rule';

class Node {
    private rule: Rule
    private nextNode: Node

    constructor(nextNode: Node = undefined, rule: Rule) {
        this.rule = rule;
        this.nextNode = nextNode;
    }

    private evaluateRule(currentValue: number): string {
        const {isValid, value} = this.rule.handle(currentValue);
        if(isValid){
            return value;
        }
        return this.nextNode.apply(currentValue);
    }

    apply(value: number): string {
        return this.evaluateRule(value)
    }
}

export default Node;
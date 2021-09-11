import Rule from '../rules/Rule';

class Node {
    private rule: Rule
    private nextNode: Node

    constructor(nextNode: Node = undefined, rule: Rule) {
        this.rule = rule;
        this.nextNode = nextNode;
    }

    private _evaluateRule(value: number): string {
        const result = this.rule.handle(value);
        if(result.isValid){
            return result.value;
        }
        return this.nextNode.apply(value);
    }
        /*
        if(this.hasNext()){
            if(this.rule.check(value)){
                return this.rule.value;
            }
            return this.nextNode.apply(value);
        }
        
        return value.toString();
    }*/

    apply(value: number): string {
        return this._evaluateRule(value)
    }

    // private hasNext(): boolean {return this.nextNode !== undefined};

}

export default Node;
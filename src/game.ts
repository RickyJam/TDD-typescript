import {Generic, Fizz, Buzz} from './rules/RuleLibrary';
import Node from './node/Node';

class Game {

    says(value: number): string {
        const fizz = new Fizz();
        const buzz = new Buzz();
        const generic = new Generic();
        const thirdNode = new Node(undefined, generic);
        const secondNode = new Node(thirdNode, fizz);
        const firstNode = new Node(secondNode, buzz);
        

        return firstNode.apply(value);
    }
}

export default Game;

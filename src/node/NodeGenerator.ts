import { Buzz, Fizz, Generic } from '../rules/RuleLibrary';
import Node from './Node';

const FizzNode = (nextNode: Node = undefined) => new Node(nextNode, new Fizz());
const BuzzNode = (nextNode: Node = undefined) => new Node(nextNode, new Buzz());
const GenericNode = (nextNode: Node = undefined) => new Node(nextNode, new Generic());

class NodeGenerator {

    static generateStandardNodes(): Node {
        return this.chainer([
            GenericNode(),
            FizzNode(),
            BuzzNode()
        ])
    }

    private static chainer(nodes: Array<Node>): Node {
        let arrayLen = nodes.length;
        if(arrayLen <= 1)
            return nodes[0];
        
        nodes[arrayLen - 1].chain(nodes[arrayLen - 2]);

        return this.chainer(nodes.slice(-1));
    }
}

export default NodeGenerator;
export { GenericNode, FizzNode, BuzzNode };
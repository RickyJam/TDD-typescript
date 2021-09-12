import { Buzz, Fizz, Generic } from '../rules/RuleLibrary';
import Node from './Node';

const FizzNode = (nextNode: Node = undefined) => new Node(nextNode, new Fizz());
const BuzzNode = (nextNode: Node = undefined) => new Node(nextNode, new Buzz());
const GenericNode = (nextNode: Node = undefined) => new Node(nextNode, new Generic());

class NodeGenerator {

    static generateStandardNodes(): Node {
        return 
    }


}

export default NodeGenerator;
export { GenericNode, FizzNode, BuzzNode };
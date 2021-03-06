import NodeGenerator, {GenericNode,BuzzNode,FizzNode} from './NodeGenerator';
import Node from '../node/Node';
import { Generic, Fizz, Buzz } from '../rules/RuleLibrary';

describe('NodeGenerator', () => {
    
    it('generateStandardNodes return a chain of three nodes', () => {
        let node: Node = NodeGenerator.generateStandardNodes();
        // come lo testo?
    });


    it('GenericNode return a node with GenericRule', () => {
        let expectedNode = new Node(undefined, new Generic())
        let node: Node = GenericNode(undefined);
        expect(node).toStrictEqual(expectedNode);
    });

    it('GenericNode return a node with GenericRule',() => {
        let expectedNode = new Node(undefined, new Fizz())
        let node: Node = FizzNode(undefined);
        expect(node).toStrictEqual(expectedNode);
    });

    
    it('GenericNode return a node with GenericRule',() => {
        let expectedNode = new Node(undefined, new Buzz())
        let node: Node = BuzzNode(undefined);
        expect(node).toStrictEqual(expectedNode);
    });
});
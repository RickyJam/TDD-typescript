import Game from "./game";
import {Generic, Fizz, Buzz} from './rules/RuleLibrary';
import Node from './node/Node';

describe('Game', () => {
    const thirdNode = new Node(undefined, new Generic());
    const secondNode = new Node(thirdNode, new Fizz());
    const firstNode = new Node(secondNode, new Buzz());
    const game = new Game(firstNode);

    it('says value when it does not match any specific rule', ()=> {
        expect(game.says(94)).toBe('94');
    });

    it('says value when it does not match any specific rule', ()=> {
        expect(game.says(94)).toBe('94');
    });

});
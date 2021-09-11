import Game from "./game";
import {Generic, Fizz, Buzz} from './rules/RuleLibrary';
import Node from './node/Node';

describe('Game', () => {
    const thirdNode = new Node(undefined, new Generic());
    const secondNode = new Node(thirdNode, new Fizz());
    const firstNode = new Node(secondNode, new Buzz());
    const game = new Game(firstNode);

    it('says value when it match only generic rule', ()=> {
        expect(game.says(94)).toBe('94');
    });

    it('says FIZZ when it match fizz rule', ()=> {
        expect(game.says(66)).toBe('FIZZ');
    });

    
    it('says BUZZ when it match buzz rule', ()=> {
        expect(game.says(55)).toBe('BUZZ');
    });
});
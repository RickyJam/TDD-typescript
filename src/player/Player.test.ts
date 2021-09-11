import Player from "./Player";
import {Generic, Fizz, Buzz} from '../rules/RuleLibrary';
import Node from '../node/Node';

describe('Player', () => {
    const thirdNode = new Node(undefined, new Generic());
    const secondNode = new Node(thirdNode, new Fizz());
    const firstNode = new Node(secondNode, new Buzz());
    const player = new Player(firstNode);

    it('says value when it match only generic rule', ()=> {
        expect(player.says(94)).toBe('94');
    });

    it('says FIZZ when it match fizz rule', ()=> {
        expect(player.says(66)).toBe('FIZZ');
    });

    
    it('says BUZZ when it match buzz rule', ()=> {
        expect(player.says(55)).toBe('BUZZ');
    });
});
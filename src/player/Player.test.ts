import Player from "./Player";
import {Generic, Fizz, Buzz} from '../rules/RuleLibrary';
import Node from '../node/Node';

describe('Player', () => {
    const thirdNode = new Node(undefined, new Generic());
    const secondNode = new Node(thirdNode, new Fizz());
    const firstNode = new Node(secondNode, new Buzz());

    it('says value when it match only generic rule', ()=> {
        expect(Player.says(94, firstNode)).toBe('94');
    });

    it('says FIZZ when it match fizz rule', ()=> {
        expect(Player.says(66, firstNode)).toBe('FIZZ');
    });

    
    it('says BUZZ when it match buzz rule', ()=> {
        expect(Player.says(55, firstNode)).toBe('BUZZ');
    });
});
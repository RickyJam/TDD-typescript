import Player from './player/Player';
import {Generic} from './rules/RuleLibrary';
import Node from './node/Node';
import Game from './Game';

jest.mock('./player/Player');

describe('Game', () => {
    const node = new Node(undefined, new Generic());
    const player = new Player(node);
    const game = new Game(player);

    it('ask player to say a number', ()=> {
        game.play(1);
        expect(player.says).toBeCalledWith(1);
    });   
});
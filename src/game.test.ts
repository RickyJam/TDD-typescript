import Game from "./game";

describe('Game', () => {
    const game = new Game();

    it('says value when it does not match any specific rule', ()=> {
        expect(game.says(94)).toBe('94');
    });

});
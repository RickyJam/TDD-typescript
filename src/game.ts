import Player from './player/Player';

class Game {

    private player: Player

    constructor(player: Player){
        this.player = player
    }
s
    play(counter: number): void {
        for (let index = 1; index <= counter; index++) {
            this.player.says(index)
        }
    }
}

export default Game;

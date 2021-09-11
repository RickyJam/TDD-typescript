import Node from './node/Node';
import Player from './player/Player';

class Game {

    private player: Player

    constructor(entryNode: Node){
        this.player = new Player(entryNode);
    }

    play(counter: number): void {
        for (let index = 0; index < counter; index++) {
            this.player.says(index)
        }
    }
}

export default Game;

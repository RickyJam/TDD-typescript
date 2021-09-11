import Node from './node/Node';
import Player from './player/Player';

class Game {

    private entryNode: Node

    constructor(entryNode: Node){
        this.entryNode = entryNode
    }

    play(counter): void {
        for (let index = 0; index < counter; index++) {
            Player.says(index, this.entryNode)
        }
    }
}

export default Game;

import Node from './node/Node';

class Game {

    entryNode: Node

    constructor(entryNode: Node){
        this.entryNode = entryNode
    }

    says(value: number): string {
        return this.entryNode.apply(value);
    }
}

export default Game;

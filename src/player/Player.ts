import Node from '../node/Node';

class Player {

    static says(value: number, entryNode: Node): string {
        return entryNode.apply(value);
    }
}

export default Player;

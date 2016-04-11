class PlayerHand {
    constructor(size) {
        this.size = size;
        this.pieces = [];
    }

    handSize() {
        return this.pieces.length;
    }

    getPieces() {
       return this.pieces;
    }

    givePiece(piece) {
        if( this.pieces.length === this.size ) {
            return false;
        }

        this.pieces.push(piece);
        return true;
    }

    takePiece(piece) {
        for(let i = 0; i < this.pieces.length; i++ ) {
            if( this.pieces[i].id === piece.id ) {
                this.pieces.splice(i, 1);
                return true;
            }
        }

        return false;
    }
}

export default PlayerHand;
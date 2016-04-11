import PlayField from './play-field';
import PlayerHand from './player-hand';
import Position from './position';
import Cell from './cell';

const DEFAULT_GRID_SIZE = 10;
const DEFAULT_HAND_SIZE = 3;

// TODO: Use these
const MIN_GRID_SIZE = 5;
const MIN_HAND_SIZE = 1;

class Game {
    constructor(gridSize = DEFAULT_GRID_SIZE, handSize = DEFAULT_HAND_SIZE) {
        Object.defineProperty(this, 'playField', { value: new PlayField(gridSize) });
        Object.defineProperty(this, 'playerHand', { value: new PlayerHand(handSize) });

        this.gameOver = false;
    }

    // Returns a PlayerHand
    getPlayerHand() {
        return this.playerHand;
    }

    // Return a PlayField
    getPlayField() {
        return this.playField;
    }

    // Places a piece on the play field
    placePiece(piece, position) {
        if( !this.canPlacePiece(piece, position) ) {
            return false;
        }

        // TODO: Make sure piece is in player's hand
        let placeRow = position.row;
        let placeCol = position.col;

        for(let row = 0; row < piece.height; row++ ) {
            for(let col = 0; col < piece.width; col++ ) {
                if( piece.isEmptyAt(new Position(row, col)) ) {
                    continue;
                }

                let cellPosition = new Position(placeRow + row, placeCol + col);
                let cell = new Cell(false);

                this.playField.setCell(cellPosition, cell);
            }
        }


        // TODO: Remove piece from player hand

        return true;
    }

    // Returns true if the specified piece can be played at the specified position
    canPlacePiece(piece, position) {
        let placeRow = position.row;
        let placeCol = position.col;

        if( placeRow < 0 || placeRow >= this.playField.size ) {
            throw new Error('Invalid row position for piece placement on play field');
        }

        if( placeCol < 0 || placeCol >= this.playField.size ) {
            throw new Error('Invalid col position for piece placement on play field');
        }

        if( placeRow + piece.height > this.playField.size ) {
            throw new Error('Invalid row position. Piece extends beyond play field');
        }

        if( placeCol + piece.width > this.playField.size ) {
            throw new Error('Invalid col position. Piece extends beyond play field');
        }

        for(let row = 0; row < piece.height; row++ ) {
            for(let col = 0; col < piece.width; col++ ) {
                if( piece.isEmptyAt(new Position(row, col)) ) {
                    continue;
                }

                if( !this.playField.isEmptyAt(new Position(placeRow + row, placeCol + col)) ) {
                    return false;
                }
            }
        }

        return true;
    }

    // Return true if game is over
    isGameOver() {
        return this.gameOver;
    }

    // Returns the players current score
    getPlayerScore() {

    }
}

export default Game;
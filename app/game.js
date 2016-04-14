import PlayField from './play-field';
import PlayerHand from './player-hand';
import Position from './position';
import Cell from './cell';
import { getRandomPiece } from './pieces';

const DEFAULT_GRID_SIZE = 10;
const DEFAULT_HAND_SIZE = 3;

// TODO: Use these
const MIN_GRID_SIZE = 5;
const MIN_HAND_SIZE = 1;

class Game {
    constructor(gridSize = DEFAULT_GRID_SIZE, handSize = DEFAULT_HAND_SIZE) {
        Object.defineProperty(this, 'playField', { value: new PlayField(gridSize) });
        Object.defineProperty(this, 'playerHand', { value: new PlayerHand(handSize) });

        this.maxHandSize = handSize;
        this.gameOver = false;

        this.reloadPlayerHand();
    }

    // Returns a PlayerHand
    getPlayerHand() {
        return this.playerHand;
    }

    // Return a PlayField
    getPlayField() {
        return this.playField;
    }

    reloadPlayerHand() {
        while( this.playerHand.getHandSize() < this.maxHandSize ) {
            let piece = getRandomPiece();
            this.playerHand.givePiece(piece);
        }
    }

    // Places a piece on the play field
    placePiece(piece, position) {
        console.log('Placing piece: ', piece);
        
        if( !this.canPlacePiece(piece, position) ) {
            console.log('Piece cannot be placed');
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
                let cell = new Cell(false, piece.color);

                this.playField.setCell(cellPosition, cell);
            }
        }

        // TODO: Update score
        this.scorePlayField();

        // Remove piece from player hand
        this.playerHand.takePiece(piece);

        if( !this.playerHand.pieces.length ) {
            this.reloadPlayerHand();
        }

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

    // Clears complete rows and columns, and scores it
    scorePlayField() {
        let rows = [];
        let cols = [];

        for(let i = 0; i < this.playField.size; i++ ) {
            rows[i] = true;
            cols[i] = true;
        }

        for(let row = 0; row < this.playField.size; row++ ) {
            for(let col = 0; col < this.playField.size; col++ ) {
                let position = new Position(row, col);
                if( this.playField.isEmptyAt(position) ) {
                    console.log(`Cannot clear row ${row} or column ${col}`);
                    rows[row] = false;
                    cols[col] = false;
                }
            }
        }

        let cleared = 0;
        for(let i = 0; i < this.playField.size; i++ ) {
            if( rows[i] ) {
                console.log(`Clearing row ${i}`);
                for(let col = 0; col < this.playField.size; col++ ) {
                    this.playField.grid[i][col].isEmpty = true;
                    this.playField.grid[i][col].color = null;
                }
                cleared++;
            }

            if( cols[i] ) {
                console.log(`Clearing column $[i}`);
                for(let row = 0; row < this.playField.size; row++ ) {
                    this.playField.grid[row][i].isEmpty = true;
                    this.playField.grid[row][i].color = null;
                }
                cleared++;
            }
        }

        // TODO: Update score
        console.log('Cleared: ', cleared);
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
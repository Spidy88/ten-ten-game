export const FILL_SYMBOL = 'x';

class Piece {
    constructor(width, height, color) {
        if( width < 1 ) {
            throw new Error('Piece must have a width greater than 0');
        }
        
        if( height < 1 ) {
            throw new Error('Piece must have a height greater than 0');
        }
        
        this.width = width;
        this.height = height;
        this.color = color;
        this.shape = [];

        for(let row = 0; row < this.height; row++ ) {
            this.shape.push([]);

            for(let col = 0; col < this.width; col++ ) {
                this.shape[row].push(' ');
            }
        }
    }

    isEmptyAt(position) {
        return this.shape[position.row][position.col] !== FILL_SYMBOL;
    }

    toString() {
        let stringRep = '';
        for(let row = 0; row < this.height; row++ ) {
            for(let col = 0; col < this.width; col++ ) {
                stringRep += (this.shape[row][col] === FILL_SYMBOL ? FILL_SYMBOL : ' ');
            }

            stringRep += '\n';
        }

        return stringRep;
    }
}

export default Piece;

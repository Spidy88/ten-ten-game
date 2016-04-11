import Piece, { FILL_SYMBOL } from './piece';

export class Dot extends Piece {
    constructor(color) {
        super(1, 1, color);
        
        this.shape[0][0] = FILL_SYMBOL;
    }
}

export class SmallCorner extends Piece {
    constructor(color) {
        super(2, 2, color);
        
        //  [x][ ]
        //  [x][x]
        
        this.shape[0][0] = FILL_SYMBOL;
        this.shape[1][0] = FILL_SYMBOL;
        this.shape[1][1] = FILL_SYMBOL;
    }
}

export class LargeCorner extends Piece {
    constructor(color) {
        super(3, 3, color);
        
        // [x][ ][ ]
        // [x][ ][ ]
        // [x][x][x]
        
        this.shape[0][0] = FILL_SYMBOL;
        this.shape[1][0] = FILL_SYMBOL;
        this.shape[2][0] = FILL_SYMBOL;
        this.shape[2][1] = FILL_SYMBOL;
        this.shape[2][2] = FILL_SYMBOL;
    }
}

export class SmallLine extends Piece {
    constructor(color) {
        super(1, 2, color);

        // [x]
        // [x]

        this.shape[0][0] = FILL_SYMBOL;
        this.shape[1][0] = FILL_SYMBOL;
    }
}

export class MediumLine extends Piece {
    constructor(color) {
        super(1, 3, color);

        // [x]
        // [x]
        // [x]

        this.shape[0][0] = FILL_SYMBOL;
        this.shape[1][0] = FILL_SYMBOL;
        this.shape[2][0] = FILL_SYMBOL;
    }
}

export class LargeLine extends Piece {
    constructor(color) {
        super( 1, 4, color );

        // [x]
        // [x]
        // [x]
        // [x]

        this.shape[0][0] = FILL_SYMBOL;
        this.shape[1][0] = FILL_SYMBOL;
        this.shape[2][0] = FILL_SYMBOL;
        this.shape[3][0] = FILL_SYMBOL;
    }
}

export class GiantLine extends Piece {
    constructor(color) {
        super(1, 5, color);

        // [x]
        // [x]
        // [x]
        // [x]
        // [x]

        this.shape[0][0] = FILL_SYMBOL;
        this.shape[1][0] = FILL_SYMBOL;
        this.shape[2][0] = FILL_SYMBOL;
        this.shape[3][0] = FILL_SYMBOL;
        this.shape[4][0] = FILL_SYMBOL;
    }
}

export class SmallBox extends Piece {
    constructor(color) {
        super(2, 2, color);

        // [x][x]
        // [x][x]

        this.shape[0][0] = FILL_SYMBOL;
        this.shape[0][1] = FILL_SYMBOL;
        this.shape[1][0] = FILL_SYMBOL;
        this.shape[1][1] = FILL_SYMBOL;
    }
}

export class LargeBox extends Piece {
    constructor(color) {
        super(3, 3, color);

        // [x][x][x]
        // [x][x][x]
        // [x][x][x]

        this.shape[0][0] = FILL_SYMBOL;
        this.shape[0][1] = FILL_SYMBOL;
        this.shape[0][2] = FILL_SYMBOL;
        this.shape[1][0] = FILL_SYMBOL;
        this.shape[1][1] = FILL_SYMBOL;
        this.shape[1][2] = FILL_SYMBOL;
        this.shape[2][0] = FILL_SYMBOL;
        this.shape[2][1] = FILL_SYMBOL;
        this.shape[2][2] = FILL_SYMBOL;
    }
}

export class RightL extends Piece {
    constructor(color) {
        super(2, 3, color);

        // [x][ ]
        // [x][ ]
        // [x][x]

        this.shape[0][0] = FILL_SYMBOL;
        this.shape[1][0] = FILL_SYMBOL;
        this.shape[2][0] = FILL_SYMBOL;
        this.shape[2][1] = FILL_SYMBOL;
    }
}

export class LeftL extends Piece {
    constructor(color) {
        super(2, 3, color);

        // [ ][x]
        // [ ][x]
        // [x][x]

        this.shape[0][1] = FILL_SYMBOL;
        this.shape[1][1] = FILL_SYMBOL;
        this.shape[2][0] = FILL_SYMBOL;
        this.shape[2][1] = FILL_SYMBOL;
    }
}
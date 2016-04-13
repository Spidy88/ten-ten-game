import React, { Component, PropTypes } from 'react';
import Piece from './piece';
import Cell from './cell';
import CellView from './cell-view';

class PieceView extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        let piece = this.props.piece;
        let view = [];

        for( let row = 0; row < piece.height; row++ ) {
            let cells = [];

            for( let col = 0; col < piece.width; col++ ) {
                // TODO: Refactor once piece uses Cell
                let cell = new Cell(piece.isEmptyAt({ row, col }), piece.color);
                cells.push(
                    <CellView cell={ cell }></CellView>
                )
            }

            view.push(<div>{ cells }</div>);
        }

        return (
            <div className="player-piece">
                { view }
            </div>
        );
    }
}
PieceView.propTypes = {
    piece: PropTypes.instanceOf(Piece).isRequired
};

export default PieceView;
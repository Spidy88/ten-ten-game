import React, { Component, PropTypes } from 'react';
import { Piece, Cell } from 'ten-ten';
import CellView from './cell-view';

class PieceView extends Component {
    constructor(props) {
        super(props);
    }

    onClick() {
        this.props.onSelect(this.props.piece);
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
                    <CellView key={ `cell-${row}.${col}` } cell={ cell }></CellView>
                )
            }

            view.push(<div key={ `row-${row}` }>{ cells }</div>);
        }

        return (
            <div className={ 'player-piece ' + this.props.className }
                 onClick={ this.onClick.bind(this) }>
                { view }
            </div>
        );
    }
}
PieceView.propTypes = {
    piece: PropTypes.instanceOf(Piece).isRequired,
    onSelect: PropTypes.func
};
PieceView.defaultProps = {
    className: '',
    onSelect: function() {}
}

export default PieceView;
import React, { Component, PropTypes } from 'react';
import CellView from './cell-view';
import { PlayField, Position } from 'ten-ten';

class PlayFieldView extends Component {
    constructor(props) {
        super(props);
    }

    selectCell(cell, position) {
        this.props.onCellSelect(cell, position);
    }

    render() {
        let playField = this.props.playField;
        let size = playField.size;
        let field = [];

        for( let row = 0; row < size; row++ ) {
            let cells = [];

            for( let col = 0; col < size; col++ ) {
                let position = new Position(row, col);
                let cell = playField.getCellAt(position);

                cells.push(
                    <div key={ `cell-${row}.${col}` } 
                         className="cell-container df flex-col"
                         onClick={ this.selectCell.bind(this, cell, position) }>
                        <CellView cell={ cell }></CellView>
                    </div>
                );
            }

            field.push(
                <div key={ `row-${row}` } className="df flex-row center-children">{ cells }</div>
            );
        }

        return (
            <section className="playfield pal">
                { field }
            </section>
        );
    }
}
PlayFieldView.propTypes = {
    playField: PropTypes.instanceOf(PlayField).isRequired,
    onCellSelect: PropTypes.func
};
PlayFieldView.defaultProps = {
    onCellSelect: function() {}
};

export default PlayFieldView;
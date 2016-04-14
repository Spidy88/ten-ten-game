import React, { Component, PropTypes } from 'react';
import CellView from './cell-view';
import PlayField from './play-field';
import Position from './position';

class PlayFieldView extends Component {
    constructor(props) {
        super(props);
    }

    selectCell(cell, position) {
        console.log('[PlayFieldView] Cell selected');
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
                         className="dib"
                         onClick={ this.selectCell.bind(this, cell, position) }>
                        <CellView cell={ cell }></CellView>
                    </div>
                );
            }

            field.push(
                <div key={ `row-${row}` } className="row">{ cells }</div>
            );
        }

        return (
            <section>
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
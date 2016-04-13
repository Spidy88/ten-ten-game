import React, { Component, PropTypes } from 'react';
import CellView from './cell-view';
import PlayField from './play-field';
import Position from './position';

class PlayFieldView extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        let playField = this.props.playField;
        let size = playField.size;
        let field = [];

        // TODO: REMOVE (probably)
        for( let i = 0; i < size; i++ ) {
            let cells = [];

            for( let j = 0; j < size; j++ ) {
                let position = new Position(i, j);

                cells.push(
                    <CellView key={ `cell-${i}.${j}` } cell={ playField.getCellAt(position) }></CellView>
                );
            }

            field.push(
                <div key={ `row-${i}` } className="row">{ cells }</div>
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
    playField: PropTypes.instanceOf(PlayField).isRequired
};

export default PlayFieldView;
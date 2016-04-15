import React, { Component, PropTypes } from 'react';
import { Cell } from 'ten-ten';

class CellView extends Component {
    constructor(props) {
        super(props);
    }

    getColorClass(color) {
        if( !color ) {
            return '';
        }

        return `block_${color}`;
    }

    render() {
        let classes = ['cell'];
        let cell = this.props.cell;
        
        if( !cell.isEmpty ) {
            classes.push( this.getColorClass( cell.color ) );
        }
        classes = classes.join(' ');

        return (
            <div className={ classes }>
            </div>
        );
    }
}
CellView.propTypes = {
    cell: PropTypes.instanceOf(Cell).isRequired
};

export default CellView;
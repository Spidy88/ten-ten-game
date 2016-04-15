import React, { Component, PropTypes } from 'react';
import { PlayerHand } from 'ten-ten';
import PieceView from './piece-view';

class PlayerHandView extends Component {
    constructor(props) {
        super(props);

        this.state = {
            selectedPiece: null
        };
    }

    selectPiece(piece) {
        this.setState({
            selectedPiece: piece
        });

        this.props.onPieceSelect(piece);
    }

    render() {
        let pieces = [];
        let playerHand = this.props.playerHand;

        for(let i = 0; i < playerHand.pieces.length; i++ ) {
            let onClick = this.selectPiece.bind(this);
            let piece = playerHand.pieces[i];
            let viewClasses = [];

            if( this.state.selectedPiece && this.state.selectedPiece.id === piece.id ) {
                viewClasses.push('selected');
            }
            viewClasses = viewClasses.join(' ');

            pieces.push(
                <PieceView key={ `piece-${i}` }
                           piece={ playerHand.pieces[i] }
                           className={ viewClasses }
                           onSelect={ onClick }>
                </PieceView>
            );
        }

        return (
            <div className="player-hand">
                { pieces }
            </div>
        );
    }
}
PlayerHandView.propTypes = {
    playerHand: PropTypes.instanceOf(PlayerHand).isRequired,
    onPieceSelect: PropTypes.func
};
PlayerHandView.defaultProps = {
    onPieceSelect: function() {}
};

export default PlayerHandView;
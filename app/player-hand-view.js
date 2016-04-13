import React, { Component, PropTypes } from 'react';
import PlayerHand from './player-hand';
import PieceView from './piece-view';

class PlayerHandView extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        let pieces = [];
        let playerHand = this.props.playerHand;

        for(let i = 0; i < playerHand.pieces.length; i++ ) {
            pieces.push(
                <PieceView key={ `piece-${i}` } piece={ playerHand.pieces[i] }></PieceView>
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
    playerHand: PropTypes.instanceOf(PlayerHand).isRequired
};

export default PlayerHandView;
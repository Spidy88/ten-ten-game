import React, { Component, PropTypes } from 'react';
import { Game } from 'ten-ten';
import PlayFieldView from './play-field-view';
import PlayerHandView from './player-hand-view';
import ScoreKeeperView from './score-keeper-view';

class GameView extends Component {
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
    }

    placePiece(cell, position) {
        let game = this.props.game;
        let selectedPiece = this.state.selectedPiece;

        // Make sure piece is selected
        if( !selectedPiece ) {
            alert('Please select a piece!');
            return;
        }

        // Place piece on game field
        if( !game.placePiece(selectedPiece, position) ) {
            return;
        }

        this.setState({
            selectedPiece: null
        });
    }

    render() {
        let game = this.props.game;
        return (
            <section className="game">
                <PlayFieldView 
                    playField={ game.playField }
                    onCellSelect={ this.placePiece.bind(this) }>
                </PlayFieldView>

                <div className="df center-children pal">
                    <PlayerHandView
                        playerHand={ game.playerHand }
                        onPieceSelect={ this.selectPiece.bind(this) }>
                    </PlayerHandView>

                    <ScoreKeeperView score={ game.scoreKeeper.score }>
                    </ScoreKeeperView>
                </div>
            </section>
        );
    }
}
GameView.propTypes = {
    game: PropTypes.instanceOf(Game).isRequired
};

export default GameView;
import React, { Component, PropTypes } from 'react';
import Game from './game';
import PlayFieldView from './play-field-view';
import PlayerHandView from './player-hand-view';
import ScoreView from './score-view';

class GameView extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        let game = this.props.game;
        return (
            <section>
                <PlayFieldView playField={ game.playField }></PlayFieldView>
                <PlayerHandView playerHand={ game.playerHand }></PlayerHandView>
                <ScoreView></ScoreView>
            </section>
        );
    }
}
GameView.propTypes = {
    game: PropTypes.instanceOf(Game).isRequired
};

export default GameView;
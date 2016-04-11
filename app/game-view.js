import React, { Component, PropTypes } from 'react';
import Game from './game';
import ScoreView from './score-view';

class GameView extends Component {
    render() {
        return (
            <section>
                <div>TenTen game instance of amazingness</div>
                <ScoreView></ScoreView>
            </section>
        );
    }
}
GameView.propTypes = {
    game: PropTypes.instanceOf(Game).isRequired
};

export default GameView;
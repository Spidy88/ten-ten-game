import React, { Component, PropTypes } from 'react';
import { Game } from 'ten-ten';
import GameView from './game-view';

// TODO: Look into logging options
class AppView extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isGameInProgress: false,
            gameInstance: null
        };
    }

    startGame() {
        let isGameInProgress = true;
        let gameInstance = new Game();

        // TODO: Remove
        window.game = gameInstance;

        this.setState({
            isGameInProgress,
            gameInstance
        });
    }

    render() {
        let view = <button onClick={ () => this.startGame() }>Start a New Game</button>;

        if( this.state.isGameInProgress ) {
            view = <GameView game={ this.state.gameInstance } ></GameView>;
        }

        return (
            <section>
                <h1>Ten Ten the App</h1>
                { view }
            </section>
        );
    }
}

export default AppView;
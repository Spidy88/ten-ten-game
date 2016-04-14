import React, { Component, PropTypes } from 'react';
import Game from './game';
import GameView from './game-view';

import {SmallCorner} from './pieces';

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
        let gameInstance = new Game(5);

        // let piece = new SmallCorner();
        // piece.rotate(2);
        // gameInstance.placePiece(new SmallCorner(), { row: 0, col: 0 });
        // gameInstance.placePiece(piece, { row: 2, col: 2 });
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
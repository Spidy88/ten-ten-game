import React, { Component, PropTypes } from 'react';
import { Game } from 'ten-ten';
import GameView from './game-view';

// TODO: Look into logging options
class AppView extends Component {
    constructor(props) {
        super( props );

        this.state = {};
    }

    componentWillMount() {
        this.startGame();
    }

    startGame() {
        let gameInstance = new Game();

        gameInstance.on('game-over', () => {
            this.forceUpdate();
        });

        // TODO: Remove
        window.game = gameInstance;

        this.setState({
            gameInstance
        });
    }

    render() {
        let game = this.state.gameInstance;
        let overlayStyle = [
            'game-overlay pos-abs abs-fill'
        ];

        if( game.isGameOver() ) {
            overlayStyle.push('active');
        }
        overlayStyle = overlayStyle.join(' ');

        let overlay = (
            <div className={ overlayStyle }>
                <div className="flex-col center-children fill">
                    <div className="message">Game Over</div>
                    <div className="score">{ game.getPlayerScore() }</div>
                    <button className="btn btn-default" onClick={ () => this.startGame() }>Start a New game</button>
                </div>
            </div>
        );

        return (
            <section className="pos-rel text-center">
                <h1>Ten Ten the App</h1>
                <GameView game={ game } ></GameView>
                { overlay }
            </section>
        );
    }
}

export default AppView;
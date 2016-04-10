import React, { Component, PropTypes } from 'react';
import TenTenGame from './ten-ten-game';
import TenTenGameView from './ten-ten-game-view';

class TenTenAppView extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isGameInProgress: false,
            gameInstance: null
        };
    }

    startGame() {
        let isGameInProgress = true;
        let gameInstance = new TenTenGame();

        this.setState({
            isGameInProgress,
            gameInstance
        });
    }

    render() {
        let view = <button onClick={ () => this.startGame() }>Start a New Game</button>;

        if( this.state.isGameInProgress ) {
            view = <TenTenGameView game={ this.state.gameInstance } ></TenTenGameView>;
        }

        return (
            <section>
                <h1>Ten Ten the App</h1>
                { view }
            </section>
        );
    }
}

export default TenTenAppView;
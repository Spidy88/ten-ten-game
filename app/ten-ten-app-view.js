import React, { Component, PropTypes } from 'react'
const TenTenGame = require('./ten-ten-game');
const TenTenGameView = require('./ten-ten-game-view');

const TenTenAppView = React.createClass({
    getInitialState: function() {
        return {
            isGameInProgress: false,
            gameInstance: new TenTenGame()
        };
    },

    startGame: function() {
        let isGameInProgress = true;
        let gameInstance = new TenTenGame();

        this.setState({
            isGameInProgress,
            gameInstance
        });
    },

    render: function() {
        let view = <button onClick={ this.startGame }>Start a New Game</button>;;

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
});

export default TenTenAppView;
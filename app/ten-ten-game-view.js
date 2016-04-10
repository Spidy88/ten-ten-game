import React, { Component, PropTypes } from 'react'
const TenTenGame = require('./ten-ten-game');

class TenTenGameView extends Component {
    // propTypes: {
    //     game: PropTypes.instanceOf(TenTenGame).isRequired
    // },

    render() {
        return (
            <div>TenTen game instance</div>
        );
    }
}

export default TenTenGameView;
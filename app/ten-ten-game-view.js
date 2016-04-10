import React, { Component, PropTypes } from 'react';
import TenTenGame from './ten-ten-game';
import TenTenScoreView from './ten-ten-score-view';

class TenTenGameView extends Component {
    // propTypes: {
    //     game: PropTypes.instanceOf(TenTenGame).isRequired
    // }

    render() {
        return (
            <section>
                <div>TenTen game instance of amazingness</div>
                <TenTenScoreView></TenTenScoreView>
            </section>
        );
    }
}

export default TenTenGameView;
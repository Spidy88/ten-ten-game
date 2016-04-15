import React, { Component, PropTypes } from 'react';

// TODO: Implement tip timer
class ScoreKeeperView extends Component {
    constructor(props) {
        super(props);

        this.state = {
            pointIncrease: 0,
            showScoreTip: false
        };
    }

    componentWillReceiveProps(nextProps) {
        this.setState({
            pointIncrease: nextProps.score - this.props.score
        });
    }

    shouldComponentUpdate(nextProps, nextState) {
        return this.props.score !== nextProps.score;
    }

    render() {
        var additionalScore;
        var scoreTip;

        if( this.state.pointIncrease ) {
            additionalScore = <div className="additional-score">+{ this.state.pointIncrease }</div>;
        }
        else if( this.state.showScoreTip ) {
            scoreTip = <div className="score-tip">Place blocks on the grid to score</div>;
        }

        return (
            <div className="score-board">
                { scoreTip }
                { additionalScore }
                <div className="total-score">{ this.props.score }</div>
            </div>
        );
    }
}
ScoreKeeperView.propTypes = {
    score: PropTypes.number.isRequired
};

export default ScoreKeeperView;
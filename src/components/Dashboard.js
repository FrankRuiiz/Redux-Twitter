import React, { Component } from 'react';
import { connect } from 'react-redux';

class Dashboard extends Component {
    render() {
        const { tweetIds } = this.props;
        return (
            <ul className="dashboard-list">
                {tweetIds.map((id) => (
                    <li key={id}>TWEET ID: {id}</li>
                ))}
            </ul>
        )
    }
}

function mapStateToProps({ tweets }) {
    console.log('tweets', tweets);
    const tweetIds = Object.keys(tweets).sort((a, b) => tweets[b].timestamp - tweets[a].timestamp);

    return {
        tweetIds
    }
}

export default connect(mapStateToProps)(Dashboard);
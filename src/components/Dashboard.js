import React, { Component } from 'react';
import { connect } from 'react-redux';

class Dashboard extends Component {
    render() {
        return (
            <div>
                <h1>Dashboard</h1>
            </div>
        )
    }
}

function mapStateToProps({ tweets }) {
    console.log('tweets', tweets);
    // const sortedTweets = tweets.sort((a, b) => {
    //   console.log('a', a);
    //   console.log('b', b);
    // });

    return {
        // sortedTweets
    }
}

export default connect(mapStateToProps)(Dashboard);
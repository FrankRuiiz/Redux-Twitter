const RECEIVE_TWEETS = 'RECEIVE_TWEETS';

export function receiveTweets(tweets) {
    return {
        type: RECIEVE_TWEETS,
        tweets
    }
}
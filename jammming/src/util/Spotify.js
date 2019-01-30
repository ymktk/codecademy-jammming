// const clientID = process.env.REACT_APP_CLIENT_ID;
// const clientSecret = process.env.REACT_APP_CLIENT_SECRET;

let users_access_token='';

const Spotify = {
  getAccessToken () {
    console.log('getAccessToken!');

    if (users_access_token) {
      return users_access_token;
    } else {
      return 'no_token';
    }
  },

  search (term) {
    console.log('search!');
    console.log(term);
    console.log(this.getAccessToken());
  }

};

export default Spotify;
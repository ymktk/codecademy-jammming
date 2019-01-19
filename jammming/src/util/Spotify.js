const clientID = process.env.REACT_APP_CLIENT_ID;
const clientSecret = process.env.REACT_APP_CLIENT_SECRET;
console.log(`clientID: ${clientID}`);
console.log(`clientSecret: ${clientSecret}`);

const Spotify = {
  search (term) {
    return (term + term);
  }

};

export default Spotify;
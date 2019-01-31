const clientID = process.env.REACT_APP_CLIENT_ID;
const redirectURI = 'http://localhost:3000/';
const searchUrl   = 'https://api.spotify.com/v1/search?type=track&q=';
const meUrl       = 'https://api.spotify.com/v1/me';
const usersUrl    = 'https://api.spotify.com/v1/users/';

let accessToken='';
let expiresIn='';

const Spotify = {
  getAccessToken () {

    if (accessToken) {
      return accessToken;

    } else {

      let foundAccessToken = window.location.href.match(/access_token=([^&]*)/);
      let foundExpiresIn   = window.location.href.match(/expires_in=([^&]*)/);

      if (foundAccessToken && foundExpiresIn) {

        accessToken = (foundAccessToken[0].split('='))[1];
        expiresIn   = (foundExpiresIn[0].split('='))[1];

        window.setTimeout(() => accessToken = '', expiresIn * 1000);
        window.history.pushState('Access Token', null, '/');

        return accessToken;

      // 3rd condtion
      } else {
        window.location = `https://accounts.spotify.com/authorize?client_id=${clientID}&response_type=token&scope=playlist-modify-public&redirect_uri=${redirectURI}`;
      }
    }
  },

  async search (term) {
    const userAaccessToken = this.getAccessToken();
    const endpoint = `${searchUrl}${term}`;

    try {
      const response = await fetch(endpoint, {
        method:'GET',
        headers:{
          'Authorization': 'Bearer ' + userAaccessToken
        }
      });

      if(response.ok){
        const jsonResponse = await response.json();
        return renderResponse(jsonResponse);
      }
      throw new Error('Request Failed');

    } catch (error) {
      console.log(error);
    }
  },

  async savePlaylist(playlistName, trackURIs) {

    // there are values saved to the method's two arguments. If not, return.

    const userAaccessToken = this.getAccessToken();

    // (1) GEt user's Spotify user ID
    let id = '';
    try {
      const response = await fetch(meUrl, {
        method:'GET',
        headers:{
          'Authorization': 'Bearer ' + userAaccessToken
        }
      });

      if(response.ok){
        const jsonResponse = await response.json();
        // console.log(jsonResponse);
        id = jsonResponse.id;

      } else {
        throw new Error('Request Failed');
      }

    } catch (error) {
      console.log(error);
    }

    // (2) creates a new playlist, Get playlist ID
    let playlistID = '';
    try {
      const response = await fetch(usersUrl + id + '/playlists', {
        method:'POST',
        headers:{
          'Authorization': 'Bearer ' + userAaccessToken,
          'Content-Type': 'application/json'
        },
        body:JSON.stringify({name:playlistName})
      });

      if(response.ok){
        const jsonResponse = await response.json();
        // console.log(jsonResponse);
        playlistID = jsonResponse.id;

      } else {
        throw new Error('Request Failed');
      }

    } catch (error) {
      console.log(error);
    }

    // (3) Post Tracks
    try {
      const response = await fetch(usersUrl + id + '/playlists/' +  playlistID + '/tracks', {
        method:'POST',
        headers:{
          'Authorization': 'Bearer ' + userAaccessToken,
          'Content-Type': 'application/json'
        },
        body:JSON.stringify({uris:trackURIs})
      });

      if(response.ok){
        const jsonResponse = await response.json();
        console.log(jsonResponse);

      } else {
        throw new Error('Request Failed');
      }

    } catch (error) {
      console.log(error);
    }

  }

};

const renderResponse = (res) => {

  const tracks = res.tracks.items.map(item => {
    return {
      id :    item.id,
      name:   item.name,
      artist: item.artists[0].name,
      album:  item.album.name,
      uri:    item.uri
    };
  });

  return tracks;
};

export default Spotify;

import React from 'react';
import './App.css';

import SearchBar     from '../SearchBar/SearchBar';
import SearchResults from '../SearchResults/SearchResults'
import Playlist      from '../Playlist/Playlist'
import Spotify       from '../../util/Spotify'

// const track = {
//   name: "雑草挽歌",
//   artistsName: "おっさんバンド",
//   albumName:"まけないぜ"
// };

// const searchedTracks = [track, track, track];
// const playListTracks = [track];

class App extends React.Component {

  searchSpotify(term) {
    Spotify.search(term);
  }

  render() {
    return (
      <div>
        <h1>Ja<span className="highlight">mmm</span>ing</h1>
        <div className="App">
          <SearchBar />
          <div className="App-playlist">          
            <SearchResults />
            <Playlist />
          </div>
        </div>
      </div>
    );
  }
}

export default App;

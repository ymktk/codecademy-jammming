import React from 'react';
import './App.css';

import SearchBar   from '../SearchBar/SearchBar';
import AppPlaylist from '../AppPlaylist/AppPlaylist'
import Spotify     from '../../util/Spotify'

const track = {
  name: "雑草挽歌",
  artistsName: "おっさんバンド",
  albumName:"まけないぜ"
};

const searchedTracks = [track, track, track];
const playListTracks = [track];

class App extends React.Component {

  searchSpotify(term) {
    Spotify.search(term);
  }

  render() {
    return (
      <div className="App">
        <SearchBar playListTracks={playListTracks} />
        <AppPlaylist searchedTracks={searchedTracks} />
      </div>
    );
  }
}

export default App;

import React from 'react';
import './App.css';

import SearchBar   from '../SearchBar/SearchBar';
import AppPlaylist from '../AppPlaylist/AppPlaylist'
import Spotify     from '../../util/Spotify'

class App extends React.Component {

  searchSpotify(term) {
    Spotify.search(term);
  }

  render() {
    return (
      <div className="App">
        <SearchBar />
        <AppPlaylist />
      </div>
    );
  }
}

export default App;

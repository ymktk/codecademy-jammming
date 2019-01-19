import React from 'react';
import './App.css';
import SearchBar from '../SearchBar/SearchBar';
import Playlist  from '../Playlist/Playlist'
import Results   from '../Results/Results'
import Spotify   from '../../util/Spotify'

class App extends React.Component {

  searchSpotify(term) {
    Spotify.search(term);
  }

  render() {
    return (
      <div className="App">
        <SearchBar />
        <Results />
        <Playlist />
      </div>
    );
  }
}

export default App;

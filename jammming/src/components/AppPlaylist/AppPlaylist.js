import React from 'react';
import './AppPlaylist.css';

import Playlist from './Playlist/Playlist';
import Results from './Results/Results';

class AppPlaylist extends React.Component {

  render() {
    return (
      <div className="App-playlist">
        <Results />
        <Playlist />
      </div>
    );
  }
}

export default AppPlaylist;
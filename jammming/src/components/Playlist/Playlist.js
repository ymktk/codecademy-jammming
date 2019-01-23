import React from 'react';
import './Playlist.css';

import TrackList from '../TrackList/TrackList';

class Playlist extends React.Component {

  render() {
    return (
      <div className="Playlist">

        {/* 
        <input defaultValue='New Playlist' /> 

        defaultValue and set it equal to {'New Playlist'}

        */}
        
        {/* <TrackList /> */}

        <a href="*" className="Playlist-save">SAVE TO SPOTIFY</a>

      </div>
    );
  }
}

export default Playlist;
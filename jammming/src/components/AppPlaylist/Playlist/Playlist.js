import React from 'react';
import './Playlist.css';

// import Track from '../Track/Track';

class Playlist extends React.Component {

  render() {
    return (
      <div className="Playlist">

        {/* 
        <input value='New Playlist' /> 
        */}
        
        <div className="TrackList">
          {/*
          <Track />
          */}
        </div>

        <a href="*" className="Playlist-save">SAVE TO SPOTIFY</a>

      </div>
    );
  }
}

export default Playlist;
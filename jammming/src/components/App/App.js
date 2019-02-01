import React from 'react';
import './App.css';

import SearchBar     from '../SearchBar/SearchBar';
import SearchResults from '../SearchResults/SearchResults'
import Playlist      from '../Playlist/Playlist'
import Spotify       from '../../util/Spotify'

class App extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      searchResults : [],
      playlistName : 'New Playlist',
      playlistTracks : []
    };

    this.addTrack           = this.addTrack.bind(this);
    this.removeTrack        = this.removeTrack.bind(this);
    this.updatePlaylistName = this.updatePlaylistName.bind(this);
    this.search             = this.search.bind(this);
    this.savePlaylist       = this.savePlaylist.bind(this);
  }

  addTrack(track) {
    if (this.state.playlistTracks.find(savedTrack => savedTrack.id === track.id)) {
      // console.log('No Add');
    } else {
      // console.log('Add!');
      this.state.playlistTracks.push(track);
      this.setState (
        { playlistTracks : this.state.playlistTracks }
      );
    }
  }

  removeTrack(track) {

    let newPlaylistTracks = [];
    this.state.playlistTracks.forEach(savedTrack => {
      if (savedTrack.id === track.id) {
      } else {
        newPlaylistTracks.push(savedTrack);
      }
    });

    this.setState (
      { playlistTracks : newPlaylistTracks }
    );
  }

  updatePlaylistName(name) {
    this.setState (
      { playlistName : name }
    );
  }

  async search(term) {
    const results = await Spotify.search(term);
    this.setState (
      { searchResults : results }
    );
  }

  async savePlaylist() {
    const playlistName = this.state.playlistName;
    const trackURIs    = this.state.playlistTracks.map(track => {return track.uri;});
    await Spotify.savePlaylist(playlistName, trackURIs);

    this.setState (
      { playlistTracks: [],
        playlistName : 'New Playlist' }
    );
  }

  render() {
    return (
      <div>
        <h1>Ja<span className="highlight">mmm</span>ing</h1>
        <div className="App">
          <SearchBar
            onSearch={this.search} />

          <div className="App-playlist">

            <SearchResults
              searchResults={this.state.searchResults}
              onAdd={this.addTrack} />

            <Playlist
              playlistName={this.state.playlistName}
              playlistTracks={this.state.playlistTracks}
              onNameChange={this.updatePlaylistName}
              onRemove={this.removeTrack}
              onSave={this.savePlaylist} />

          </div>
        </div>
      </div>
    );
  }
}

export default App;

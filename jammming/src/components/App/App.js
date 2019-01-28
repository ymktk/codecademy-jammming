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
      searchResults : [
        {
          id: "id1",
          name: "雑草挽歌",
          artist: "おっさんバンド",
          album:"まけないぜ"
        }, {
          id: "id2",
          name: "雑草2",
          artist: "おっさんバンド",
          album:"まけないぜ"
        }
      ],

      playlistName : 'お気に入りりすと',

      playlistTracks : [
        {
          id: "id3",
          name: "ポンポコリン",
          artist: "おどるバンド",
          album:"ちびまるこ"
        }, {
          id: "id4",
          name: "さんさん",
          artist: "おばさんバンド",
          album:"ダイエット"
        }
      ]
    };

    this.addTrack    = this.addTrack.bind(this);
    this.removeTrack = this.removeTrack.bind(this);
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


  render() {
    return (
      <div>
        <h1>Ja<span className="highlight">mmm</span>ing</h1>
        <div className="App">
          <SearchBar />
          <div className="App-playlist">
            <SearchResults searchResults={this.state.searchResults}   onAdd={this.addTrack}  />
            <Playlist      playlistTracks={this.state.playlistTracks} onRemove={this.removeTrack} playlistName={this.state.playlistName} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;

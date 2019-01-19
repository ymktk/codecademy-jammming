import React from 'react';
import './Results.css';

import Track from '../../Track/Track';

class Results extends React.Component {
  
  render() {
    // console.log(this.props.searchedTracks);

    return (
      <div className="SearchResults">
        <h2>Results</h2>

        <div className="TrackList">
          {
            this.props.searchedTracks.map(searchedTrack => <Track track={searchedTrack} />)
          }
        </div>

      </div>
    );
  }
}

export default Results;
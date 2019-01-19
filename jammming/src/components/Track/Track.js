import React from 'react';
import './Track.css';

class Track extends React.Component {

  render() {
    return (
      <div className="Track">
        <div className="Track-information">
          <h3>{this.props.track.name}</h3> 
          <p>{this.props.track.artistsName} | {this.props.track.albumName}</p>
        </div>
        <a href="*" className="Track-action">+</a>
      </div>          
    );
  }
}

export default Track;
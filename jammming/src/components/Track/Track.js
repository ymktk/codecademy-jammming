import React from 'react';
import './Track.css';

class Track extends React.Component {

  constructor(props) {
    super(props);

    this.addTrack = this.addTrack.bind(this);
  }

  addTrack() {
    this.props.onAdd(this.props.track);
  }

  renderAction() {
    // TMP
    let isRemoval = false;

    if(isRemoval) {
      return "-";
    } else {
      return "+";
    }
  }

  render() {
    return (
      <div className="Track">
        <div className="Track-information">
          <h3>{this.props.track.name}</h3>
          <p>{this.props.track.artist} | {this.props.track.album}</p>
        </div>
        {/* eslint-disable-next-line */}
        <a className="Track-action" onClick={this.addTrack} >{this.renderAction()} </a>
      </div>
    );
  }
}

export default Track;
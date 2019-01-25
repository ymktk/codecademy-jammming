import React from 'react';
import './Track.css';

class Track extends React.Component {

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
          <p>artistsName | albumName</p>
        </div>
        <a href="*" className="Track-action">{this.renderAction()} </a>
      </div>
    );
  }
}

export default Track;
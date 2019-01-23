import React from 'react';
import './Track.css';

class Track extends React.Component {

  renderAction() {
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
          <h3>name</h3> 
          <p>artistsName | albumName</p>
        </div>
        <a href="*" className="Track-action"><!-- + or - will go here --> renderAction() </a>
      </div>          
    );
  }
}

export default Track;
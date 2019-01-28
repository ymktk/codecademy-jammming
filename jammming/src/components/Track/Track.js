import React from 'react';
import './Track.css';

class Track extends React.Component {


  constructor(props) {
    super(props);

    this.addTrack     = this.addTrack.bind(this);
    this.removeTrack  = this.removeTrack.bind(this);
    this.renderAction = this.renderAction.bind(this);
    this.clickAction  = this.clickAction.bind(this);

    let action;
  }

  addTrack() {
    this.props.onAdd(this.props.track);
  }

  removeTrack() {
    this.props.onRemove(this.props.track);
  }

  renderAction() {
    if(this.props.isRemoval) {
      return "-";
    } else {
      return "+";
    }
  }

  clickAction() {
    if(this.props.isRemoval) {
      this.removeTrack();
    } else {
      this.addTrack();
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
        <a className="Track-action" onClick={this.clickAction} >{this.renderAction()}</a>
      </div>
    );
  }
}

export default Track;
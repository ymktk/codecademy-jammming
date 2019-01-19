import React from 'react';
import './Track.css';

class Track extends React.Component {

  render() {
    return (
      <div className="Track">
        <div className="Track-information">
          {/* 曲名 */}
          <h3>雑草挽歌</h3> 
          {/* アーティスト | アルバム */}
          <p>おっさんず | おっさんアルバム</p>
        </div>
        <a href="*" className="Track-action">+</a>
      </div>          
    );
  }
}

export default Track;
import React from 'react';
import './Results.css';

class Results extends React.Component {

  render() {
    return (
      <div className="SearchResults">
        <h2>Results</h2>
        
        <div class="TrackList">
          <div class="Track">
            <div class="Track-information">
              <h3>Tiny Dancer</h3>
              <p>Elton John | Madman Across The Water</p>
            </div>
            <a class="Track-action">+</a>
          </div>
          <div class="Track">
            <div class="Track-information">
              <h3>Tiny Dancer</h3>
              <p>Tim McGraw | Love Story</p>
            </div>
            <a class="Track-action">+</a>
          </div>
          <div class="Track">
            <div class="Track-information">
              <h3>Tiny Dancer</h3>
              <p>Rockabye Baby! | Lullaby Renditions of Elton John</p>
            </div>
            <a class="Track-action">+</a>
          </div>
          <div class="Track">
            <div class="Track-information">
              <h3>Tiny Dancer</h3>
              <p>The White Raven | Tiny Dancer</p>
            </div>
            <a class="Track-action">+</a>
          </div>
          <div class="Track">
            <div class="Track-information">
              <h3>Tiny Dancer - Live Album Version</h3>
              <p>Ben Folds | Ben Folds Live</p>
            </div>
            <a class="Track-action">+</a>
          </div>
        </div>

      </div>
    );
  }
}

export default Results;
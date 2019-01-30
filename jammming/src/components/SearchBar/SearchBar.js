import React from 'react';
import './SearchBar.css';

class SearchBar extends React.Component {

  constructor(props) {
    super(props);

    this.state = ({ term : '' });

    this.search           = this.search.bind(this);
    this.handleTermChange = this.handleTermChange.bind(this);
  }

  search() {
    if (this.state.term) {
      this.props.onSearch(this.state.term);
    }
  }

  handleTermChange(e) {
    this.setState (
      { term : e.target.value }
    );
  }

  render() {
    return (
      <div className="SearchBar">

        <input
          placeholder="Enter A Song, Album, or Artist"
          onChange={this.handleTermChange} />

        {/* eslint-disable-next-line */}
        <a
          onClick={this.search}
          >SEARCH</a>

      </div>
    );
  }
}

export default SearchBar;
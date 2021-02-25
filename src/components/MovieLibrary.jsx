// implement AddMovie component here
import React, { Component } from 'react';
import MovieList from './MovieList';
import SearchBar from './SearchBar';
import AddMovie from './AddMovie';
import movies from '../data';

class MovieLibrary extends Component {
  constructor(props) {
    super(props);

    this.state = {
      searchText: '',
    };
    this.onSelectedGenreChange = this.onSelectedGenreChange.bind(this);
  }

  onSelectedGenreChange() {

  }

  render() {
    const { movies, bookmarkedOnly, selectedGenre, } = this.props;
    const { searchText } = this.state;

    return (
      <div>
        <h2> My awesome movie library </h2>
        <SearchBar
          searchText={ searchText } 
          onSearchTextChange={ this.onSearchTextChange }
          bookmarkedOnly={ bookmarkedOnly }
          onBookmarkedChange={ this.onBookmarkedChange }
          selectedGenre={ selectedGenre }
          onSelectedGenreChange={ this.onSelectedGenreChange }
        />
        {/* <MovieList movies={ movies } />
        <AddMovie /> */}
      </div>
    );
  }
}

export default MovieLibrary;

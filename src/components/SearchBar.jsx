// implement AddMovie component here
import React from 'react';

class SearchBar extends React.Component {
  render() {
    return (
      <form data-testid="search-bar-form">
        <label data-testid="text-input-label">Inclui o texto:
          <input
            type="text"
            data-testid="text-input"
            value={ this.props.searchText }
            onChange={ this.props.onSearchTextChange }
          />
        </label>
        <label data-testid="checkbox-input-label">Mostrar somente favoritos
          <input
            type="checkbox"
            checked={ this.props.bookmarkedOnly }
            onChange={ this.props.onBookmarkedChange }
            data-testid="checkbox-input"
          />
        </label>
        <label data-testid="select-input-label">Filtrar por gênero
          <select
            type="select"
            value={ this.props.selectedGenre }
            onChange={ this.props.onSelectedGenreChange }
            data-testid="select-input"
          >
            <option value="" data-testid="select-option">Todos</option>
            <option value="action" data-testid="select-option">Ação</option>
            <option value="comedy" data-testid="select-option">Comédia</option>
            <option value="thriller" data-testid="select-option">Suspense</option>
          </select>
        </label>
      </form>
    );
  }
}

export default SearchBar;

// searchText={ searchText }
// onSearchTextChange={ onSearchTextChange }
// bookmarkedOnly={ bookmarkedOnly }
// onBookmarkedChange={ onBookmarkedChange }
// selectedGenre={ selectedGenre }
// onSelectedGenreChange={ onSelectedGenreChange }

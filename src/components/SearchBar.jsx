// implement AddMovie component here
import React from 'react';
import './Styles/SearchBar.css';
import InputText from './Inputs/InputTextSearchBar';

class SearchBar extends React.Component {
  render() {
    const {
      searchText,
      onSearchTextChange,
      bookmarkedOnly,
      onBookmarkedChange,
      selectedGenre,
      onSelectedGenreChange } = this.props;

    return (
      <form data-testid="search-bar-form" className="form-SearchBar">
        <InputText
          searchText={ searchText }
          onSearchTextChange={ onSearchTextChange }
        />
        <label data-testid="checkbox-input-label" htmlFor="inputCheckbox">
          Mostrar somente favoritos
          <input
            data-testid="checkbox-input"
            onChange={ onBookmarkedChange }
            checked={ bookmarkedOnly }
            id="inputCheckbox"
            type="checkbox"
          />
        </label>
        <label
          data-testid="select-input-label"
          htmlFor="inputSelect"
        >
          Filtrar por gênero
          <select
            data-testid="select-input"
            onChange={ onSelectedGenreChange }
            value={ selectedGenre }
            id="inputSelect"
          >
            <option data-testid="select-option" value="">Todos</option>
            <option data-testid="select-option" value="action">Ação</option>
            <option data-testid="select-option" value="comedy">Comédia</option>
            <option data-testid="select-option" value="thriller">Suspense</option>
          </select>
        </label>
      </form>
    );
  }
}

export default SearchBar;

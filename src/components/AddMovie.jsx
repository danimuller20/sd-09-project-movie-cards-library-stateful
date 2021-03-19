import React from 'react';
import PropTypes from 'prop-types';
import TitleForm from './TitleForm';
import StoryLineForm from './StoryLineForm';
import SubTitleInput from './SubtitleInput';
import ImageInput from './ImageInput';
// import RatingInput from './RatingInput';
import SelectGender from './SelectGender';

class AddMovie extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      storyline: '',
      subtitle: '',
      imagePath: '',
      rating: 0,
      genre: 'action',
    };
    this.handleChange = this.handleChange.bind(this);
    this.ResetState = this.ResetState.bind(this);
  }

  handleChange(event) {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  ResetState() {
    const { AddMovieOnList } = this.props;
    AddMovieOnList(this.state);
    this.setState({
      title: '',
      storyline: '',
      subtitle: '',
      imagePath: '',
      rating: 0,
      genre: 'action',
    });
  }

  render() {
    // const { title, storyline, subtitle, imagePath, rating, genre } = this.state;
    const { title, storyline, subtitle, imagePath, genre } = this.state;
    return (
      <div>
        <form data-testid="add-movie-form">
          <StoryLineForm value={ storyline } handleChange={ this.handleChange } />
          <TitleForm value={ title } handleChange={ this.handleChange } />
          <SubTitleInput value={ subtitle } handleChange={ this.handleChange } />
          <ImageInput value={ imagePath } handleChange={ this.handleChange } />
          <label data-testid="genre-input-label" htmlFor="genre">
            Gênero
            <select
              data-testid="genre-input"
              value={ value }
              onChange={ handleChange }
              htmlFor="genre"
            >
              <option data-testid="genre-option" value="">Todos</option>
              <option data-testid="genre-option" value="action">Ação</option>
              <option data-testid="genre-option" value="comedy">Comédia</option>
              <option data-testid="genre-option" value="thriller">Suspense</option>
            </select>
          </label>
          {/* <SelectGender value={ genre } handleChange={ this.handleChange } /> */}
          <button
            data-testid="send-button"
            type="button"
            onClick={ this.ResetState }
          >
            Adicionar filme
          </button>
          {/* <RatingInput value={ rating } handleChange={ this.handleChange } /> */}
        </form>
      </div>
    );
  }
}

AddMovie.propTypes = {
  AddMovieOnList: PropTypes.string,
}.isRequired;

export default AddMovie;

import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

class MovieCard extends React.Component {
  idMovie() {
    const { movie } = this.props;
    return (`movies/${movie.id}`);
  }

  render() {
    const { movie } = this.props;
    return (
      <div data-testid="movie-card">
        <h3>{movie.title}</h3>
        <img src={ movie.imagePath } alt={ movie.title } />
        <p>{movie.storyline}</p>
        <Link to={ this.idMovie() }>
          VER DETALHES
        </Link>
      </div>
    );
  }
}

MovieCard.propTypes = {
  movie: PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
    subtitle: PropTypes.string,
    storyline: PropTypes.string,
    rating: PropTypes.number,
    imagePath: PropTypes.string,
    bookmarked: PropTypes.bool,
    genre: PropTypes.string,
  }).isRequired,
};

export default MovieCard;

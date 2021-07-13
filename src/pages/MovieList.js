import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Loading } from '../components';
import MovieCard from '../components/MovieCard';

import * as movieAPI from '../services/movieAPI';

class MovieList extends Component {
  constructor() {
    super();

    this.state = {
      movies: [],
      isLoading: true,
    };
  }

  componentDidMount() {
    movieAPI.getMovies().then((response) => {
      this.setState({
        movies: response,
        isLoading: false,
      });
    });
  }

  render() {
    const { movies, isLoading } = this.state;

    // Render Loading here if the request is still happening

    return (
      isLoading ? (<Loading />) : (
        <div data-testid="movie-list">
          {movies.map((movie) => <MovieCard key={ movie.title } movie={ movie } />)}
          <Link to="/movies/new">ADICIONAR CARTÃO</Link>
        </div>
      ));
  }
}

export default MovieList;

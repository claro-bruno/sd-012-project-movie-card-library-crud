import React, { Component } from 'react';
import MovieCard from '../components/MovieCard';
import * as movieAPI from '../services/movieAPI';
import { Loading } from '../components';

class MovieList extends Component {
  constructor() {
    super();

    this.state = {
      movies: [],
      loading: true,
    };
    this.fetchM = this.fetchM.bind(this);
  }

  componentDidMount() {
    this.fetchM();
  }

  async fetchM() {
    const fetchMovies = await movieAPI.getMovies();

    this.setState({
      movies: fetchMovies,
      loading: false,
    });
    const { movies } = this.state;
    console.log(movies);
  }

  render() {
    const { movies, loading } = this.state;
    if (loading) return <Loading />;

    return (
      <div data-testid="movie-list">
        {movies.map((movie) => <MovieCard key={ movie.title } movie={ movie } />)}
      </div>
    );
  }
}

export default MovieList;

import React, { Component } from 'react';
import MovieCard from '../components/MovieCard';
import Loading  from '../components/Loading';
import './MovieList.css';
import * as movieAPI from '../services/movieAPI';

class MovieList extends Component {
  constructor() {
    super();

    this.state = {
      movies: [],
      loading: true,
    };
  }

  async componentDidMount() {
    const movies = await movieAPI.getMovies();
    this.setState({
      movies,
      loading: false,
    })
  }

  render() {
    const { movies, loading } = this.state;
    return (
      <div data-testid="movie-list" className="library-movie-list">
        {loading ? <Loading /> : movies.map((movie) => <MovieCard key={ movie.title } movie={ movie } />)}
      </div>
    );
  }
}

export default MovieList;

import React, { Component } from 'react';
import { Loading } from '../components';
import { Redirect } from 'react-router-dom';
import { MovieForm } from '../components';
import { updateMovie, getMovie } from '../services/movieAPI';

class EditMovie extends Component {
  constructor(props) {
    super(props);
    this.state = {
      status: '',
      shouldRedirect: false,
      movie: '',
      load: true,
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleMovie = this.handleMovie.bind(this);
  }

  componentDidMount() {
    this.handleMovie();
  }

  async handleMovie() {
    const { match } = this.props;
    const { id } = match.params;
    const data = await getMovie(id);
    this.setState({ movie: data, load: false})
  }

  async handleSubmit(movie) {
    const newMovie = await updateMovie(movie);
    this.setState({ movie: [...newMovie], shouldRedirect: true})
  }

  render() {
    const { shouldRedirect, movie, load } = this.state;
    if (shouldRedirect) {
      return <Redirect to="/" />
    }

    if (load) {
      return <Loading />
    }

    return (
      <div data-testid="edit-movie">
        <MovieForm movie={ movie } onSubmit={ this.handleSubmit } />
      </div>
    );
  }
}

export default EditMovie;

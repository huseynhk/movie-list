import React from 'react';
import SearchBar from './SearchBar';
import MovieList from './MovieList';



class App extends React.Component {

  state = {
    movies: [],

    searchQuery: ""

  }
async componentDidMount(){
  const baseURL = "http://localhost:3000/movies";
  const response =await fetch(baseURL);
  const data = await response.json();
  this.setState({movies : data})
}

  deleteMovie = (movie) => {

    const newMovieList = this.state.movies.filter(

      m => m.id !== movie.id
    )


    this.setState(state => ({
      movies: newMovieList
    }))

   
    }

    searchMovie = (event) => {
      this.setState({ searchQuery: event.target.value })
  }


  render() {

    let filteredMovies = this.state.movies.filter(

      (movie) => {

      return (

       movie.name.toUpperCase().indexOf(this.state.searchQuery.toUpperCase()) !== -1

      )

      }
    )


    return (
      <div className="App">

        <div className='container'>
          <div className='row'>
            <div className='col-lg-12'>

              <SearchBar searchprops={this.searchMovie} />

            </div>
          </div>

          <MovieList
            movies={filteredMovies}
            deleteprops={this.deleteMovie} />

        </div>

      </div>
    );
  }

}

export default App;
import React from 'react';
import SearchBar from './SearchBar';
import MovieList from './MovieList';
import axios from 'axios';



class App extends React.Component {

  state = {
    movies: [],

    searchQuery: ""

  }

  //Fetch get
async componentDidMount(){
  const baseURL = "http://localhost:3000/movies";
  const response =await fetch(baseURL);
  const data = await response.json();
  this.setState({movies : data})
}

// Axios Get
// async componentDidMount(){
//   const response = await axios.get("http://localhost:3000/movies");
//   console.log(response)
//   this.setState({movies : response.data})
// }


  // deleteMovie = (movie) => {

  //   const newMovieList = this.state.movies.filter(

  //     m => m.id !== movie.id
  //   )
  //   this.setState(state => ({
  //     movies: newMovieList
  //   }))

   
  //   }


  //Fetch Delete
    // deleteMovie = async (movie) => {

    //   const baseURL = `http://localhost:3000/movies/${movie.id}`

    //   await fetch(baseURL,{
    //     method : "DELETE"
    //   })

    //   const newMovieList = this.state.movies.filter(
  
    //     m => m.id !== movie.id
    //   )
    //   this.setState(state => ({
    //     movies: newMovieList
    //   }))
  
     
    //   }

    //AXios Delete

    deleteMovie = async (movie) => {

   axios.delete(`http://localhost:3000/movies/${movie.id}`)

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
import React from 'react';
import SearchBar from './SearchBar';
import MovieList from './MovieList';



class App extends React.Component {

  state = {
    movies: [
      {
        "id": 1,
        "name": "Game of Thronos",
        "rating": 9.5,
        "overview": "Lorem Ipsum is simply dummy text of the printing and typesetting industryee.",
        "imageUrl": "https://images.fineartamerica.com/images/artworkimages/mediumlarge/1/jon-snow-alexios-tepetidis.jpg"

      },
      {
        "id": 2,
        "name": "Taxt Oyunlari",
        "rating": 9.7,
        "overview": "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        "imageUrl": "https://m.media-amazon.com/images/M/MV5BYTRiNDQwYzAtMzVlZS00NTI5LWJjYjUtMzkwNTUzMWMxZTllXkEyXkFqcGdeQXVyNDIzMzcwNjc@._V1_.jpg"


      },
      {
        "id": 3,
        "name": "Targeryan",
        "rating": 9.9,
        "overview": "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        "imageUrl": "https://i.pinimg.com/originals/5f/00/92/5f0092366945d9c728555ca325a32e25.jpg"


      },
      {
        "id": 4,
        "name": "John Snow",
        "rating": 9.6,
        "overview": "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        "imageUrl": "https://i.pinimg.com/originals/5f/00/92/5f0092366945d9c728555ca325a32e25.jpg"


      },
      {
        "id": 5,
        "name": "Nedd Stark",
        "rating": 9.0,
        "overview": "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        "imageUrl": "https://i.pinimg.com/originals/5f/00/92/5f0092366945d9c728555ca325a32e25.jpg"


      },
      {
        "id": 6,
        "name": "Night King",
        "rating": 9.2,
        "overview": "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        "imageUrl": "https://i.pinimg.com/originals/5f/00/92/5f0092366945d9c728555ca325a32e25.jpg"

      }



    ],
    searchQuery: ""

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
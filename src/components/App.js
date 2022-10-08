import React from 'react';
import SearchBar from './SearchBar';
import MovieList from './MovieList';

 

class  App extends React.Component {

  state = {
    movies : [
        {
            "id" : 1,
            "name" : "Game of Thronos",
            "rating" : 9.5,
            "overview" : "Lorem Ipsum is simply dummy text of the printing and typesetting industryee.",
            "imageUrl": "https://images.fineartamerica.com/images/artworkimages/mediumlarge/1/jon-snow-alexios-tepetidis.jpg"
    
        },
        {
            "id" : 2,
            "name" : "Game of Thronos",
            "rating" : 9.7,
            "overview" : "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
            "imageUrl": "https://m.media-amazon.com/images/M/MV5BYTRiNDQwYzAtMzVlZS00NTI5LWJjYjUtMzkwNTUzMWMxZTllXkEyXkFqcGdeQXVyNDIzMzcwNjc@._V1_.jpg"
            
    
        },
        {
            "id" : 3,
            "name" : "Game of Thronos",
            "rating" : 9.9,
            "overview" : "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
            "imageUrl": "https://i.pinimg.com/originals/5f/00/92/5f0092366945d9c728555ca325a32e25.jpg"
            
    
        }
     
    ]
  }


     deleteMovie = (movie) => {

      const newMovieList = this.state.movies.filter(
     
        m => m.id !== movie.id
      )

     
      this.setState(state => ({
        movies : newMovieList
      }))

     }


    render() {
        return (
            <div className="App">

          <div className='container'>
          <div className='row'>
          <div className='col-lg-12'>

         <SearchBar/>

          </div>
          </div>

          <MovieList
           movies={this.state.movies}
           deleteprops={this.deleteMovie}/>

          </div>

            </div>
          );
    }
 
}

export default App;
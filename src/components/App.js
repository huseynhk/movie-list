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
            "overview" : "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
            "imageUrl": "https://m.media-amazon.com/images/M/MV5BYTRiNDQwYzAtMzVlZS00NTI5LWJjYjUtMzkwNTUzMWMxZTllXkEyXkFqcGdeQXVyNDIzMzcwNjc@._V1_.jpg"
    
        },
        {
            "id" : 1,
            "name" : "Game of Thronos",
            "rating" : 9.5,
            "overview" : "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
            "imageUrl": "https://m.media-amazon.com/images/M/MV5BYTRiNDQwYzAtMzVlZS00NTI5LWJjYjUtMzkwNTUzMWMxZTllXkEyXkFqcGdeQXVyNDIzMzcwNjc@._V1_.jpg"
            
    
        },
        {
            "id" : 1,
            "name" : "Game of Thronos",
            "rating" : 9.5,
            "overview" : "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
            "imageUrl": "https://m.media-amazon.com/images/M/MV5BYTRiNDQwYzAtMzVlZS00NTI5LWJjYjUtMzkwNTUzMWMxZTllXkEyXkFqcGdeQXVyNDIzMzcwNjc@._V1_.jpg"
            
    
        }
    ]
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
          <MovieList/>
          </div>

            </div>
          );
    }
 
}

export default App;
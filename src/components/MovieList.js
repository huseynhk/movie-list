import React from 'react';


class MovieList extends React.Component {

    render() {

        return(
       <div className='row'>
        <div className='col-lg-4'>
        
        <div className='card-mb-4 shadow-sm'>

        <img src='https://m.media-amazon.com/images/M/MV5BYTRiNDQwYzAtMzVlZS00NTI5LWJjYjUtMzkwNTUzMWMxZTllXkEyXkFqcGdeQXVyNDIzMzcwNjc@._V1_.jpg' className='card-img-top' alt='game'/>
       <div className='card-body'>

          <h5 className='card-title'>Sample Movie</h5>
          <p className='card-text'>Sample Movie Description</p>
          <div className='d-flex justify-content-between align-items-center'>
          <button type='button' className='btn b btn-outline-danger'>Delete</button>
          <h2><span className='text-info'>9.5</span></h2>
          </div>
       </div>
        </div>



        </div>
       </div>
        )
    
    }
}

export default MovieList
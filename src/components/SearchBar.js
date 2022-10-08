import React from 'react';


class SearchBar extends React.Component {


    handleFormSubmit = (event) => {
        event.preventDefault();
    }
    
    render() {

        return(

             <form onSubmit={this.handleFormSubmit}>
                <div className='form-row my-5'>
                    <div className='col-12'>
                        <input onChange={this.props.searchprops} 
                        type='text' className='form-control' placeholder='Search'
                        />
                    </div>
                </div>
             </form>
        )
    
    }
}

export default SearchBar
import React from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'dGpQ5OmGP2SgfvZimlpCUoF4iOag9qzZ';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?'
            + `api-key=${NYT_API_KEY}`;

class SearchableMovieReviewsContainer extends React.Component {

    state = {
        reviews: [],
        searchTerm: ""
    }

    setSearchTerm = (event) => {
        this.setState({
            searchTerm: event.target.value
        })
    }


    submitHandler = (event) => {
        event.preventDefault()
        fetch(URL + "&query=" + `${this.state.searchTerm}`)
        .then(response => response.json())
        .then(responseData => this.setState({
            reviews: responseData.results
        }))
    }
    
    
    render () {

        return (
            <div className="searchable-movie-reviews">
                <form onSubmit={this.submitHandler}>
                    <input onChange={this.setSearchTerm} type="text" value={this.state.searchTerm} placeholder="Search"></input>
                    <input type="submit" value="Find Movie"></input>
                </form>
                <MovieReviews reviews={this.state.reviews}/>
            </div>
        )
    }
}

export default SearchableMovieReviewsContainer
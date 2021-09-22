import React, { Component } from 'react'
import selectMovieUpdate from '../../Pages/moviesActions/selectMovieUpdate'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

// Created moviesInfo class
class moviesInfo extends Component {

    /* It updates 'select movie' state in redux store when user trigger by click a movie option.
        The movie information is to store in the redux store and tell us about movie.  
    */
    handleMovieSelection = (value) => {
        this.props.selectMovieUpdate(value);
    }

    render() {
        var data = this.props.data;

        // The function byEpisode() passed to array parameters and make sort method. 
        function byEpisode(x, y) {
            x = x.fields.episode_id;
            y = y.fields.episode_id;
            return x < y ? -1 : 1
        }

        // The function byYear() passed to array parameters and make filter method. 
        function byYear(x, y) {
            x = Date.parse(x.fields.release_date);
            y = Date.parse(y.fields.release_date);
            return x < y ? -1 : 1
        }

        /* It performers the title of the movie with year released movie and finds through
            the query in it. However, it is not a case sensitive. 
        */
        function byInput(query) {
            var stringToFilter = query.fields.title + query.fields.release_date;
            stringToFilter = stringToFilter.toLowerCase();
            return stringToFilter.includes(this.props.query.toLowerCase());
        }
        // It sorts byEpisode
        if (this.props.sort === "episode") {
            data.sort(byEpisode);
        }
        // It sorts byYear release movie
        else if (this.props.sort === "year") {
            data.sort(byYear);
        }

        // It does filter the movies data. Otherwise, query is not empty. 
        if (this.props.query !== "") {
            data = data.filter(byInput, this);
        }

        var movieList = data.map((movie, i) =>
            <tr key={i} onClick={() => { this.handleMovieSelection(movie.fields) }}>
                <td className="center-align" style={{ fontSize: ".9rem" }}>
                    EPISODE {movie.fields.episode_id}
                </td>
                <td>
                    {movie.fields.title}
                </td>
                <td className="right-align">
                    {movie.fields.release_date}
                </td>
            </tr>
        );

        return (
            // Created MoviesList table and user can click for movie information
            <table className="highlight white">
                <tbody>
                    {movieList}
                </tbody>
            </table>
        );
    }
}

/* It updates the store and component. However, it does not employ the state.
Therefore, It requires the second argument for the connect function.   
*/
function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        selectMovieUpdate: selectMovieUpdate
    }, dispatch)
}

export default connect(null, mapDispatchToProps)(moviesInfo);
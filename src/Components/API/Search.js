import React, { Component } from 'react'
import queryMovieUpdate from '../../Pages/moviesActions/queryMovieUpdate'
import sortbyMovieUpdate from '../../Pages/moviesActions/sortbyMovieUpdate'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

// Created Search class for user search movie and sorting method
class Search extends Component {

    /*
    It updates the store when the user type in the searchBox and the user select sorting movies items.
    The user triggers by an onChangre event in the searchBox and the user select item or type text. It smothly works.
    However, the user do not need to press enter when he/she types into SearchBox.
    */
    handleQuery = (e) => {
        this.props.queryMovieUpdate(e.target.value);
    }
    // Created 'handleSort' and the user triggers by the "sort by" and dropdown select options.
    handleSort = (e) => {
        this.props.sortbyMovieUpdate(e.target.value);
    }

    render() {
        return (
            <div className="row" style={{
                marginBottom: "0",
                borderBottom: "1px solid hsl(0deg 1% 89%)",
                marginTop: "1rem"
            }}>
                <div className="input-field col s12 m2 l3">
                    <select defaultValue="Sort by" onChange={this.handleSort}>
                        <option value="Sort by" disabled>Sort by...</option>
                        <option value="year">Year</option>
                        <option value="episode">Episode</option>
                    </select>
                </div>
                <div className="input-field col s13 m9 l9" >
                
                    <input onChange={this.handleQuery} placeholder="Type here to search..." type="text"></input>
                </div>
            </div>
        )
    }
}

// Created function, redux method, and assigned queries
function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        queryMovieUpdate: queryMovieUpdate,
        sortbyMovieUpdate: sortbyMovieUpdate
    }, dispatch)
}

export default connect(null, mapDispatchToProps)(Search);
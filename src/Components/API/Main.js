import React, { Component } from 'react'
import MovieData from '../Data/movieView'
import Movies from '../Data/moviesInfo'
import { connect } from 'react-redux'

// Created Main class
class Main extends Component {

    constructor(props) {
        super(props);
        /* 
        MovieData created a component of state that initialized as an empty array.
        It accessed with the data from the APIs then the fetched it request is completed. 
        It states only one time chage and movies data store untill the page refresh. We have only one HTTP request. 
        We can also fetch new data every time when user uses a search option for movie information. 
        */
        this.state = {
            statusOk: false,
            movieData: []
        }
        // Created data fetch url and accessed movies data through APIs 
        const url = "https://star-wars-api.herokuapp.com/films";
        fetch(url).then((resp) => {
            resp.json().then((data) => {
                this.setState({
                    statusOk: true,
                    movieData: data
                });
            });
        });
    }

    render() {
        var borderStyle = "1px solid hsl(0deg 0% 88%)";
        if (this.state.statusOk) {
            return (
                <div className="row" style={{ display: "flex", alignItems: "stretch", borderBottom: borderStyle }}>
                    <div className="col s12 m6 grey lighten-5" style={{ borderRight: borderStyle, padding: "0", }}>
                        {/* It performs whole props through the redux store. However, movieData accessed when it called from the APIs, for example, star wars movies APIs.
                         */}
                        <Movies query={this.props.query} sort={this.props.sort} data={this.state.movieData} />
                    </div>
                    <div className="col s12 m6 valign-wrapper" style={{ justifyContent: "center", borderBottom: "1px solid rgb(224, 224, 224)" }}>
                        <MovieData movie={this.props.movie} />
                    </div>
                </div>
            );
        }
        else {
            return (
                <div className="row">
                    <p className="center-align">Oops! something entered wrong... Please try again later.</p>
                </div>
            )
        }
    }
}


function mapStateToProps(state) {
    return {
        query: state.query,
        sort: state.sort,
        movie: state.selectMovie
    }
}

/*
We have assigned null for the second argument for the connect function. Hence, it does not require to update state from this piece.
It only performs read from the store.   
*/
export default connect(mapStateToProps, null)(Main);
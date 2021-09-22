import { combineReducers } from 'redux';
import queryMovieReducer from './queryMovieReducer'
import sortbyMovieReducer from './sortbyMovieReducer'
import selectMovieReducer from './selectMovieReducer'

const rootMovieReducer = combineReducers({
    query: queryMovieReducer,
    sort: sortbyMovieReducer,
    selectMovie: selectMovieReducer
})

export default rootMovieReducer;
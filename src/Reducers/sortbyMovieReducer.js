export default (state = "none", action) => {
    if (action.type === "sortbyMovieUpdate") {
        return action.payload.value;
    }
    return state;
}
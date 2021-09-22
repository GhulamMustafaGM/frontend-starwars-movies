export default (state = "", action) => {
    if (action.type === "queryMovieUpdate") {
        return action.payload.value;
    }
    return state;
}
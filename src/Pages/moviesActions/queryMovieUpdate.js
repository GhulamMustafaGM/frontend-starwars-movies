export default (value) => {
    return {
        type: "queryMovieUpdate",
        payload: { value }
    }
}
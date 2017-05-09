// action type
export const REQUEST_GIFS = 'REQUEST_GIFS';
// action creator
export function requestGifs(term = null) {
    console.log(term);
    // action
    return {
        type: REQUEST_GIFS,
        term
    }
}
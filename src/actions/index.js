import request from 'superagent';
// action type
export const OPEN_MODAL = 'OPEN_MODAL';
export const CLOSE_MODAL = 'CLOSE_MODAL';
export const REQUEST_GIFS = 'REQUEST_GIFS';

const API_URL = 'http://api.giphy.com/v1/gifs/search?q=';
const API_KEY = '&api_key=dc6zaTOxFJmzC';

// action creator
export function requestGifs(term = null) {
    // superagent GET supports es6 promises - it returns a promise which is how the 
    // redux-promise is able to work with promise
    const data = request.get(`${API_URL}${term.replace(/\s/g, '+')}${API_KEY}`);
    // action
    return {
        type: REQUEST_GIFS,
        payload: data
    }
}

export function openModal(gif) {
  return {
    type: OPEN_MODAL,
    gif
  }
}

export function closeModal() {
  return {
    type: CLOSE_MODAL
  }
}
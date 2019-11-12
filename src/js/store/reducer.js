import {SET_MOVIES, SET_TOP_RATED_MOVIES} from "./types";
import {copy} from "../utils";

const defaultState = {
  movies:[],
  nbPages: 0,
  bestMovies: []
};

export function reducer(state = defaultState, action) {
  let newState = {...state};
  switch (action.type){
    case SET_TOP_RATED_MOVIES:
      newState.bestMovies = action.payload;
      return newState;
    case SET_MOVIES:

      newState.movies = action.payload.movies;
      newState.page = action.payload.page;
      newState.totalPages = action.payload.totalPages;
      return newState;
    default:
      return state;
  }
}
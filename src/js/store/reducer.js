import {SET_TOP_RATED_MOVIES} from "./types";
import {copy} from "../utils";

const defaultState = {
  movies:[],
  filteredMovies: [],
  bestMovies: []
};

export function reducer(state = defaultState, action) {
  let newState = copy(state);
  switch (action.type){
    case SET_TOP_RATED_MOVIES:
      newState.bestMovies = action.payload;
      return newState;
    default:
      return state;
  }
}
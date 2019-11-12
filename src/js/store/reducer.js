import {SET_MOVIES, SET_TOP_RATED_MOVIES,
  SET_MOVIES_FILTER_SORT_BY, SET_MOVIES_FILTER_GENDER,
  SET_MOVIES_FILTER_YEAR} from "./types";
import {copy} from "../utils";

const defaultState = {
  filters:{
    sortBy: 'alphabetic',
    year: 'none',
    gender: 'none'
  },
  movies:[],
  totalPages: 0,
  page: 0,
  lastFetchMode: 'popular',
  lastQuery: '',
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
      newState.lastFetchMode = action.payload.lastFetchMode; // on enrigistre le dernier type de recherche
      newState.lastQuery = action.payload.lastQuery; // on enregistre la derniere query
      newState.totalPages = action.payload.totalPages;
      return newState;

    case SET_MOVIES_FILTER_SORT_BY:
      newState.filters = {...newState.filters};
      newState.filters.sortBy = action.payload;
      return newState;

    case SET_MOVIES_FILTER_GENDER:
      newState.filters = {...newState.filters};
      newState.filters.gender = action.payload;
      return newState;

    case SET_MOVIES_FILTER_YEAR:
      newState.filters = {...newState.filters};
      newState.filters.year = action.payload;
      return newState;
    default:
      return state;
  }
}
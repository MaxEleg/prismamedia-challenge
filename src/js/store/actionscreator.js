import {SET_MOVIES_FILTER_GENDER, SET_MOVIES_FILTER_SORT_BY, SET_MOVIES_FILTER_YEAR} from "./types";

const actionsCreator = {
  setYearFilter: function(year){
    return {
      type: SET_MOVIES_FILTER_YEAR,
      payload: year
    }
  },
  setGenderFilter: function(gender){
    return {
      type: SET_MOVIES_FILTER_GENDER,
      payload: gender
    }
  },
  setSortByFilter: function(sortBy){
    return {
      type: SET_MOVIES_FILTER_SORT_BY,
      payload: sortBy
    }
  }
}

export {actionsCreator};
export default actionsCreator;
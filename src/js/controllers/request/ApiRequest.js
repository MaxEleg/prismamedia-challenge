import {Request} from "./Request";
import $ from 'jquery';

const API_URL="https://api.themoviedb.org/3/";
const API_KEY = '00afc533251134eb08043ce6f095f655';

export const ApiMovieDbRequest = class ApiRequest {
  static async get(route, params = {}) {
    params.api_key = API_KEY;
    route += '?' + $.param(params);
    return await Request.fetch(API_URL + route, {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
    });
  }
};

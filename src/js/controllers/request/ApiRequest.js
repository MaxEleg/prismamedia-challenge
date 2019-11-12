import {Request} from "./Request";
import $ from 'jquery';
import {api_key} from "../../../config";

const API_URL="https://api.themoviedb.org/3/";

export const ApiMovieDbRequest = class ApiRequest {
  static async get(route, params = {}) {
    params.api_key = api_key;
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

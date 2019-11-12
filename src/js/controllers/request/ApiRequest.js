import {Request} from "./Request";
import $ from 'jquery';
import {api_token} from "../../../../config";

const API_URL="https://api.themoviedb.org/3/";

export const ApiRequest = class ApiRequest {
  static async get(route, params) {
    params.api_token = api_token;
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

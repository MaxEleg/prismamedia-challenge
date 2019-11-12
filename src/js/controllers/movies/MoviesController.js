import {ApiRequest} from "../request/ApiRequest";
import {store} from "../../store";

class MoviesController{
  static async getTopRated(){
    let movies = await ApiRequest.get('movie/top_rated/');

    console.log(movies)
  }
}
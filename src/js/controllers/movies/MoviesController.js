import {ApiMovieDbRequest} from "../request/ApiRequest";
import {store} from "../../store";
import {SET_TOP_RATED_MOVIES} from "../../store/types";

class MoviesController{
  static async fetchTopRated(){
    try{
      let {results} = await ApiMovieDbRequest.get('movie/top_rated/');
      let topMoviesRated = results.splice(0,10);
      topMoviesRated = topMoviesRated.map(movie=>{
        return {
          title: movie.title,
          date: movie.release_date.split('-')[0],
          img: "https://image.tmdb.org/t/p/w300" + movie.poster_path
        }
      });
      store.dispatch({
        type: SET_TOP_RATED_MOVIES,
        payload: [...topMoviesRated]
      });

      console.log(store.getState().bestMovies);
    } catch (ex){
      alert("Une erreur s'est produite, merci de vérifier votre clé API");
    }

  }
}

export {MoviesController}
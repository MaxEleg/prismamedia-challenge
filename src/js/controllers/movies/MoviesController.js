import {ApiMovieDbRequest} from "../request/ApiRequest";
import {store} from "../../store";
import {SET_MOVIES, SET_TOP_RATED_MOVIES} from "../../store/types";

function formatMovies(movies){ // cette fonction va reformatter notre tableau
  return movies.map(movie=>{
    return {
      title: movie.title,
      date: movie.release_date ? movie.release_date.split('-')[0] : '-',
      img: "https://image.tmdb.org/t/p/w300" + movie.poster_path
    }
  });
}

class MoviesController{
  static async fetchTopRated(){ // on fetch les meilleurs films
    try{
      let {results} = await ApiMovieDbRequest.get('movie/top_rated/'); //on obtient les meilleurs films
      let topMoviesRated = results.splice(0,10);
      topMoviesRated = formatMovies(topMoviesRated); // on les formattent
      store.dispatch({ //on dispatch sur le store
        type: SET_TOP_RATED_MOVIES,
        payload: topMoviesRated
      });
    } catch (ex){
      alert("Une erreur s'est produite, merci de vérifier votre clé API");
      console.error(ex);
    }
  }
  static async fetchMovies(data){ // on fetch les meilleurs films
    try{
      let {results, total_pages} = await ApiMovieDbRequest.get(data.route, {
        query: data.query,
        page : data.page
      }); //on obtient les films
      let movies  = formatMovies(results); // on les formattent
      store.dispatch({ //on dispatch sur le store
        type: SET_MOVIES,
        payload: {
          movies: movies,
          page: data.page,
          lastFetchMode: data.query ? 'search' : 'popular',
          lastQuery: data.query,
          totalPages: total_pages
        }
      });
    } catch (ex){
      alert("Une erreur s'est produite, merci de vérifier votre clé API");
      console.error(ex);
    }
  }

  static async fetchPopularMovies(page = 1){
    await MoviesController.fetchMovies({
      query: null,
      page: page,
      route: 'movie/popular/'
    });
  }
  static async fetchSearchMovies(query, page = 1){
    await MoviesController.fetchMovies({
      query,
      page,
      route: 'search/movie/'
    });
  }
}

export {MoviesController}
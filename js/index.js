import { getTrending, getTrendingMovies, getTrendingTV, getMovieFromActor } from "./api/trendingGetters.js";
import { person } from "./api/config.js";
export { getTrendingMovies } from "./api/trendingGetters.js";

 /**
  * Da aggiungere:
  * id
  * poster_path
  * title
  * vote_average
  * media_type
  * release_date
  */
const trending = getTrending() .then((data) => {
      data.results.forEach(movie => {
            console.log("/");
            console.log(movie.id);
            console.log(movie.poster_path);
            if(movie.media_type == "movie"){
                  console.log(movie.title);
            } else if (movie.media_type == "tv") {
                  console.log(movie.name);
            }
            console.log(movie.vote_average);
            console.log(movie.media_type);
            if(movie.release_date != null){
                  console.log(movie.release_date);
            } else {
                  console.log(movie.first_air_date+" --> first air date");
            }
      });
});
const trendingMovies = getTrendingMovies() .then((data) => {
      // console.log(data);
});
const trendingTV = getTrending() .then((data) => {
      // console.log(data);
});
const movieFromActor = getMovieFromActor(person) .then((data) => {
      // console.log(data);
});
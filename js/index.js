import { getTrending, getTrendingMovies, getTrendingTV, getMovieFromActor } from "./api/trendingGetters.js";
import { person } from "./api/config.js";

getTrending();
getTrendingMovies();
getTrendingTV();
getMovieFromActor(person);
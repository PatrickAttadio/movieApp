import { getTrending, getTrendingMovies, getTrendingTV, getMovieFromActor } from "./api/trendingGetters.js";
import { baseUrl, person } from "./api/config.js";

getTrending(baseUrl);
getTrendingMovies(baseUrl);
getTrendingTV(baseUrl);
getMovieFromActor(baseUrl, person);
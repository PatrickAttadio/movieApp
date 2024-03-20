import { OPTIONS, BASEURL } from "./config.js";

export const getTrending = async () => {
      const response = await fetch(BASEURL + "trending/all/day?language=en-US", OPTIONS);
      const data = await response.json();
      return data;
};

/** getTrendingMovies
 * @param BASEURL
 * @returns film di tendenza
 */
export const getTrendingMovies = async () => {
      const response = await fetch(BASEURL + "trending/movie/day?language=en-US", OPTIONS);
      const data = await response.json();
      return data;
};

/** getTrendingTV
 * @param BASEURL
 * @returns serie di tendenza
 */
export const getTrendingTV = async () => {
      const response = await fetch(BASEURL + "trending/tv/day?language=en-US", OPTIONS);
      const people = await response.json();
      return people;
};

/** getTrendingPeople
 * @param BASEURL
 * @returns nomi attori
 */
export const getTrendingPeople = async () => {
      const response = await fetch(BASEURL + "trending/person/day?language=en-US", OPTIONS);
      const data = await response.json();
      return data;
};


/** getTrendingTV
 * @param nameActor
 * @returns film/serie che hanno Brad Pitt
 */
export const getMovieFromActor = async (person) => {
      const response = await fetch(BASEURL + `search/person?query=${person}`, OPTIONS);
      const data = await response.json();
      return data;
};
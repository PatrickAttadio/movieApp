const options = {
      method: "GET",
      headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5ZmI0ZjgyMzIzM2Q2NWVkZGUxODgzMjk1NWYzMTEwNiIsInN1YiI6IjY1ZTg2Y2QwY2U5ZTkxMDE2MjNlYzExNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.pXN_2AHzljXwgMChJcysgQltFTW8kDAEYUTPWYikK0w",
      },
};

export const getTrending = async (baseUrl) => {
      const response = await fetch(baseUrl + "trending/all/day?language=en-US", options);
      const data = await response.json();
      return data;
};

/** getTrendingMovies
 * @param baseUrl
 * @returns film di tendenza
 */
export const getTrendingMovies = async (baseUrl) => {
      const response = await fetch(baseUrl + "trending/movie/day?language=en-US", options);
      const data = await response.json();
      return data;
};

/** getTrendingTV
 * @param baseUrl
 * @returns serie di tendenza
 */
export const getTrendingTV = async (baseUrl) => {
      const response = await fetch(baseUrl + "trending/tv/day?language=en-US", options);
      const data = await response.json();
      return data;
};


/** getTrendingTV
 * @param nameActor
 * @returns film/serie che hanno Brad Pitt
 */
export const getMovieFromActor = async (baseUrl, person) => {
      const response = await fetch(baseUrl + `search/person?query=${person}`, options);
      const data = await response.json();
      return data;
};
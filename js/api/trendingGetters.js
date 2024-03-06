const options = {
      method: "GET",
      headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5ZmI0ZjgyMzIzM2Q2NWVkZGUxODgzMjk1NWYzMTEwNiIsInN1YiI6IjY1ZTg2Y2QwY2U5ZTkxMDE2MjNlYzExNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.pXN_2AHzljXwgMChJcysgQltFTW8kDAEYUTPWYikK0w",
      },
};

export const getTrending = async (baseUrl) => {
      const response = await fetch(baseUrl + "all/day?language=en-US", options);
      const data = await response.json();
      return data;
};

/** getTrendingMovies
 * @param baseUrl
 * @returns film di tendenza
 */
export const getTrendingMovies = async (baseUrl) => {
      const response = await fetch(baseUrl + "movie/day?language=en-US", options);
      const data = await response.json();
      return data;
};
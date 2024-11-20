import api from "./axios"

const movieApi = {
  getMoviesByCategory: async (category) => {
    const response = await api.get(`movie/${category}`);
    return response.data;
  },
};

export default movieApi;
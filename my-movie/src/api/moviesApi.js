import api from "./axios"

const movieApi = {
  getMoviesByCategory: async (category) => {
    const response = await api.get(`movie/${category}`);
    return response.data;
  },
  getMovieById: async (id) => {
    const response = await api.get(`movie/${id}`);
    return response.data;
  },
  getMovieReviews: async (id) => {
    const response = await api.get(`movie/${id}/reviews`, {
      params: {
        language: "en",
      }
    });
    return response.data;
  },
};

export default movieApi;
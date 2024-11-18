import api from "./axios"

const movieApi = {
  getMoviesMain: async (category) => {
    const response = await api.get(`movie/${category}`);
    return response.data;
  },
};

export default movieApi;
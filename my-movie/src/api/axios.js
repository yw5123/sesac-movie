import axios from "axios";

const API_KEY = import.meta.env.VITE_TMDB_KEY;

const instance = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  params: {
    api_key: "0c51db4a1d2545cbd3802b020010a49b",
    language: "ko",
  }
});

export default instance;
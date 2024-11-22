import { createSlice } from "@reduxjs/toolkit"

const initialState = {};

const movieSlice = createSlice({
  name: "movie",
  initialState,
  reducers: {
    saveMovie: (state, action) => {
      const { userId, movie } = action.payload;

      if (state[userId]) {
        const isSaved = state[userId].some((savedMovie) => savedMovie.id === movie.id);
        if (!isSaved) {
          state[userId].push(movie);
        }
      } else {
        state[userId] = [movie,]
      }
    },
  },
});

export const { saveMovie } = movieSlice.actions;
export default movieSlice.reducer;
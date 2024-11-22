import { createSlice } from "@reduxjs/toolkit"

const initialState = {};

const movieSlice = createSlice({
  name: "movie",
  initialState,
  reducers: {
    saveMovie: (state, action) => {
      const { userId, movie } = action.payload;

      if (state[userId]) {
        const savedIndex = state[userId].findIndex((savedMovie) => savedMovie.id === movie.id);
        if (savedIndex > -1) {
          state[userId].splice(savedIndex, 1);
        } else {
          state[userId].push(movie);
        }
      } else {
        state[userId] = [movie,];
      }
    },
  },
});

export const { saveMovie } = movieSlice.actions;
export default movieSlice.reducer;
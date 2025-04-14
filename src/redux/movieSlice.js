import { createSlice } from "@reduxjs/toolkit";


// Current State for "First" Component render
const initialState = {
  movies: [
    { id: 1, name: "Interstellar" },
    { id: 2, name: "Harry Potter" },
  ],
};


const movieSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {
    addMovie: (state, action) => {
      const lastId =
        state.movies.length > 0 ? state.movies[state.movies.length - 1].id : 0;

      const newMovie = {
        id: lastId + 1,
        name: action.payload, // action.payload คือ ข้อมูลที่เราส่งไปเก็บไว้ใน store จากการใช้ dispatch
      };
      state.movies.push(newMovie);
    },
    removeMovie: (state, action) => {
      state.movies = state.movies.filter(
        (movie) => movie.id !== action.payload
      );
    },
  },
});

export const { addMovie, removeMovie } = movieSlice.actions;
export default movieSlice.reducer;

import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { removeMovie } from "../redux/movieSlice";

const MovieList = () => {
  const movies = useSelector((state) => state.moviesStore.movies);

  const dispatch = useDispatch();

  const handleRemoveMovie = (id) => {
    dispatch(removeMovie(id));
  };

  return (
    <div>
      <h1 className="text-5xl font-bold text-gray-900 mb-2">Movie List</h1>
      <div className="space-y-2">
        {movies.map((movie) => (
          <div key={movie.id} className="flex gap-4">
            <div className="text-2xl font-semibold">{movie.name}</div>
            <button
              onClick={() => handleRemoveMovie(movie.id)}
              className="px-4 py-2 text-sm font-semibold text-white/70  bg-red-800 hover:bg-red-900 rounded-3xl"
            >
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MovieList;

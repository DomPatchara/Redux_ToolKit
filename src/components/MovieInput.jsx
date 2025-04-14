import React from "react";
import { addMovie } from "../redux/movieSlice";
import { useDispatch } from "react-redux";
import { useState } from "react";

const MovieInput = () => {
  const dispatch = useDispatch();
  const [newMovie, setNewMovie] = useState("");

  const handleAddMovie = () => {
    if (newMovie) {
      dispatch(addMovie(newMovie));
      setNewMovie("");
    }
  };
  return (
    <div className="flex gap-2">
      <input
        onChange={(e) => setNewMovie(e.target.value)}
        value={newMovie}
        type="text"
        className="border-2 rounded-2xl focus:outline-none px-3 py-2"
      />
      <button
        onClick={handleAddMovie}
        className="px-4 py-2 bg-gray-900 rounded-2xl text-white/80 hover:bg-gray-800"
      >
        Add Movie
      </button>
    </div>
  );
};

export default MovieInput;

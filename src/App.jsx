import React, { useState, useEffect } from "react";
import { getDocs, collection, deleteDoc } from "firebase/firestore";
import Authentication from "./Components/auth";
import { db } from "./confi/firebase";
import Create from "./Components/Create";

function App() {
  const [movieList, setMovieList] = useState([]);
  const moviesCollectionRef = collection(db, "movies");
  //  taking the data from the database
  const getMoviesList = async () => {
    try {
      const data = await getDocs(moviesCollectionRef);
      const filteredData = data.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      console.log(filteredData);
      setMovieList(filteredData);
    } catch (err) {
      console.error(err);
    }
  };

  const deleteMovie = async (id) => {
    const movieDoc = doc(db, "movies", id);
    await deleteDoc(movieDoc);
  };

  useEffect(() => {
    getMoviesList();
  }, []);
  return (
    <>
      <Authentication />
      <Create />
      {/* List of movies */}
      <div>
        {movieList.map((movie) => (
          <div>
            <h2>{movie.title}</h2>

            <p> Date: {movie.releaseData}</p>
            <button onClick={() => deleteMovie(movie.id) }> Delete Movie</button>
          </div>
        ))}
      </div>
    </>
  );
}

export default App;

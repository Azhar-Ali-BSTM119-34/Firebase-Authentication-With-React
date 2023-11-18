import React, { useState, useEffect } from "react";
import { getDocs, collection } from "firebase/firestore";
import Authentication from "./Components/auth";
import { db } from "./confi/firebase";

function App() {
  const [movieList, setMovieList] = useState([]);

  useEffect(() => {
    // Assuming moviesCollectionRef is a reference to a Firestore collection
    const moviesCollectionRef = collection(db, "movies");

    const getMoviesList = async () => {
      try {
        const data = await getDocs(moviesCollectionRef);
        const filteredData = data.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
        }));
        movieList(filteredData);
      } catch (err) {
        console.error(err);
      }
    };

    getMoviesList();
  }, []);

  return (
    <>
      <Authentication />
      <div>
        {movieList.map((movie) => (
          <div>
            <h2>{movie.title}</h2>
            <p> Date: {movie.releaseData}</p>
          </div>
        ))}
      </div>
    </>
  );
}

export default App;

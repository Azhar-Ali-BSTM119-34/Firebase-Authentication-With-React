import React, { useState, useEffect } from "react";
import { getDocs, collection } from "firebase/firestore";
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
          </div>
        ))}
      </div>
    </>
  );
}

export default App;

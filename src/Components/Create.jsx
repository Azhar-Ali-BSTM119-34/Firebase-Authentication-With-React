import React, { useState } from "react";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../confi/firebase";

function Create() {
  const [newMovieTittle, setMovieTittle] = useState("");
  const [newReleaseDate, SetReleaseDate] = useState(0);
  const [newOscarCheck, setOscarCheck] = useState(false);

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

  const onSubmitMovie = async () => {
    try {
      await addDoc(movieCollectionRef, {
        Tittle: newMovieTittle,
        releaseDate: newReleaseDate,
        oscar: newOscarCheck,
      });
      getMoviesList();
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div>
      <h1>Create a movie</h1>
      {/* Add a miovie */}
      <div>
        <label htmlFor="movieTittle">Movie Tittle</label>
        <input
          type="text"
          placeholder="Movie Tittle"
          onChange={(e) => setMovieTittle(e.target.value)}
        />
        <label htmlFor="releaseDate">Release Date</label>
        <input
          type="number"
          placeholder="Release Date"
          onChange={(e) => SetReleaseDate(Number(e.target.value))}
        />
        <input
          type="checkbox"
          checked={newOscarCheck}
          onChange={(e) => setOscarCheck(e.target.checked)}
        />
        <label htmlFor="oscarCheck">Received an Oscar</label>
        <button onClick={onSubmitMovie}>Submit Movie</button>
      </div>
    </div>
  );
}
export default Create;

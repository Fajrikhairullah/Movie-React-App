import { TextField } from '@material-ui/core';
import { Autocomplete } from '@material-ui/lab';
import React, { useEffect, useState } from 'react';
import Movie from "./components/Movie";
import Search from "./components/Search";

const LIST_API = "https://5f50ca542b5a260016e8bfb0.mockapi.io/api/v1/movies";

function App() {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  const [errorMessage] = useState(null);
  const [searchValue, setSearchValue] = useState("");


  useEffect(() => {
    fetch(LIST_API)
      .then(res => res.json())
      .then(data => {
        setMovies(data);
        setLoading(false);
      });
  }, []);

  const searchHandler = value => {
    setSearchValue(value);
  };

  const updateSearch = movies.filter(m => {
    return m.title.toLowerCase().includes(searchValue);
  }, []);


  return (
    <div >

      <Autocomplete
        style={{ width: 300, padding: 20 }}
        options={movies.map((option) => option.title)}

        renderInput={(params) => (
          <TextField {...params} style={{ borderRadius: "5px" }} type="text" placeholder="Search " className="text-field" variant="outlined" />
        )}
      />
      <Search searchHandler={searchHandler} />

      <div className="movie-container">
        {loading && !errorMessage ? (
          <span>loading...</span>
        ) : errorMessage ? (
          <div>{errorMessage}</div>
        ) : (
              (searchValue === '' ? movies : updateSearch).map(m => (
                <Movie key={m.id} {...m} />
              ))
            )}
      </div>
    </div>
  );

}

export default App;

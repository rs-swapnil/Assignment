import Card1 from "./components/Card1"
import "./App.css"
import Navbar from "./components/Navbar"
import { useEffect, useState } from "react"
import ShowMovieDetails from "./components/ShowMovieDetails"
import { Routes, Route } from "react-router-dom"

function App() {

  const [movies, setMovies] = useState([])

  function fetchMovies(moviename) {
    fetch(`http://www.omdbapi.com/?s=${moviename}&apikey=1b4ecd2`)
      .then(res => res.json())
      .then(data => {
       
        if (data.Search)
          setMovies(data.Search)
        else
          setMovies([])
      })
      .catch(err => console.log(err))
  }

  useEffect(() => {
    fetchMovies("Harry")
  } , [])

  return (
    <div>
      <Navbar search={fetchMovies} />
      <Routes>
        <Route path="/" element={<div id="box">
          {movies.length == 0 ? <p>No Movies Found</p> : null}
          {movies.map((item, index) => {
            return <Card1 moviename={item.Title} image={item.Poster} id={item.imdbID} />
          })}
        </div>} />
        <Route path="/movie/:movieId" element={<ShowMovieDetails />} />
      </Routes>


    </div>
  )
}

export default App

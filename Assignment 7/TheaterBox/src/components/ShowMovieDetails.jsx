
import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"
export default function ShowMoviDetails() {
    const { movieId } = useParams();
    const [movie, setMovie] = useState(null)

    useEffect(() => {
        fetch(`http://www.omdbapi.com/?i=${movieId}&apikey=1b4ecd2`)
            .then(res => res.json())
            .then(data => {
                if (data.Error) {
                    setMovie(null)
                }
                else
                    setMovie(data)
            })
            .catch(err => console.log(err))
    }, [])

    return (
        <div>
            {
                movie != null ?
                    <div>
                        <img src={movie.Poster} />
                        <div className="moviedetails">
                            <h2>{movie.Title}</h2>
                            <h3>Description: {movie.Plot} </h3>
                            <h3>Genre: {movie.Genre}</h3>
                            <h3>Language : {movie.Language}</h3>
                            <h3>Director:   {movie.Director}</h3>
                        </div>
                    </div>
                    :
                    <h3> Movie not Found !!</h3>
            }

        </div>
    )
}
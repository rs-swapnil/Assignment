import { useState } from "react"
import { Link } from "react-router-dom"

export default function Navbar({search}) {

    const [movieName,setMovieName] = useState("")

    return (
        <nav>
            <Link to="/">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTm5-1gI3qGA288FwdCiYxMNlkyX-vtBKPFpA&amp;s" /> </Link>
            <h1>TheaterBox</h1>
            <div>
                <input onChange={ (e) => setMovieName(e.currentTarget.value) } id="moviename" type="text" placeholder="Enter movie name" />
                <button onClick={() => search(movieName)}  id="search">Search</button>
            </div>
        </nav>

    )
}
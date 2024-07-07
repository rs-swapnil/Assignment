
import{Link} from"react-router-dom"
export default function Card1({image,moviename,id})
{
    return(
        <Link to={`/movie/${id}`}>
        <div className="card">
            <img src={image} />
            <p>{moviename}</p>
        </div>
        </Link>
    )
}

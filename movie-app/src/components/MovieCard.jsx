import {FaHeart} from "react-icons/fa"

function MovieCard({movie}){

    function FavouriteMovie(){
        alert("clicked")
    }

    return(
        <div className="movie-card">
            <div className="movie-poster">
                <img src={movie.url} alt={movie.title}/>
            </div>
            <div className="movie-overlay">
                <button className="favorite-btn" onClick={FavouriteMovie}>
                        <FaHeart size={15} color="white"/>
                </button>
            </div>
            <div className="movie-info">
                <h3>{movie.title}</h3>
                <p>{movie.releaseDate}</p>
            </div>
        </div>
    )
}

export default MovieCard
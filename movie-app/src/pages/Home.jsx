import MovieCard from "../components/MovieCard"

function Home (){

    const movies =[
        {id:1,title:"jhon wick",releaseDate:"2024"},
        {id:2,title:"jhon wick2",releaseDate:"2025"},
        {id:3,title:"jhon wick3",releaseDate:"2026"}
    ]

    const handleSearch=()=>{

    };

    return (
        <div className="home">

            <form onSubmit={handleSearch} className="search-form">
                <input 
                    type="text"
                    placeholder="search for movies"
                    className="search-input"
                />
                <button type="submit" className="search-button">Search</button>
            </form>

            <div className="movies-grid">
                {movies.map((movie) => <MovieCard movie={movie} key={movie.id} />)}
            </div>
        </div>
    ) 
}



export default Home
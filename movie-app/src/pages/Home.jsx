import { useState } from "react";
import MovieCard from "../components/MovieCard"
import "../css/Home.css"


function Home (){

    const [searchQuery,SetSearchQuery] = useState("");

    const movies =[
        {id:1,title:"jhon wick",releaseDate:"2024"},
        {id:2,title:"Terminator",releaseDate:"2025"},
        {id:3,title:"Good Day to die hard",releaseDate:"2026"},
        {id:4,title:"good man",releaseDate:"2025"}

    ]

    const handleSearch=(e)=>{
        //for prevent alert from reload page everytime as this not support (SPA)
        e.preventDefault()
        alert(searchQuery)
        SetSearchQuery("")
    };

    return (
        <div className="home">

            <form onSubmit={handleSearch} className="search-form">
                <input 
                    type="text"
                    placeholder="search for movies"
                    className="search-input"
                    value={searchQuery}
                    onChange={(e)=> SetSearchQuery(e.target.value)}
                />
                <button type="submit" className="search-button">Search</button>
            </form>

            <div className="movies-grid">
                {movies.map((movie) => movie.title.toLowerCase().startsWith(searchQuery) && <MovieCard movie={movie} key={movie.id}/>)}
            </div>
        </div>
    ) 
}



export default Home
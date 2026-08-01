import { createContext, useState, useContext, useEffect } from "react";

const MovieContext = createContext()
// custom hook for use context in the components
 export const useMovieContext = () => useContext(MovieContext)

// context provider for provide the context to the children
export const MovieProvider = ({ children }) => {
  const [favorites, setFavorites] = useState([])
  // for get favorites from localStorage and set to state
  useEffect(()=>{
      const storedFavs = localStorage.getItem("favorites")
      if(storedFavs){
          setFavorites(JSON.parse(storedFavs))
      }
  },[])

  // for save favorites to localStorage
  useEffect(()=>{
      localStorage.setItem("favorites", JSON.stringify(favorites))
  },[favorites])

// for add movie to favorites
  const addToFavorites = (movie)=>{
    setFavorites(prev =>[...prev, movie])
  }
// for remove movie from favorites
  const removeFromFavorites = (movieId)=>{
    setFavorites(prev => prev.filter(movie => movie.id !==movieId))
  }
// for check if movie is favorite
  const isFavorite = (movieId)=>{
    return favorites.some(movie => movie.id === movieId)
  }

  // provide the value to the context
  const value = {
    favorites,
    addToFavorites,
    removeFromFavorites,
    isFavorite,
  }

  // provide the context to the children
  return (
      <MovieContext.Provider value={value}>
          {children}
      </MovieContext.Provider>
  )
}
import './css/App.css'
import Favorite from './pages/Favorites'
import Home from './pages/Home'
import Navbar from './components/NavBar'
import {Routes,Route} from 'react-router-dom'
import {MovieProvider} from './contexts/MovieContext'

function App() {

  // const MovieNumber =1;

  return (
    <MovieProvider>
      <Navbar/>
      <main className='main-content'>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/favorites' element={<Favorite/>} />
        </Routes>
      </main>
    </MovieProvider>
    )
}

export default App

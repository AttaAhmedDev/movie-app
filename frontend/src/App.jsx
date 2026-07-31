import './css/App.css'
import Favorite from './pages/Favorites'
import Home from './pages/Home'
import Navbar from './components/NavBar'
import {Routes,Route} from 'react-router-dom'


function App() {

  // const MovieNumber =1;

  return (
    <>
      <Navbar/>
      <main className='main-content'>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/favorites' element={<Favorite/>} />
        </Routes>
      </main>
    </>
    )
}

export default App

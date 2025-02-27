import { useEffect, useState } from "react"
import Search from "./components/Search.jsx"


const API_BASE_URL = 'https://api.themoviedb.org/3';

const API_KEY =import.meta.env.VITE_TMBD_API_KEY;


const API_OPTIONS = {
  method: 'GET',
  headers: {
    accept: 'aplication/json',
    Authorization: `Bearer ${API_KEY}`
  }

}

const App = ()=> {
  const [searchTerm, setSearchTerm] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const fetchMovies = async () => {
    try {

    } catch(error){
      console.error(`Error fetching movies: ${error}`)
    }
  }

  useEffect(()=>{

  }, [])
return(
<main> 

  <div className="pattern" /> 
 <div className="wrapper">
<header>

  <img src="./hero.png" alt="Hero Banner"/>
  <h1>Find <span className="text-gradient">Movies</span> You'll Enjoy Wihtout the Hassle</h1>

</header>
<Search searchTerm={searchTerm} setSearchTerm={setSearchTerm}/>
 </div>
  </main>
)

}

export default App

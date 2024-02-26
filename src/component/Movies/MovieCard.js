import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import { userLoginObj } from '../../contextApi/UserContext'
import "./MovieCard.css"

function MovieCard() {
  let {MovieList}=useContext(userLoginObj);
  return (
    <div className='MovieList'>
   {
    MovieList.map((movie,index)=>(
        <Link key={index} to={`/movie/movieList/${index}`} className="card-item" >
            <img src={movie.cover} alt={movie.name}/>
            <div className='card-content'>
            <h2>{movie.name}</h2>
            <p>{movie.time}</p>
            <button >View More</button> 
            </div>
        </Link>
    ))
   }
   </div>
   
  )
}

export default MovieCard
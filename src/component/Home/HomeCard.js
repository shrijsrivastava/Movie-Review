import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import { userLoginObj } from '../../contextApi/UserContext'
import "./HomeCard.css"
function HomeCard(props) {
    let {movie,Trend,Action}=useContext(userLoginObj);
  return (
   <div className='cont'>
   { props.type==="latest" ? ( movie.map((movie,index)=>(
        <Link key={index} to={`/movie/popular/${index}`} className="movie-card" style={{backgroundImage : `url(${movie.cover})`}}>
            <div className='movie-card-content'>
            <h2>{movie.name}</h2>
            <p>{movie.time}</p>
            <button>View More</button>  
            </div>
        </Link>
    ))) : props.type==="Drama" ? Trend.map((movie,index)=>(
        <Link key={index} to={`/movie/trend/${index}`} className="movie-card" style={{backgroundImage : `url(${movie.cover})`}}>
            <div className='movie-card-content'>
            <h2>{movie.name}</h2>
            <p>{movie.time}</p>
            <button>View More</button>  
            </div>
        </Link>
    )) : Action.map((movie,index)=>(
        <Link key={index} to={`/movie/action/${index}`} className="movie-card" style={{backgroundImage : `url(${movie.cover})`}}>
            <div className='movie-card-content'>
            <h2>{movie.name}</h2>
            <p>{movie.time}</p>
            <button>View More</button>  
            </div>
        </Link>
    ))
   }
    
      
   </div>
  )
}

export default HomeCard
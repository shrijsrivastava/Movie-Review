import React, { useContext} from 'react'
import { userLoginObj } from '../../contextApi/UserContext';
import { Link } from 'react-router-dom';
import "./Card.css"

function Card(props) {
    let {Trend ,Upcome}=useContext(userLoginObj);

  return (
  <div className='card'>
      
   {
    props.type==="trending"? (
    Trend.map((movie,index)=>(
        <Link key={index} to={`/movie/trend/${index}`} className="card-item" >
            <img src={movie.cover} alt={movie.name}/>
            <div className='card-content'>
            <h2>{movie.name}</h2>
            <p>{movie.time}</p>
            <button >View More</button> 
            </div>
        </Link>
    ))):(Upcome.map((movie,index)=>(
      <Link key={index} to={`/movie/upcoming/${index}`} className="card-item" >
          <img src={movie.cover} alt={movie.name}/>
          <div className='card-content'>
          <h2>{movie.name}</h2>
          <p>{movie.time}</p>
          <button >View More</button> 
          </div>
      </Link>
  )))
   }
   </div>
  )
}

export default Card
import React from 'react'
import './filmsPresentation.css'
export default function FilmsPresentation({films}) {
  return (
    <div className="container">
      {films.map((film)=>(
        <div className="column">
          <div className="card">
          <img src={film.Image}/>

            <h3>{film.Title}</h3>
            <div className="descr">
            <p className='year'>{film.Year}</p>
            <p className='nation'>{film.Nation}</p>
            </div>
          </div>
        </div>
      ))}      

    </div>
  )
}

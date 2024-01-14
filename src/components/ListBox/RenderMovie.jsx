import React from 'react'

const RenderMovie = ({movies, onHandleSelectMovies}) => {
  return (
    <div>
      <ul className="list">
                        {
                        
                            movies?.map((movie) => {
                                return (
                                    <li key={movie.imdbID} onClick={() => onHandleSelectMovies(movie)}>
                                        <img src={movie.Poster} alt={movie.Title} />
                                        <h3>{movie.Title}</h3>
                                        <div>
                                            <p>{movie.Year}</p>
                                            
                                        </div>

                                    </li>
                                )
                            })
                        }
                    </ul>
    </div>
  )
}

export default RenderMovie

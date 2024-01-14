import React from 'react'

const WatchedMovies = ({ movies, onHandleDelete }) => {
  
  return (
    <div>
      <ul className='list'>
        {
          movies?.map((movies) => {
            const { imdbID, imdbRating, Title, Year, Poster, runtime, userRating } = movies

            return (
              <li key={imdbID}>
                <img src={Poster} alt={Title} />
                <h3>{Title}</h3>
                <div>
                  <p>{Year}</p>

                  <p>
                    <span>⭐️</span>
                    <span>{imdbRating}</span>
                  </p>
                  <p>
                    <span>🌟</span>
                    <span>{userRating}</span>
                  </p>
                  <p>
                    <span>⏳</span>
                    <span>{runtime} min</span>
                  </p>
                </div>
                  <button
                    className="btn-delete"
                    onClick={() => onHandleDelete(movies)}
                  >
                    X
                  </button>

              </li>
            )
          })
        }
      </ul>
    </div>
  )
}

export default WatchedMovies;

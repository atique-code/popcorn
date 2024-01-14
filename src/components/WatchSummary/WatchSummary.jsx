import React, { useState } from 'react'
import WatchedMovies from './WatchedMovies';
import BtnComponent from '../BtnComponent/BtnComponent';


const average = (arr) =>{
   return arr.reduce((acc, cur, i, arr) => acc + cur / arr.length, 0);
}


const WatchSummary = ({ watched , onHandleDelete}) => {
// console.log(watched)
  const avgImdbRating = average(watched.map((movie) => movie.imdbRating));
  const avgUserRating = average(watched.map((movie) => movie.userRating));
  const avgRuntime = average(watched.map((movie) => movie.runtime));
  const [open, setOpen] = useState(true)

  return (
    <div className="box">
      <BtnComponent classname="btn-toggle" onclick={()=> setOpen(open=>!open )} >
{open ? '+' : '-' }

</BtnComponent>
      {open &&
      <>
        <div className='summary'>
          <h2>Movies you watched</h2>
          <div>
            <p>
              <span>#️⃣</span>
              <span> {watched.length }movies</span>
            </p>
            <p>
              <span>⭐️</span>
              <span>{avgImdbRating.toFixed(1)}</span>
            </p>
            <p>
              <span>🌟</span>
              <span>{avgUserRating}</span>
            </p>
            <p>
              <span>⏳</span>
              <span>{avgRuntime.toFixed()} min</span>
            </p>
          </div>

        </div>
      <WatchedMovies movies={watched} onHandleDelete={onHandleDelete}/>
      </>
      }

      
    </div>

  )
}

export default WatchSummary

import React, { useState } from 'react'

const SearchMovie = ({onHandleSearch}) => {
    const [movie, setMovie] = useState("")
    onHandleSearch(movie)

    // const inputEl = useRef(null)
    // useEffect(()=>{
    //   function callback(e){
    //     if(e.code == 'Enter')
    //     inputEl.current.focus()
    //   }
    //   // console.log(inputEl.current)

    //   document.addEventListener("keydown", callback)
    //   return () => document.addEventListener("keydown", callback)
    // },[])
  return (
    <div>
              
        <input className='search' type="text" placeholder="Search..." 
        value={movie}
         onChange={(e) => setMovie(e.target.value)} 
        //  ref={inputEl}
         />

    </div>
  )
}

export default SearchMovie

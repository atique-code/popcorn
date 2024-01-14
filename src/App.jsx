import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Navbar from "./components/Navbar"
import Main from "./components/Main/Main"
import ResultFound from "./components/ResultFound"
import ListOfMovies from './components/ListBox/ListOfMovies';
import WatchSummary from './components/WatchSummary/WatchSummary';
import RenderMovie from './components/ListBox/RenderMovie';
import MoviesDetail from './components/WatchSummary/MovieDetailSection/MoviesDetail';
import Loading from './components/Loading';
import "./app.css"


let KEY = 'f7f1209f'
function App() {
 
  const [Query, setSearchQuery] = useState('');// for search Movie/ search field//
  const [ApiMovies, setApiMovies] = useState([]) // it stores all the object of api in array//
  const [selectedMovie, setSelectedMovie] = useState() //here we are storing new object but in array//
  const [ data , setData] = useState([]) //it is an array which stores new object data//
  const [isOpen, setIsOpen] = useState(null) //first of all it is null, /* this state is used for Movie Detail section/Component when we click one time it shows MOvie Detail section and When we click double it show Watched Summary section*///
  const [tempObj , setTempObj] = useState('') //it store new object in this state. we add three things in new object userRating, imdbID which is random by Math.random() method, and runtime of movie means how much time movie takes to complete it is also create by Math.random()// 
  const [userRating, setUserRating] = useState(0) // this state is for movie rating that is given by user//
  const [isLoading, setIsLoading] = useState(false) // this state is used for loading purpose whenever api takes time it shows loading we have made a logic below//
  


  //this function is for Searching Query//
  function handleSearch(e){
    setSearchQuery(e)
  }

  //Ending Search Query Function here//

  //Start Selected Movies for rendering in watched Movies component//
  function handleSelectMovies(item) {
    // setIsOpen(item.imdbID)
    setUserRating(0)
    if(isOpen == item.imdbID){
      setIsOpen(null)
    }
    else{
      setIsOpen(item.imdbID)
      
    }
    let imdbRating = Number((Math.random()*((10 - 1) + 1)).toFixed(1));
    let runtime = Number((Math.random()*((200 - 100) + 100)).toFixed());
    
    let newObj = {...item , imdbRating, runtime, userRating} 
    
    console.log(newObj)
    setTempObj(newObj)
    
    setSelectedMovie(newObj)
    
  }
  // console.log(tempObj)
  //Select Movies function End here//
  
  function handleOpen(e){

    // console.log(e)
    setIsOpen(null)
    
    if(!data.map(item=> item.imdbID).includes(e.imdbID)){
     let temCompltObj = {...e , userRating}
     console.log(temCompltObj)
    setData((prev) => [...prev, temCompltObj])

  }
  
}
// console.log(data)


//Start Deleting movies //
  function handleDelete(e){
    
    setData(data.filter(item=> item.imdbID !== e.imdbID))
  }

  //end here this deleting function//


  ///fetching data through axios using useEffect hook//
  useEffect( () =>{
    const fetching = async() => {

      try{
       setIsLoading(true)
        let url = `http://www.omdbapi.com/?i=tt3896198&apikey=${KEY}&s=${Query}`;

       await axios.get(url).then((resp) =>{
          // console.log(resp.data.Search)
          setApiMovies(resp.data.Search)
          setIsLoading(false)
        })
        
      }
      catch(err) {
        console.log(err);
      }
      
    }
    fetching()
  }, [Query])
//End useEffect Hook Here//
// console.log(ApiMovies)
return (
  
  <div className="App">
      <Navbar onHandleSearch={handleSearch}>
        <ResultFound movies={ApiMovies} />
      </Navbar>
      <Main>
        <ListOfMovies >
       { isLoading ? <Loading/>:  
       <RenderMovie movies={ApiMovies} onHandleSelectMovies={handleSelectMovies}/>}
        </ListOfMovies>
        {
          isOpen  && selectedMovie ?
          <MoviesDetail watched={tempObj } closeByKeyAndButton={setIsOpen} existData={data} userStar={userRating} userSetStar={setUserRating} onHandleOpen={ handleOpen}/>
          :
        <WatchSummary watched={data} onHandleDelete={handleDelete}/>
        }
       
      </Main>

    </div>
  );
}

export default App;

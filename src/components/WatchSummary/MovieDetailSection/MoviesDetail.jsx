import React, { useEffect } from 'react'
import { RatingStar } from '../../StarsRating/StarsRating'

const MoviesDetail = ({ watched, onHandleOpen, existData, userStar, userSetStar , closeByKeyAndButton}) => {
    /*we use find method, find() check the condition that item is an object which is in array here the condition is please check the
     imdbID in object if it is available please return  and if the condition is passed then it will terminate*/
    const checkData = existData.find(item => item.imdbID == watched.imdbID)
    console.log(checkData)

    useEffect(function() {
        function callback(event){
            if(event.code === "Escape"){
                // onHandleOpen()
                closeByKeyAndButton(null)
                console.log("close")
            }
        }
        document.addEventListener("keydown",callback )
        return function() {
            document.removeEventListener("keydown", callback)
        }
    }, [onHandleOpen])

    return (
        <div className='details'>

            {
                <>
                    <header>
                        <button className="btn-back" onClick={() => closeByKeyAndButton(null)}>
                            &larr;
                        </button>
                        <img className='logo' src={watched?.Poster} />
                        <div className='details-overview'>
                            <h2>{watched?.Title}</h2>
                            <p>
                                <span>{watched?.Year}</span>
                            </p>
                        </div>
                    </header>
                    <section>
                        {
                            checkData ? <h2> you rated with movie {checkData?.userRating} 🌟</h2> :
                                <>
                                    <div className='rating'>
                                        {
                                            !checkData ?
                                                <>
                                                    <RatingStar rating={10} userSetStar={userSetStar} userStar={userStar} />
                                                    {userStar > 0 &&

                                                        <button className='btn-add' onClick={() => onHandleOpen(watched)}>+Add to list</button>
                                                    }
                                                </>
                                                :
                                                (
                                                    ""

                                                )

                                        }
                                    </div>
                                </>
                        }
                    </section>
                </>
            }
        </div>

    )
}

export default MoviesDetail

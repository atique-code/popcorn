import React, { useState } from 'react'
import BtnComponent from '../BtnComponent/BtnComponent';
// import RenderMovie from './RenderMovie'


const ListOfMovies = ({ children }) => {
    const [open, setOpen] = useState(true) // this state is used for toggle button to shoe or hide list of movies//
    return (

        <div className="box">

            <BtnComponent classname="btn-toggle" onclick={() => setOpen(open => !open)} >
                {open ? '+' : '-'}

            </BtnComponent>

            {open && children}

        </div>
    )
}

export default ListOfMovies;

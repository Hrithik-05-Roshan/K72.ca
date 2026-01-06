import React from 'react'
import { Link } from "react-router-dom";

const HomeBottomText = () => {
    return (
        <div className='font-[font2] flex items-center justify-center gap-5 '>
            <div className="uppercase border-3 h-20 flex items-center border-white rounded-full px-6 hover:border-[#D3FD50] hover:text-[#D3FD50] ">
                <Link className='text-[6.5vw] mt-5' to='/projects' >Projets</Link>
            </div>
            <div className="uppercase border-3 h-20 flex items-center border-white rounded-full px-6 hover:border-[#D3FD50] hover:text-[#D3FD50]">
                <Link className='text-[6.5vw] mt-5 ' to='/agence' >Agence</Link>
            </div>
        </div>
    )
}

export default HomeBottomText
import React from 'react'
import Video from './Video'

const HomeHeroText = () => {
  return (
    <div className='font-[font1] pt-2 text-center'>
        <div className='text-[9.5vw] uppercase leading-[9vw]  flex items-center justify-center'>L'étincelle</div>
        <div className='text-[9.5vw] uppercase leading-[9vw]  flex items-start justify-center'>qui <div className='h-[6.5vw] w-[16vw] rounded-full mt-2 overflow-hidden  '><Video /></div> génère</div>
        <div className='text-[9.5vw] uppercase leading-[9vw]  -mt-2 flex items-center justify-center'>la créativité</div>
    </div>
  )
}

export default HomeHeroText

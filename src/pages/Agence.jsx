import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'
import React, { useRef } from 'react'

const Agence = () => {
  
  gsap.registerPlugin(ScrollTrigger)

  const imgDivRef = useRef(null)
  const imageref =useRef(null)

  const imgArr = [
    '/images/Carl_480x640.jpg',
    '/images/Olivier_480x640.jpg',
    '/images/ChantalG_480x640.jpg',
    '/images/Michele_480X640.jpg',
    '/images/MEL_480X640.jpg',
    '/images/CAMILLE_480X640_2.jpg',
    '/images/MEGGIE_480X640_2.jpg',
    '/images/joel_480X640_3.jpg',
  ]

  useGSAP(function(){
    gsap.to(imgDivRef.current,{
      scrollTrigger:{
        trigger:imgDivRef.current,
        start:'top 24.5%',
        end : 'top -120%',
        pin:true,
        scrub:5,
        onUpdate:function(elem){

          let imageIndex;

          if (elem.progress<1) {
            imageIndex = Math.floor(elem.progress * imgArr.length)
          }
          else{
            imageIndex = imgArr.length-1
          }

          imageref.current.src = imgArr[imageIndex]
        }
      } 
    })
  })

  return (
    <div>
      <div className="section1">
        <div ref={imgDivRef} className="absolute h-[20vw] w-[15vw] rounded-3xl top-39 left-[30vw] overflow-hidden">
          <img ref={imageref} className='h-full w-full object-cover' src="/images/Carl_480x640.jpg" alt="" />
        </div>
        <div className='relative'>
          <div className='mt-[57vh] font-[font1]'>
            <h1 className='text-[20vw] text-center uppercase leading-[17vw] '>Soixan7e<br />Douze</h1>
          </div>
          <div className='pl-[40%] mt-1'>
            <p className='text-5xl font-[font1] '>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Notre curiosité nourrit notre créativité. On reste humbles et on dit non aux gros egos, même le vôtre. Une marque est vivante. Elle a des valeurs, une personnalité, une histoire. Si on oublie ça, on peut faire de bons chiffres à court terme, mais on la tue à long terme. C’est pour ça qu’on s’engage à donner de la perspective, pour bâtir des marques influentes.</p>
          </div>
        </div>
      </div>
      <div className="section2 h-screen ">
        
      </div>
    </div>
  )
}

export default Agence
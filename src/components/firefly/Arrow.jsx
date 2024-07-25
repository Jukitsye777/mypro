import React from 'react'
import Lottie from 'react-lottie'
import animationData from './arrow.json'
import './Arrow.css'

const Arrow = () => {

const arrow = {
    loop:true,
    autoplay:true,
    animationData:animationData,
    rendererSettings:{
        preserveAspectRatio: 'xMidYMid slice',
    }
}

  return (
    <div className="lottie-background">
   <Lottie options={arrow} />
  
 </div>
  )
}

export default Arrow

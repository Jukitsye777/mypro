import React from 'react'
import { Typewriter } from 'react-simple-typewriter'
import './Big.css'

const Big = () => {
  return (
    <div className='bigcontainer'>
        <h1 className='big' color=''>
        <Typewriter words={['Rendering','Visualizing','Delivering','Producing','Generating']}  loop={true} cursor cursorStyle='|' typeSpeed={70} deleteSpeed={70} delaySpeed={100} >

</Typewriter>



        </h1>
        
        <span>
        <Typewriter words={['Passion','Ideas','Concepts','Vision','Innovation']} loop={true} cursor cursorStyle='|' typeSpeed={70} deleteSpeed={70} delaySpeed={100} >

        </Typewriter>
        
        </span>
    
    </div>
  )
}

export default Big

import React from 'react'
import { Typewriter } from 'react-simple-typewriter';
import './Typewrite.css'
const Typewrite = () => {
  return (
    
       <div className='Type'>
<h1 style={{ left:'-100px',color:'white', position:'relative', top:'-40px' ,fontFamily:'Fira Code',fontWeight:'600', gap:'20%'}}>Hey There! I am a </h1>
      <span style={{color:'rgb(175, 71, 210)', position:'relative', left:'325px', top:'-103px' ,fontFamily:'Fira Code',fontWeight:'600', gap:'20%'}}> 
        <Typewriter
          words={['Student.','Developer.','Engineer.','Programmer.']}
          loop={true}
          cursor
          cursorStyle='|'
          typeSpeed={70}
          deleteSpeed={70}
          delaySpeed={100}
        />
      </span>
    </div>
    
  )
}

export default Typewrite

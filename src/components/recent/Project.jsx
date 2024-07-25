import React from 'react'
import './Project.css'
import project2 from './propics/project2.png'
import { Button } from '@nextui-org/react'
import git3 from './propics/git3.webp'

const Project = () => {
  return (
    <div className='projectcontainer'>
        <div className='projectcard'>

            <img className='img' src={project2}></img>
            <h1>CamTrack</h1>
            <div className='proliner'></div>
            <p>CamTrack is a Python project using OpenCV and MediaPipe to track and analyze cam feeds. It captures real-time video, measures distances to landmarks, and sends this data to a serial port, demonstrating skills in computer vision and real-time data processing.</p>
        
        <Button className='but'  variant='bordered'>Find
            <img className='gitimg' src={git3}></img>
        </Button>
        </div>
      
        <div className='projectcard'>

<img className='img' src={project2}></img>
<h1>CamTrack</h1>
<div className='proliner'></div>
<p>CamTrack is a Python project using OpenCV and MediaPipe to track and analyze cam feeds. It captures real-time video, measures distances to landmarks, and sends this data to a serial port, demonstrating skills in computer vision and real-time data processing.</p>

<Button className='but'  variant='bordered'>Find
<img className='gitimg' src={git3}></img>
</Button>
</div>


    </div>
  )
}

export default Project

import React from 'react'
import './Scroller.css'
import rr from './pictures/rr.webp'
import { Button } from '@nextui-org/react'
import Marquee from "react-fast-marquee";


import c from './pictures/c.png'
import frame from './pictures/frame.png'
import java from './pictures/java.png'
import python from './pictures/python.png'
import tail from './pictures/tail.png'
import ui from './pictures/ui.jpg'
import vite from './pictures/vite.jpg'




function Scroller() {
  return (
    <>
    <div className='horcontainer'>

      <Marquee gradient={false} gradientColor='black' pauseOnHover={true} speed={30} >
        <div className='symbol'>
        
        <div className='cardm'>
        <img src={rr} className='react'></img>
          <h1>React</h1>
        <div className='liner'></div>
        <p>React is a JavaScript library for building dynamic user interfaces with reusable components.</p>
        <Button className='jadf' color='rgb(175, 71, 210)'><a href="https://react.dev/">Explore</a></Button>

        



        </div>
        


        <div className='cardm'>
        <img src={c} className='react'></img>
          <h1>C#</h1>
        <div className='liner'></div>
        <p>C is a high-level, general-purpose programming language known for its efficiency</p>
        <Button className='jadf' color='rgb(175, 71, 210)'><a href="https://www.w3schools.com/cs/index.php">Explore</a></Button>

        



        </div>





        <div className='cardm'>
        <img src={vite} className='react'></img>
          <h1>Vite</h1>
        <div className='liner'></div>
        <p>Vite is a modern build tool for front-end development,known for its fast performance and efficiency.</p>
        <Button className='jadf' color='rgb(175, 71, 210)'><a href="https://vitejs.dev/">Explore</a></Button>

        



        </div>






        <div className='cardm'>
        <img src={java} className='react'></img>
          <h1>Java</h1>
        <div className='liner'></div>
        <p>Java is a high-level, object-oriented programming language designed for portability.</p>
        <a href="https://www.java.com/en/"></a>
        <Button className='jadf' color='rgb(175, 71, 210)'><a href="https://www.java.com/en/">Explore</a></Button>

        



        </div>



        
        </div>


 
        </Marquee>







    </div>
   
   
   
   
   
   
   
   
    <div className='horcontainer2'>

<Marquee className='marq' gradient={false} gradientColor='black' pauseOnHover={true} speed={30} direction='right' >
  <div className='symbol'>
  
  <div className='cardm'>
  <img src={python} className='react' style={{width:'55px'}}></img>
    <h1>Python</h1>
  <div className='liner'></div>
  <p>Python is widely used in web development, data analysis,machine learning, automation and reliability  .</p>
  <Button className='jadf' color='rgb(175, 71, 210)'><a href="https://www.python.org/">Explore</a></Button>

  



  </div>
  


  <div className='cardm'>
  <img src={ui} className='react'></img>
    <h1>NextUI</h1>
  <div className='liner'></div>
  <p>NextUI is a React component library that provides a set of customizable and accessible UI components.</p>
  <Button className='jadf' color='rgb(175, 71, 210)'><a href="https://nextui.org/">Explore</a></Button>

  



  </div>





  <div className='cardm'>
  <img src={tail} className='react'></img>
    <h1>TailWind</h1>
  <div className='liner'></div>
  <p>Tailwind CSS is a utility-first CSS framework that provides low-level utility classes. Custom CSS.</p>
  <Button className='jadf' color='rgb(175, 71, 210)'><a href="https://tailwindcss.com/">Explore</a></Button>

  



  </div>






  <div className='cardm'>
  <img src={frame} className='react'></img>
    <h1>FM</h1>
  <div className='liner'></div>
  <p>Framer Motion is a popular animation library for React that provides an intuitive API and animation</p>
  <Button className='jadf' color='rgb(175, 71, 210)'><a href="https://www.framer.com/">Explore</a></Button>

  



  </div>



  
  </div>



  </Marquee>







</div>
   
   
   
   
   
   
   
   
   
   
   
   
    </>

























  )
}

export default Scroller

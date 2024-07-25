import React from 'react'

import Typewrite from './Typewrite';

import './Cardl.css'
import { color } from 'framer-motion';

import face from './cardpics/face.png'
import insta from './cardpics/insta.webp'
import git from './cardpics/git.png'
import webp from './cardpics/webp.webp'
import you from './cardpics/you.webp'
import twit2 from './cardpics/twit2.png'
import snap from './cardpics/snap.webp'
import me from './cardpics/me.jpg'
import linked from './cardpics/linked.webp'


function Cardl() {








  return (
    <div className='wrapper'>
    <div className='glow'></div>
    <div className='cardcontainer' >

    

    <div class="relative h-full w-full flex items-center justify-center" style={{position:'relative', width:'fit-content',height:'fit-content',top:'4%',left:'2%'}}>
  <div class="profileCard_container relative p-10 border-2 border-dashed rounded-full border-spacing-4 border-gray-400/50">
    <button class="profile_item left-[45px] -top-[4px] absolute rounded-full bg-cover cursor-pointer border border-gray-400/50 p-[2px] active:scale-95 hover:scale-95 transition-all duration-500">
      <span class="block w-[40px] h-[40px] transition-all duration-500 rounded-full z-[2] bg-white p-1">
        <img src={face}></img>
      </span>
    </button>

    <button class="profile_item right-[45px] -top-[4px] absolute rounded-full bg-cover cursor-pointer border border-gray-400/50 p-[2px] active:scale-95 hover:scale-95 transition-all duration-500">
      <span class="block w-[40px] h-[40px] transition-all duration-500 rounded-full z-[2] bg-white p-1">
       
       
       <img src={insta}></img>
       

       </span>
    </button>

    <button class="profile_item -left-4 top-20 absolute rounded-full bg-cover cursor-pointer border border-gray-400/50 p-[2px] active:scale-95 hover:scale-95 transition-all duration-500">
      <span class="block w-[40px] h-[40px] transition-all duration-500 rounded-full z-[2] bg-white p-1" style={{overflow:'hidden'}}>
        


<img src={you}></img>

      </span>
    </button>

    <button class="profile_item -right-4 top-20 absolute rounded-full bg-cover cursor-pointer border border-gray-400/50 p-[2px] active:scale-95 hover:scale-95 transition-all duration-500">
      <span class="block w-[40px] h-[40px] transition-all duration-500 rounded-full z-[2] bg-white p-1" style={{overflow:'hidden'}}>


<img src={twit2}></img>


      </span>
    </button>

    <button class="profile_item bottom-8 -left-0 absolute rounded-full bg-cover cursor-pointer border border-gray-400/50 p-[2px] active:scale-95 hover:scale-95 transition-all duration-500">
      <span class="block w-[40px] h-[40px] transition-all duration-500 rounded-full z-[2] bg-white p-1">
       

       <img src={git}></img>
      </span>
    </button>

    <button class="profile_item bottom-8 -right-0 absolute rounded-full bg-cover cursor-pointer border border-gray-400/50 p-[2px] active:scale-95 hover:scale-95 transition-all duration-500">
      <span class="block w-[40px] h-[40px] transition-all duration-500 rounded-full z-[2] bg-white p-1">
    

    <img src={webp}></img>
      </span>
    </button>

    <button class="profile_item right-[40%] -bottom-4 absolute rounded-full bg-cover cursor-pointer border border-gray-400/50 p-[2px] active:scale-95 hover:scale-95 transition-all duration-500" >
      <span class="block w-[40px] h-[40px] transition-all duration-500 rounded-full z-[2] bg-white p-1" style={{overflow:'hidden'}}>
       <img src={linked}></img>
      </span>
    </button>

    <button class="profile_item w-[200px] h-[200px] p-1 border-2 rounded-full hover:border-gray-400/50 cursor-pointer transition-all duration-500 z-0" style={{background:'white'}}>
      <div class="w-full bg-white h-full flex items-center justify-center p-2 rounded-full active:scale-95 hover:scale-95 object-cover transition-all duration-500">
        <span class="w-70 h-70 inline-block" >
         
<img src={me}></img>

        </span>
      </div>
    </button>
  </div>
</div>




      
      
      

  
    
 <Typewrite/>

 <div className='aboutcontainer' style={{position:'absolute', top:'21%', left:'27%', margin:'2%'}}><a className='a'> <span></span>
 <span></span>
 <span></span>
 <span></span>

  <h1 className='heading' style={{position:'relative', padding:'1px', fontSize:'30px', fontWeight:'700px', color:'white'}}>About Me</h1>
  <div className='underline' style={{width:'145px', height:'4px', background:'rgb(175, 71, 210)'}}></div>
  <div className='about' style={{position:'relative',textAlign:'centre', padding:'5px', top:'6px', color:'white'}}>Hey guys! I'm Jaice,<br/> an aspiring software engineer currently pursuing a Bachelor of Technology in Computer Science. I have a passion for designing and creating web applications. I love bringing ideas to life through code and continuously learning new technologies to enhance my skills. Welcome to my journey in the world of software engineering!</div>
  </a>
   </div>
    </div>
    
    </div>
    
  )
}

export default Cardl

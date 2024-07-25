import React, { Children } from 'react'
import Nav from '../navbar/Nav'
import Cardl from '../card/Cardl'
import Button from '../connect/Button'
import Firefly from '../firefly/Firefly'
import Arrow from '../firefly/Arrow'
import Scroller from '../horizontal/Scroller'
import Writing from '../horizontal/Writing'
import Big from '../bigword/Big'
import Bigline from '../bigword/Bigline'
import Project from '../recent/Project'
import Prowriting from '../recent/Prowriting'
import Follow from '../follow/Follow'
import { ScrollShadow } from '@nextui-org/react'


import './Background.css'


import { motion,useScroll } from 'framer-motion'


const Background = () => {

  const { scrollYProgress } = useScroll();


  return (
    
    
<>




    <div className='background'  style={{ background:'black',height:'400vh', width:'fit-content', display:'flex',flexDirection:'column', position:'relative'}}>
    <motion.div
    
        className="progress-bar"
        style={{ scaleX: scrollYProgress }}
      />
      
<Nav/>
<Cardl id="home"/>
<Firefly/>
<Button/> 
<Arrow/>
<Writing/>
<Scroller id="materials"/>
<Big/>
<Bigline/>
<Prowriting/>
<Project/>
<Follow/>





    </div>
    
    </>
    
  )
}

export default Background

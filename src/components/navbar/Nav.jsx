import React, { useRef } from "react";
import { Navbar,NavbarBrand,NavbarContent,NavbarItem,Link,Button } from "@nextui-org/react";
import './Nav.css'
import wh from './navpics/wh.png'



function Nav({ onLinkClick }) {




  const handleLinkClick = (section) => {
    if (onLinkClick) {
      onLinkClick(section);
    }
  };



  return (
    <>
   
    <Navbar className='bg-black lg:w-[52%] w-[70%] lg:left-[24%] left-[15%]  lg:rounded-[22px] rounded-[14px] border border-white lg:top-[0.5%] top-[2%]'  shouldHideOnScroll={true} isBordered={true}  isBlurred={true}  >


<NavbarBrand style={{ width:'fit-content', height:'fit-content' ,overflow:'hidden'}} >
  <img src={wh} style={{width:'40px', height:'40px' }}></img>

</NavbarBrand>


<NavbarContent className="relative lg:right-[16%] flex-row lg:gap-[70px] right-[1%] gap-[7px] " >

<NavbarItem className="navitem">

<Link className="linkname">
Home
</Link>

</NavbarItem>



<NavbarItem className="navitem">

<Link className="linkname">
<a href="#materials" onClick={() => onLinkClick('materials')}>Materials</a></Link>

</NavbarItem>



<NavbarItem className="navitem">

<Link className="linkname">
Projects
</Link>

</NavbarItem>




<NavbarItem className="navitem">

<Link className="linkname">
Copyright
</Link>

</NavbarItem>



</NavbarContent>





    </Navbar>





  



    </>
  )
}

export default Nav

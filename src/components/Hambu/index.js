import React,{useState} from 'react';
import './hambu.css'
import {Link} from 'react-scroll';
import { Turn as Hamburger } from 'hamburger-react'

function Navbar() {
    const [isOpen, setOpen] = useState(false)

  return (
   <div className="ham" >
     <div className="ham1">
     <Hamburger toggled={isOpen} toggle={setOpen} />
</div>
    <nav className={isOpen ? 'hamv-act' : 'hamv'}>
     <ul className="hnav">
         <Link to="sob" smooth={true} className="hna1">Sobre mim</Link>
         <Link to="ser" smooth={true} className="hna2">Serviços</Link>
         <Link to="haab1" smooth={true} className="hna3">Habilidades</Link>
     </ul>
     </nav>
   </div>
  );
}

export default Navbar;
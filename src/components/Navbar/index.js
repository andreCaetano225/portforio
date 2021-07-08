import React from 'react';
import '../../App.css'
import {Link} from 'react-scroll';

function Navbar() {
   
  return (
   <div className="navbar" id="home">
     <h1 className="nome">{'{André Sousa}'}</h1>
     
     <ul className="ul">
      <Link to="sob" smooth={true} className="nav1">Sobre mim</Link>
      <Link to="servicos"smooth={true} className="nav2">Serviços</Link>
      <Link  to="habi" smooth={true} className="nav3">Habilidades</Link>
      <Link  to="proje" smooth={true} className="nav4">Projetos</Link>
     </ul>
     
   </div>
  );
}

export default Navbar;

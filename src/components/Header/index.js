import React, {useEffect} from 'react';
import './header.css';
import Linkedin from './linkedin.svg';
import Aos from 'aos';
import 'aos/dist/aos.css';
import Typing from 'react-typing-animation';
function Header() {
  
     useEffect(() => {
     Aos.init({duration:1000});
     }, []);
 
    return (
    <div className="header" id="header">
      <div data-aos="fade-down" >
        <p className="p" >
          Olá, eu sou o
          <h1 className="h1k">André Sousa</h1>
          <Typing>
          <Typing.Delay ms={1900} />
          <Typing.Speed ms={90} />
          Desenvolvedor Front-End e UI Designer.
          </Typing>
        </p>
       <a href="https://www.linkedin.com/in/andre-sousa-8aaa8a170/" target="_BLANK"><button className="bu">
         <img src={Linkedin} className="link1"/>
          Linkedin</button></a>
       </div>
   </div>
   
  );
}

export default Header;

import React, {useState, useEffect}from 'react';
import './bhome.css';
import  Trian from './trian.svg';
import Aos from 'aos';
import 'aos/dist/aos.css';
import {Link} from 'react-scroll';
function Bhome(){
    const [btnsh,setBtnsh] = useState(false);

    const buttonOK = () => {
        if(window.scrollY >=900) {
            setBtnsh(true);
        }
        else{
            setBtnsh(false);
        }
    }
    window.addEventListener('scroll',buttonOK)
    Aos.init();
    return(
        <div >
       <Link to="home" smooth={true}><button className={btnsh ? 'actv' : 'btnsh'} data-aos="flip-up">
              <img src={Trian} className="tri"/>
          </button>
          </Link> 
        </div>
    )
}

export default Bhome;
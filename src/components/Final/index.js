import React from 'react';
import './final.css'
import Github from './github.svg';
import Whatsapp from './whatsapp.svg';
import Linkedin from './linkedin.svg';
function Final () {
    return(
        <div className="final">
            <p className="pfinal">
            © 2020. construído com cuidado por André Sousa
            </p>
            <div>
            <a href="https://www.linkedin.com/in/andre-sousa-8aaa8a170/" target="_BLANK"><img src={Linkedin} className="fimg"/></a>
           <a href="https://api.whatsapp.com/send?phone=5588988665252&text=Ol%C3%A1%20Andr%C3%A9%20vamos%20conversar%20%3F" target="_BLANK"><img src={Whatsapp} className="fimg1"/></a>
           <a href="https://github.com/andreCaetano225" target="_BLANK"><img src={Github} className="fimg2"/></a>
            </div>
        </div>
    )
}
export default Final;
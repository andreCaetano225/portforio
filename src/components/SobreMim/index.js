import React, {useEffect}from 'react';
import Avatar from './avatar.svg';
import WhatsApp from './whatsapp.svg';
import Github from './github.svg';
import Aos from 'aos'
import 'aos/dist/aos.css';
import './sobre.css';

function SobreMim(){
    useEffect(() => {
        Aos.init({duration:2000});
        }, []);
    return(
        <div className="sobrem" id="sob">
            <div data-aos="fade-up">
        <img src={Avatar} className="img"/>
        </div>
        <div className="text" data-aos="fade-up">
        <h1 className="h1s">Sobre mim</h1>
        <p className="p1s">
        Meu nome é André, tenho 20 anos e moro no Brasil. <br/>
        Atualmente estou cursando sistema de informação no <br/>
        Centro Universitário de Juazeiro do Norte. <br/>
        <br/>
        O interesse pelo Desenvolvimento Front End começou <br/>
        em Abril de 2020. Desde então me dedico todos os dias <br/>
        cerca de 7 horas por dia aos estudos e desafios, sempre <br/>
        conhecendo e testando novas tecnologias.
        </p>
        <a href="https://api.whatsapp.com/send?phone=5588988665252&text=Ol%C3%A1%20Andr%C3%A9%20vamos%20conversar%20%3F" target="__BLANK"><button className="btns">
            <img className="imgs" src={WhatsApp}/>
            WhatsApp
            </button></a> 
            <a href="https://github.com/andreCaetano225" target="_BLANK"><button className="btns1">
                <img className="imgs1" src={Github}/>
            GitHub
            </button></a>
            </div>
        </div>
    )
}

export default SobreMim;
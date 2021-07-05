import React, {useEffect} from 'react';
import Laptop from './laptop .svg';
import Celular from './celular.svg';
import Ui from './ui.svg';
import './servicos2.css';
import Aos from 'aos'
import 'aos/dist/aos.css';

function Servicos1(){
    useEffect(() => {
        Aos.init({duration:2000});
        
        }, []);
     
        //  ||  || 
    return(
        <div className="ser" id="ser">
            <h1 className="h1se6">Serviços</h1>
            <div className="serv1" data-aos="fade-up" data-aos-delay="1000" >
                <img src={Laptop} className="lap1"/>
                <h1 className="h1se1">Criação de Sites</h1>
                <p className="p1se1">
                Desenvolvimento de
                sites profissionais,
                sistemas web,blogs 
                e muito mais.
                </p>
            </div>
            <br/>
            <div className="serv2" data-aos="fade-up" data-aos-delay="1500">
                <img src={Celular} className="lap1"/>
                <h1 className="h1se12">Sites responsivos</h1>
                <p className="p1se2">
                Criação de Sites
                responsivos para a
                melhor visualização
                em todas as resoluções.
                </p>
            </div>
            <br/>
            <div className="serv3"data-aos="fade-up" data-aos-delay="2000" >
                <img src={Ui} className="lap1" />
                <h1 className="h1se13">Ui Design</h1>
                <p className="p1se3">
                Layouts profissionais
                que se adequam ao seu 
                negócio.
                </p>
            </div>
        </div>
    )
}

export default Servicos1;
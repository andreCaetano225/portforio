import React, {useEffect} from 'react';
import Laptop from './laptop .svg';
import Celular from './celular.svg';
import Ui from './ui.svg';
import './servicos.css';
import Aos from 'aos'
import 'aos/dist/aos.css';

function Servicos(){
    useEffect(() => {
        Aos.init({duration:2000});
        
        }, []);
     
    return(
        <div className="servi" id="servicos">
            <h1 className="h1se">Serviços</h1>
            <div className="servi1" data-aos="fade-left" data-aos-delay="800">
                <img src={Laptop} className="lap"/>
                <h1 className="h1se11">Criação de Sites</h1>
                <p className="p1se1">
                Desenvolvimento de
                sites profissionais,
                sistemas web,blogs 
                e muito mais.
                </p>
            </div>
            <div className="servi2" data-aos="fade-left" data-aos-delay="1500">
                <img src={Celular} className="lap"/>
                <h1 className="h1se12">Sites responsivos</h1>
                <p className="p1se2">
                Criação de Sites
                responsivos para a
                melhor visualização
                em todas as resoluções.
                </p>
            </div>
            <div className="servi3" data-aos="fade-left" data-aos-delay="2000">
                <img src={Ui} className="lap"/>
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

export default Servicos;
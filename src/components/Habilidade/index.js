import React, {useEffect} from 'react';
import Atom from './atom.svg';
import Boo from './boo.svg';
import Uii from './uii.svg';
import Js from './js.svg';
import Html from './html.svg';
import Css from './css.svg';
import './habi.css';
import Aos from 'aos'
import 'aos/dist/aos.css';

function Habilidades(){
    useEffect(() => {
        Aos.init({duration:2000});
        
        }, []);
     
    return(
        <div className="habi" id="habi">
            <h1 className="h1ha">Habilidades</h1>
            <div className="ju">
            <div className="ha1" data-aos="fade-left" data-aos-delay="1000">
                <img src={Html} className="hi"/>
                <h1 className="h1ha1">HTML</h1>
                <p className="p1ha">
                1 ano e 5 meses de experiência
                </p>
            </div>
            <div className="ha2" data-aos="fade-left" data-aos-delay="1200">
                <img src={Css} className="hi"/>
                <h1 className="h1ha12">CSS</h1>
                <p className="p1ha2">
                1 ano e 5 meses de experiência
                </p>
            </div>
            <div className="ha3" data-aos="fade-left" data-aos-delay="1400">
                <img src={Js} className="hi"/>
                <h1 className="h1ha13">JavaScript</h1>
                <p className="p1ha3">
                1 ano de experiência
                </p>
            </div>
            <div className="ha4" data-aos="fade-left" data-aos-delay="1600">
                <img src={Atom} className="hi"/>
                <h1 className="h1ha14">React JS</h1>
                <p className="p1ha4">
                5 meses de experiência
                </p>
            </div>
            <div className="ha5" data-aos="fade-left" data-aos-delay="1800">
                <img src={Boo} className="hi"/>
                <h1 className="h1ha15">Bootstrap</h1>
                <p className="p1ha5">
                5 meses de experiência
                </p>
            </div>
            <div className="ha6" data-aos="fade-left" data-aos-delay="2000">
                <img src={Uii} className="hi"/>
                <h1 className="h1ha16">Ui Design</h1>
                <p className="p1ha6">
                3 meses de experiência
                </p>
            </div>
            </div>
        </div>
    )
}

export default Habilidades;
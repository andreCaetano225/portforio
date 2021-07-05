import React, {useEffect} from 'react';
import Atom from './atom.svg';
import Boo from './boo.svg';
import Uii from './uii.svg';
import Js from './js.svg';
import Html from './html.svg';
import Css from './css.svg';
import './habi2.css';
import Aos from 'aos'
import 'aos/dist/aos.css';
// data-aos="fade-left" data-aos-delay="1000" ||  data-aos="fade-left" data-aos-delay="1500" || data-aos="fade-left" data-aos-delay="2000" || data-aos="fade-left" data-aos-delay="2500"
// data-aos="fade-left" data-aos-delay="2800" || data-aos="fade-left" data-aos-delay="3000"

function Habilidades2(){
    useEffect(() => {
        Aos.init({duration:2000});

        }, []);
     
        return(
            <div className="habi2" id="haab1">
                <h1 className="habii2">Habilidades</h1>
                <div className="habili" data-aos="fade-left" data-aos-delay="800">
                    <img src={Html} className="lap"/>
                    <h1 className="h1se1">HTML</h1>
                    <p className="p1se4">
                    1 ano e 5 meses de experiência
                    </p>
                </div>
                <div className="habili1" data-aos="fade-left" data-aos-delay="1000">
                    <img src={Css} className="lap"/>
                    <h1 className="h1se1">CSS</h1>
                    <p className="p1se5">
                    1 ano e 5 meses de experiência
                    </p>
                </div>
                <div className="habili2" data-aos="fade-left" data-aos-delay="1200">
                    <img src={Js} className="lap"/>
                    <h1 className="h1se1">JavaScript</h1>
                    <p className="p1se6">
                    1 ano de experiência
                    </p>
                </div>
                <div className="habili3" data-aos="fade-left" data-aos-delay="1400">
                    <img src={Atom} className="lap"/>
                    <h1 className="h1se1">React JS</h1>
                    <p className="p1se7">
                    5 meses de experiência
                    </p>
                </div>
                <div className="habili4" data-aos="fade-left" data-aos-delay="1600">
                    <img src={Boo} className="lap"/>
                    <h1 className="h1se1">Bootstrap</h1>
                    <p className="p1se8">
                    3 meses de experiência
                    </p>
                </div>
                <div className="habili5" data-aos="fade-left" data-aos-delay="1800">
                    <img src={Uii} className="lap"/>
                    <h1 className="h1se1">Ui Design</h1>
                    <p className="p1se9">
                    3 meses de experiência
                    </p>
                </div>
            </div>
        )
}

export default Habilidades2;
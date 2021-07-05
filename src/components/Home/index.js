import React from 'react';
import Header from '../Header';
import Navbar from '../Navbar';
import Bhome from '../Bhome';
import Sobremim from '../SobreMim';
import Servicos from '../Servicos';
import Habilidade from '../Habilidade';
import Hambu from '../Hambu';
import Final from '../Final';
import Servicos2 from '../Servicos2';
import Habilidades2 from '../Habilidade2';
function Home (){
    return(
     <div>
     <Navbar/>
     <Hambu/>
     <Bhome/>
     <Header/>
     <Sobremim/>
     <Servicos/>
     <Servicos2/>
     <Habilidade/>
     <Habilidades2/>
     <Final/>
    </div>
    )
}
export default Home;
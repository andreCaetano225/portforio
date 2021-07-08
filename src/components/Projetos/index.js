/* eslint-disable react/jsx-no-target-blank */
import React from 'react';
import {Proj} from './styles';
import Port from './meuport.png';
import Github from './github2.png';
import Poke from './poke.png';
import Git from './github.svg';
export const Projeto = () => {
    return(
        <Proj>
          <h1>Projetos</h1>
          <section id="proje">
            <div>
                <a href="https://github.com/andreCaetano225/portfolio2.0" target="_blank">
                <img src={Port}/>
                <p>
                    <h3>Site Pessoal</h3>
                    <strong>Meu portfólio onde fiz utilizando ReactJS e
                       meu primeiro projeto pessoal.</strong>
                </p>
                <img className="imgsvg" src={Git}/>
                </a>
            </div>
            <div>
            <a href="https://github.com/andreCaetano225/api-github" target="_blank">

                <img src={Github}/>
                <p>
                    <h3>Lista de Repositórios</h3>
                    <strong>Projeto utilizando API do GitHub, fiz 
                      uma lista de repositórios.</strong>
                </p>
                <img className="imgsvg" src={Git}/>
                </a>
            </div>
            <div>
            <a href="https://github.com/andreCaetano225/poke-dex" target="_blank">

                <img src={Poke}/>
                <p>
                    <h3>PokeDex</h3>
                    <strong>Projeto utilizando API PokeAPI, fiz 
                    uma pokedex com mais de 100 pokemons..</strong>
                </p>
                <img className="imgsvg" src={Git}/>
             </a>
            </div>
            </section>
        </Proj>
    )
}
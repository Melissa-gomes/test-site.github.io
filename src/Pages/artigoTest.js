import React from 'react';
import './artigo.css';
import ai from './images/ai.jpg';
import faceZago from './images/faceZago.jpeg';
import linkedin from './images/linkedin.png';
import github from './images/gitHub.png';
import logo from './images/aaa.png';
import data from './data';

class artigo extends React.Component {
  render() {
    return(
      <div>
        <div className="nav">
          <nav>
            <div className="log">
              <img src={logo} alt="logo" />
              <h1>Mind Tech</h1>
            </div>
            <p>Por: Lucas Zago de Oliveira</p>
          </nav>
        </div>
        <div className="artigo">
          <article>
            <h1>{data.titulo}</h1>
            <h3>{data.subtitulo}</h3>
            <p className="publicado">{data.publicado}</p>
            <img src={ai} alt="inteligencia artificial" />
            <p>{data.artigo}</p>
          </article>
        </div>
        <div className="aboutAuthor">
          <img src={faceZago} alt="author face" />
          <div className="escrito">
            <p>Escrito por:</p>
            <p>Lucas Zago de Oliveira</p>
          </div>
          <div className="redes">
            <a href="https://github.com/luc-zago"><img className="link" alt="linkedin" src={github}/></a>
            <a href="https://www.linkedin.com/in/lucas-zago-de-oliveira/"><img className="link" alt="linkedin" src={linkedin}/></a>
          </div>
        </div>
      </div>
    )
  }
};

export default artigo;
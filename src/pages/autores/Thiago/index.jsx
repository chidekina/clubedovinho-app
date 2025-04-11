import "./styles.scss";
import * as React from 'react';



export default function Thiago() {
  return <>

    <div className="pages-thiago">
      
      <div className="row">
      <div className="bolhas"></div>
        <div className="col">
          <h2>olá, me chamo</h2>
          <h1>Thiago arruda</h1>
          <h2>Desenvolvedor Fullstack</h2>
          <div className="spans">
            <a href="www.linkedin.com/in/thiagoarruda09"><div>Mais sobre mim</div></a><a href="https://github.com/Thiagoarruda09?tab=repositories"><div>Portifólio</div></a>
            </div>
        </div>
        <div className="col">
          <img src="/public/thiago.jpeg" alt="" />
          <div className="bolhas"></div>
        </div>


      </div>


    </div>
  </>

}

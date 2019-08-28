import React from "react";
import './Page404.css';
import {Link} from 'react-router-dom';

function Page404({ location }) {
  return(
    <section className="page-404-container">
      <header className="page-404-header">
        <h1>404</h1>
        <h3>
          Provavelmente não era essa a página que você procurava
        </h3>
      </header>

      <p className="page-404-description">
        Nenhum resultado encontrado para <code>{location.pathname}</code>.
        Essa página pode ter sido removida, ou nunca ter existido... ¯\_(ツ)_/¯
      </p>

      <Link to="/" className="go-back" >Voltar ao início</Link>
    </section>
  );
}

export default Page404;
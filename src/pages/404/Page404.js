import React from "react";
import './Page404.css';

function Page404({ location }) {
  return(
    <section className="page-404-container">
      <header className="page-404-header">
        <h1>404</h1>
        <h3>
          Provavelmente não era essa a página que você procurava...
        </h3>
      </header>

      <p className="page-404-description">
        Nenhum resultado encontrado para <code>{location.pathname}</code>
      </p>
    </section>
  );
}

export default Page404;
import React from 'react';
import './ItsAMatch.css';

const ItsAMatch = ({ matchDev, dismissView }) => {
  return(
    <section className="match-container" >
      <p className="match-title">Deu Match!</p>
      <div className="match-image">
        <img src={matchDev.avatar} alt="match" />
      </div>
      <strong className="match-name">{matchDev.name}</strong>
      <p className="match-bio">{matchDev.bio}</p>
      <button
        type="button"
        onClick={dismissView} >
          fechar
      </button>
    </section>
  );
};

export default ItsAMatch;
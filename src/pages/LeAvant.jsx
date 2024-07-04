import React from "react";
import "../styles/LeAvant.css";
import graphpageleavant from "../assets/graphique/graphpageleavant.png";

const LeAvant = () => {
  return (
    <div className="body-le-avant">
    <div className="avant-container">
      <h2 className="title-avant">Le Avant</h2>
      <h3 className="you-are-not-alone">Vous n’êtes pas seul !</h3>
      <img src={graphpageleavant} alt="graphique" />
      <h3 className="what-you-need-to-know">Ce qu’il faut savoir :</h3>
      <h4>1. Préparer l’absence :</h4>
      <p>Décider d'un commun accord des modalités de remplacement</p>
      <p>Participer au recrutement et à la formation du remplaçant</p>
      <p>
        Décider d'un commun accord des modalités de contact/non contact pendant l’absence
      </p>
      <h4>2. Anticiper le retour :</h4>
      <p>
        Anticiper (sous forme contractuelle) les conditions de retour (date,
        organisation, périmètre, etc.)
      </p>
      <h4>3. Investir la démarche RH :</h4>
      <p>
        Informer et expliquer aux cadres (modalités du congé, lois et droits,
        retours d’expérience, attentes de l’entreprise, etc.)
      </p>
      <p>Contrôler et vérifier les modalités du retour de congé maternité</p>
      <p>
        Sensibiliser l’entreprise à accompagner l’absence de la jeune mère
        (informer, etc.)
      </p>
    </div>
    </div>
  );
};

export default LeAvant;

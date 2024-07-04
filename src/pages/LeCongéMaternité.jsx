import React from "react";
import "../styles/LeCongéMaternité.css";
import graphpagelecongematernite from "../assets/graphique/graphpagecongemat.png";

const LeCongéMaternité = () => {
  return (
    <div className="body-le-cong-mate">
      <div className="mom-container">
        <h2 className="title-mom">Le Congé Maternité</h2>
        <h3 className="you-are-not-alone">Vous n’êtes pas seul !</h3>
        <img src={graphpagelecongematernite} alt="graphiquecongematernite" />
        <h3 className="what-you-need-to-know">Ce qu’il faut savoir :</h3>
        <h4 className="mom">1. Respecter les modalités de contact :</h4>
        <p>
          Respecter les modalités préalablement décidées et consenties
          concernant le remplacement et le non-contact.
        </p>
        <h4 className="mom">2. Préparer le jour du retour :</h4>
        <h3>a. Informer et sensibiliser toute l’entreprise au retour :</h3>
        <p>Annoncer la date et les conditions actuelles de retour</p>
        <p>
          Sensibiliser l’équipe sur l’état de la jeune mère : fatigue, choc,
          etc.
        </p>
        <p>
          Favoriser la bienveillance, la confiance, l’entraide : soutien,
          écoute, etc.
        </p>
        <p>
          Prévoir et préparer la reconnexion relationnelle : e-mail d’arrivée,
          déjeuner, échanges avec les pairs, etc.
        </p>
        <h3>b. Préparer la réintégration :</h3>
        <p>Physique : bureau, outils, etc. </p>
        <p>Technique : numérique, codes, logiciels, tablette, etc.</p>
        <p>
          Commerciale et professionnelle : clients, dossiers, échanges
          professionnels, etc.
        </p>
        <h4 className="mom">Elles en parlent :</h4>
        <p>
          <strong>
            Témoignage - L'absence pour congé maternité n’est pas toujours
            respectée.
          </strong>
        </p>
        <i>
          « Je me souviens, je me suis arrêtée à 7 mois et deux semaines avant
          mon accouchement, j’envoyais encore du travail, on me disait cela te
          fera oublier les douleurs, donc je bossais... Après il n'y a pas eu de
          reconnaissance, mais je vivais bien ma grossesse. »
        </i>
        <p>Cadre commerciale, manager, compagnie aérienne, 40 ans, 2 enfants</p>
        <i>
          « Ma remplaçante m’appelait tous les jours, c’était presque du
          harcèlement. »
        </i>
        <p>Analyste sécurité, manager, assurance, 35 ans, 2 enfants</p>
        <i>
          « Je n’ai jamais déconnecté pendant mon congé. Ce n’était simplement
          pas possible, surtout quand je pensais à tout ce qui m’attendrait au
          retour. »
        </i>
        <p>Responsable logistique, manager, transports, 40 ans, 2 enfants</p>
        <i>
          « Si je ne me connectais pas durant mon congé maternité, j’allais me
          retrouver à mon retour avec 1 800 mails ! »
        </i>
        <p>Responsable de consultants, manager, finance, 36 ans, 2 enfants</p>
      </div>
    </div>
  );
};

export default LeCongéMaternité;

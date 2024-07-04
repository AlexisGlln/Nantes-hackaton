import React from "react";
import "../styles/AnnonceGrossesse.css";

const AnnonceGrossesse = () => {
  return (
    <div className="container-annonce">
      <h1 className="titre-annonce-grossesse">L'annonce de la grossesse</h1>
      <h3 className="you-are-not-alone">Vous n’êtes pas seul !</h3>
      <img className="graphique-annonce"
        src="./src/assets/graphique/graphpageannonce.png"
        alt="graphique-annonce-de-la-grossesse"
      />
      <h3 className="what-you-need-to-know">Ce qu’il faut savoir :</h3>
      <p>
        1. Une salariée enceinte n'a pas l'obligation d'informer son employeur
        de son état de grossesse. Si elle le souhaite, elle peut révéler à tout
        moment à son employeur son état de grossesse. Elle peut l'informer par
        écrit ou verbalement.
      </p>

      <p>
        2. Une salariée enceinte ou en congé de maternité est protégée contre le
        licenciement. Pendant le congé de maternité, l'employeur ne peut pas
        licencier la salariée. Sa protection contre le licenciement est absolue.
      </p>

      <p>
        3. Pendant sa grossesse, la salariée bénéficie d'autorisations d'absence
        pour se rendre aux examens médicaux obligatoires prévus par l'assurance
        maladie.
      </p>

      <p>
        4. La réduction de l'horaire journalier de travail pour une salariée
        enceinte n'est pas une obligation légale. Par contre, cette réduction
        d'horaires peut être prévue par la convention collective ou l'accord
        d'entreprise.
      </p>

      <h1>
        <em>Elles en parlent : Témoignage - L’annonce de la grossesse est un premier
        moment délicat pour les femmes</em>
      </h1>
      <p>
        « On sait que ce n’est jamais le bon moment pour l’entreprise, ils sont
        choqués, on essaie de savoir ce qui se passe dans leur tête. » <br />
        <strong> Responsable financière, banque, 39 ans, 2 enfants </strong>
      </p>

      <p>
        « On sait que ce n’est jamais le bon moment pour l’entreprise, ils sont
        choqués, on essaie de savoir ce qui se passe dans leur tête. »
        Responsable financière, banque, 39 ans, 2 enfants « J’étais en lien avec
        la RH, plus qu’avec mon responsable direct, c’est à eux que j’ai annoncé
        ma grossesse, ce sont eux qui se sont mis en lien avec mes supérieurs,
        ça a calmé mon appréhension. » <br />
        <strong> Consultante, 36 ans, 2 enfants </strong>
      </p>

      <p>
        « Aussi, j’ai mis du temps à annoncer que j’étais enceinte, j’avais
        l’impression de leur faire un truc pas bien, j’ai dit : ne vous
        inquiétez pas, je serai là, je ne vous lâcherai pas. » <br />
        <strong> Consultante en recrutement, 31 ans, 1 enfant </strong>
      </p>

      <p>
        « Le début de la grossesse a été très difficile. J'ai intégré une équipe
        et un an plus tard je suis tombée enceinte. On m'a promue manager pour
        que je puisse appliquer mes méthodes de travail aux consultantes. Je
        n'avais encore rien dit à mon employeur mais, prise de panique et peur
        de ne pas pouvoir assumer toutes ces responsabilités, j'ai dû en parler
        rapidement pour ne pas promettre des choses et ne pas pouvoir les
        assumer durant mon congé maternité. » <br />
        <strong> Responsable adminsitrative, 35 ans, 2 enfants </strong>
      </p>
    </div>
  );
};

export default AnnonceGrossesse;

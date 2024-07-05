import React from "react";
import "../styles/Accueil.css";
import { NavLink } from "react-router-dom";
import "../styles/Global.css";

const Accueil = () => {
  return (
    <div className="accueil">
      <h1 className="titre">Bienvenue sur Moms@work</h1>
      <div className="bienvenue">
      <div className="container-bienvenue">
        <h2>Votre Ressource Pour Une Maternité Épanouie au Travail</h2>
        <p>
          Nous sommes ravies de vous accueillir sur notre site dédié à toutes
          les femmes qui naviguent dans le milieu professionnel tout enpréparant
          l’arrivée d’un enfant. Chez Moms@work, notre mission est devous
          accompagner, de répondre à vos questions et de vous offrir lesoutien
          nécessaire à chaque étape de votre parcours de maternité.
        </p>
        <p>
          Que vous soyez sur le point d’annoncer votre grossesse à votre
          employeur, en train de préparer votre congé maternité, ou en train de
          planifier votre retour au travail, nous sommes là pour vous.
        </p>
      </div>
        <div className="image-container">
          <img
            className="image1"
            src="src/assets/illustrationfemmeenceinte.jpg"
            alt="femme-enceinte"
          />
        </div>
      </div>
      <div className="partie1">
        <h2>Nos Rubriques Principales :</h2>
        <NavLink to="/annonce-grossesse">
          <h3>1. L'Annonce</h3>
        </NavLink>
        <p>
          Découvrez comment annoncer votre grossesse à votre employeur et à vos
          collègues de manière sereine et professionnelle. Nous vous proposons
          des conseils pratiques pour préparer cette discussion cruciale et des
          modèles de lettres pour formaliser votre annonce.
        </p>
      </div>
      <div className="partie1">
        <NavLink to="/le-avant">
          <h3>2. Le Avant</h3>
        </NavLink>
        <p>
          Préparez-vous efficacement avant votre congé maternité. Trouvez des
          astuces pour gérer vos projets, organiser vos tâches et assurer une
          transition en douceur. Nous vous fournissons des listes de
          vérification et des conseils pour planifier votre absence.
        </p>
      </div>
      <div className="part2">
        <div className="partie2">
          <NavLink to="/le-congé-maternité">
            <h3>3. Le Congé Maternité</h3>
          </NavLink>
          <p>
            Pendant votre congé maternité, concentrez-vous sur vous et votre
            bébé en toute tranquillité. Nous vous offrons des informations sur
            vos droits, des conseils pour maintenir un lien avec votre travail
            et des idées pour profiter pleinement de cette période précieuse.
          </p>
        </div>
      </div>
      <div className="partie2">
        <NavLink to="/le-retour">
          <h3>4. Le Retour</h3>
        </NavLink>
        <p>
          Le retour au travail peut être une étape délicate. Nous vous aidons à
          reprendre vos fonctions avec confiance, à gérer les nouvelles
          responsabilités et à trouver un équilibre entre votre vie
          professionnelle et votre vie de famille. Explorez nos conseils pour
          une transition réussie et des témoignages inspirants de femmes qui ont
          traversé cette étape.
        </p>
      </div>
      <footer>
        <div className="partie22">
          <h3>Notre Engagement :</h3>
          <p>
            Chez Moms@work, nous comprenons les défis uniques auxquels les
            femmes enceintes peuvent être confrontées dans le milieu
            professionnel. Nous sommes ici pour vous offrir des ressources
            complètes, des conseils d'experts et un soutien communautaire. Notre
            objectif est de vous aider à vivre une expérience de maternité
            harmonieuse et à vous sentir valorisée et soutenue dans votre
            carrière.
          </p>
        </div>
        <div className="partie22">
          <h3>Rejoignez Notre Communauté :</h3>
          <p>
            Inscrivez-vous à notre newsletter pour recevoir des mises à jour
            régulières, des articles inspirants et des conseils pratiques.
            Rejoignez notre forum pour échanger avec d'autres femmes qui vivent
            des expériences similaires et trouvez un soutien mutuel.
          </p>
        </div>
        <div className="partie22">
          <h3>Contactez-Nous :</h3>
          <p>
            Si vous avez des questions ou besoin de conseils spécifiques,
            n'hésitez pas à nous contacter. Nous sommes là pour vous aider à
            chaque étape de votre maternité
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Accueil;

import React from 'react';
import '../styles/LeRetour.css';
import graphpageleretour from '../assets/graphique/graphpageleretour.png';

function LeRetour() {
  return (
    <div className='body-le-retour'>
    <div className='retour-container'> 
      <h2 className='title-retour'>Le Retour</h2>
      <h3 className="you-are-not-alone">Vous n’êtes pas seul !</h3>
      <img src={graphpageleretour} alt='graphpageleretour'/>
      <h3 className="what-you-need-to-know">Ce qu’il faut savoir :</h3>
      <h4 className='retour'>1. Le droit de retrouver son poste :</h4> 
      <p>À l’issue de son congé de 
      maternité, la salariée retrouve son précédent emploi ou un emploi 
      similaire assorti d’une rémunération au moins équivalente</p>
    <h4 className='retour'>2. L’entretien de retour de congé maternité :  </h4>
    <p>La salariée qui 
    reprend son activité à l’issue d’un congé de maternité a également 
    droit à l’entretien professionnel. Cet entretien est consacré à ses 
    perspectives d’évolution professionnelle.</p>
    <h4 className='retour'>3. La visite médicale de retour de congé maternité : </h4>
    <p>Dès que l’employeur a connaissance de la date de la fin de l’arrêt de travail, 
    il saisit le service de santé au travail qui organise cet examen de 
    reprise le jour de la reprise effective du travail par la salariée, et au 
    plus tard dans un délai de huit jours qui suivent cette reprise.</p>
    <h4 className='retour'>4. La démission sans préavis : </h4>
    <p>Pour élever son enfant, le salarié (la 
    mère ou le père) en CDI peut, sous réserve d’en informer son 
    employeur au moins 15 jours à l’avance , rompre son contrat de 
    travail à l’issue du congé de maternité ou, le cas échéant, 2 mois 
    après la naissance de l’enfant, sans être tenu de respecter le délai 
    de préavis, ni devoir de ce fait d’indemnité de rupture</p>
    <h4 className='retour'>5. Le temps pour allaiter son enfant :</h4>
    <p> Le code du travail permet à 
    la femme, pendant un an à compter du jour de la naissance, de 
    disposer d’une heure par jour, prise sur le temps de travail, pour 
    allaiter son enfant. Cette heure est répartie en deux fois 30 minutes,
    le matin et l’après-midi.</p>
    <h4 className='retour'>6. La garantie de rattrapage salarial : </h4>
    <p>La salariée doit pouvoir 
    bénéficier d’une garantie d’évolution de sa rémunération, c’est-à-
    dire qu'elle doit bénéficier non seulement des augmentations 
    générales de salaire qui ont été appliquées dans l’entreprise durant 
    son absence, mais également de la moyenne des augmentations 
    individuelles perçues pendant la durée du congé maternité par les 
    salariées relevant de sa catégorie professionnelle.</p>
    <h4 className='retour'>Elles en parlent :</h4>
    <p><strong>Témoignage - La maternité a un impact sur l’évolution professionnelle des 
    femmes</strong></p>
    <i>« Tout ce que je veux, c’est ne plus penser, ne plus me poser des questions pour 
    garder mon enfant et arrêter ce travail ! Je suis dégoûtée, écœurée parce que 
    j’avais tant donné. »</i> 
    <p>Cheffe de produit, 32 ans, 1 enfant</p>
    <i>« Moi je suis carrément dans une logique de step back. Un énorme coup de frein, 
    un retour en arrière, même. Mais le fait de ne pas trop évoluer, cela m’arrange 
    car je ne pourrais pas en supporter davantage, mais d’ici trois ans je verrais les 
    choses autrement. »</i>
    <p>Property manager, 32 ans, 1 enfant</p>
    <i>« Je voudrais faire évoluer ma carrière, mon salaire, mon expertise au sein du 
    groupe mais post grossesse, mon projet professionnel a été impacté car je n’ai 
    plus la même mobilité. Il faut attendre. »</i> 
    <p>Responsable d’activités bancaires, 36 ans, 2 enfants</p>
    </div>
    </div>
  )
}

export default LeRetour;
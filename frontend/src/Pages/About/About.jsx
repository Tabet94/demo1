import React from 'react';
import about from '../../Assets/about.jpg'
import './About.css'; 

import doctor from '../../Assets/doctor.jpg'
const About = () => {
  return (
    <div className="about-container">
     <img src={about} alt="about" style={{height:"500px"}} />
      <div className="about-content">
        <h2>Qui sommes-nous ?</h2>
        <p>
          Bienvenue sur notre site de pharmacie en ligne dédié à votre santé et bien-être. Chez nous, votre santé est notre priorité.
          Notre équipe de pharmaciens qualifiés est là pour vous fournir des conseils personnalisés et des produits de qualité.
          Nous sommes engagés à vous offrir des solutions de santé innovantes et à répondre à vos besoins médicaux.
        </p>
        <p>
          Notre mission est de vous accompagner à chaque étape, que ce soit pour trouver des médicaments, des conseils sur la santé ou des informations utiles.
          Nous croyons en l'accessibilité aux soins de santé et nous nous efforçons de rendre votre expérience avec nous agréable et sécurisée.
        </p>
      </div>
       
       
       
       
       {/*  card1.............................................................. */}
        <div className="cards-article_container">
        <h2 className="cards-title">Nos Services</h2>
        <div class="card-row">
          <article className="card-article">
            <div className="temporary_text">
              <img src={doctor} alt="doctor" />
            </div>
          <div className="card-article_content">
            <span className="card-article_title">Consultations Pharmaceutiques</span>
            <span className="card-article_subtitle">Conseils personnalisés sur les médicaments (usage, interactions, effets secondaires).</span>
            <p className="card-article_description">Services de suivi thérapeutique pour optimiser l'observance des traitements..</p>
          </div>
          </article>
          
           {/*  card2....................................................... */}
          <article className="card-article">
            <div className="temporary_text">
            <img src={doctor} alt="doctor" />
            </div>
          <div className="card-article_content">
            <span className="card-article_title">Préparation et Livraison de Médicaments</span>
            <span className="card-article_subtitle">Préparation des ordonnances à l'avance pour un retrait rapide..</span>
            <p className="card-article_description">Mise à disposition de commandes .</p>
          </div>
          </article>
          
           {/*  card3......................................................... */}
          <article className="card-article">
            <div className="temporary_text">
            <img src={doctor} alt="doctor" />
            </div>
          <div className="card-article_content">
            <span className="card-article_title"> Services de Santé Préventive</span>
            <span className="card-article_subtitle">Dépistage rapide (tension artérielle, glycémie, cholestérol, tests antigéniques).</span>
            <p className="card-article_description">Conseils en nutrition et gestion du poids pour la prévention des maladies liées au mode de vie..</p>
          </div>
          </article>
         </div>
         
         
          
          
        </div>
    </div>
    
  );
};

export default About;

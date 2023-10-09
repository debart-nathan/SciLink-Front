


const Mentions: React.FC = () => {
    return (
      <div className=" text-center row mb-5">
        <h1 className="col-12 mt-5 mb-5">Mentions Légales</h1>
  <div className="col-6">
        <h2>1. Informations légales</h2>
        <p>Raison sociale de l'entreprise : [Nom de l'entreprise]</p>
        <p>Forme juridique : [Forme juridique de l'entreprise]</p>
        <p>Adresse : [Adresse de l'entreprise]</p>
        <p>Numéro de téléphone : [Numéro de téléphone]</p>
        <p>Adresse e-mail : [Adresse e-mail de contact]</p>
        <p>Numéro SIRET : [Numéro SIRET]</p>
  
        <h2>2. Directeur de la publication</h2>
        <p>Nom du directeur de la publication : [Nom du directeur de la publication]</p>
  
        <h2>3. Hébergement du site</h2>
        <p>Nom de l'hébergeur : [Nom de l'hébergeur]</p>
        <p>Adresse de l'hébergeur : [Adresse de l'hébergeur]</p>
  
        </div>
        <div className="col-6">
        <h2>4. Propriété intellectuelle</h2>
        <p>
          Le contenu de ce site web est protégé par les lois sur la propriété
          intellectuelle.
        </p>
  
        <h2>5. Utilisation des cookies</h2>
        <p>
          Ce site web peut utiliser des cookies pour améliorer l'expérience de
          l'utilisateur.
        </p>
  
        <h2>6. Liens externes</h2>
        <p>
          Ce site peut contenir des liens vers des sites web externes. Nous ne
          sommes pas responsables du contenu de ces sites externes.
        </p>
  </div>
        {/* Ajoutez d'autres sections nécessaires pour vos mentions légales. */}
  
      </div>
    );
};
export default Mentions;
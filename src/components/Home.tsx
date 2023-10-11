import logo from "./../assets/img/logoName.png";
const Home = () => {
  return (
    <main className=" row">
      <h1 className="text-center fs-1">Scilink</h1>
      <h2>Bienvenue</h2>
      <section className="col-6 mt-5">
        <article>
          <h2>À propos de ScilinK</h2>
          <p>
            ScilinK est la passerelle entre l'innovation scientifique et les
            opportunités d'investissement. Notre mission est de catalyser la
            collaboration entre les centres de recherche de pointe, les
            investisseurs visionnaires et les projets à fort potentiel.
          </p>
        </article>

        <article>
          <h2>Comment ça fonctionne ?</h2>
          <ol>
            <li>
              Recherchez des Projets : Explorez une multitude de projets de
              recherche novateurs à la recherche de financement.
            </li>
            <li>
              Découvrez des Centres de Recherche : Identifiez les centres de
              recherche leaders dans leur domaine, prêts à collaborer avec vous.
            </li>
            <li>
              Trouvez des Investisseurs : Rencontrez des investisseurs
              passionnés par la science et prêts à soutenir des projets
              prometteurs.
            </li>
            <li>
              Connectez-vous : Créez un compte et commencez à construire des
              partenariats qui façonnent l'avenir.
            </li>
          </ol>
        </article>
        <article>
          <h2>Pourquoi ScilinK ?</h2>
          <ul>
            <li>
              Opportunités Illimitées : Découvrez des projets scientifiques
              passionnants et investissez dans l'avenir.
            </li>
            <li>
              Accès à l'Excellence : Collaborez avec les meilleurs centres de
              recherche mondiaux.
            </li>
            <li>
              Facilité de Gestion : Notre plateforme conviviale facilite la
              recherche, la communication et la collaboration.
            </li>
            <li>
              Impact Global : Contribuez à des avancées scientifiques majeures
              qui ont un impact positif sur le monde.
            </li>
          </ul>
        </article>
      </section>
      <img src={logo} className="mt-5 col-6 w-50 h-50" alt="logo du site" />
      <section className="col-12 ">
        <article>
          <h2>Rejoignez la Communauté ScilinK</h2>
          <p>
            Prêt à explorer l'avenir de la science et de l'investissement ?
            Rejoignez ScilinK dès aujourd'hui et commencez à construire des
            partenariats stratégiques qui ouvriront la voie à l'innovation.
          </p>
          <a href="lien_vers_la_page_d_inscription">
            Inscrivez-vous maintenant
          </a>
        </article>

        <article>
          <h2>Contactez-nous</h2>
          <p>
            Si vous avez des questions ou avez besoin d'assistance, notre équipe
            est là pour vous aider.
          </p>
          <ul>
            <li>Téléphone : [Numéro de téléphone]</li>
            <li>E-mail : [Adresse e-mail]</li>
            <li>Adresse : [Adresse physique]</li>
          </ul>
          <p>
            Suivez-nous sur les réseaux sociaux : [Liens vers les réseaux
            sociaux]
          </p>
        </article>
      </section>
    </main>
  );
};

export default Home;

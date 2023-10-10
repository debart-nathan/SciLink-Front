import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <footer className="footer row">
          <Link className="col-2 offset-8" to="/Mentions">Mentions Légales</Link>
          <Link className="col-2" to="/contact-us">Contactez nous</Link>
            <p>&copy; 2023 Copyright SciLink - Tous droits réservés - &copy;Kapikes,&copy;Debart Nathan,&copy;BenoitGueheneux,&copy;Claire - </p>
        </footer>
    );
}

export default Footer;
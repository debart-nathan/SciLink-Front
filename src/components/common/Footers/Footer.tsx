import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer mt-3">
        <div className="row">
      <Link className="col-2 offset-8" to="/Mentions">
        Mentions Légales
      </Link>
      <Link className="col-2" to="/contact-us">
        Contactez nous
      </Link>
      </div><div className="row">
        <p className="d-flex align-items-center col-9">
          &copy; 2023 Copyright SciLink - Tous droits réservés -
          &copy;Kapikes,&copy;Debart Nathan,&copy;BenoitGueheneux,&copy;Claire -
        </p>
          <i className="text-warning text-end flex-row-reverse col-2">
            V.000.001
          </i>
      </div>
    </footer>
  );
};

export default Footer;

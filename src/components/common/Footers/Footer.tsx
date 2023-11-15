import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer mt-3">
        <div className="row">
      <Link className="col-2 offset-8 text-danger" to="/Mentions">
        Mentions Légales
      </Link>
      <Link className="col-2 text-danger" to="/contact-us">
        Contactez nous
      </Link>
      </div><div className="row">
        <p className="d-flex align-items-center col-9">
          &copy; 2023 Copyright SciLink - Tous droits réservés -
          &copy;Kapikes, &copy;DebartNathan, &copy;BenoitGueheneux, &copy;Claire -
        </p>
          <i className=" text-end flex-row-reverse col-2">
            V1.000.099
          </i>
      </div>
    </footer>
  );
};

export default Footer;

/* eslint-disable react/prop-types */
import { FaInstagram, FaLinkedin } from "react-icons/fa";
import { Link } from "react-router-dom";

function AboutUsCard({ img, name, description, instagramUrl, linkedInUrl }) {
  return (
    <div className="person">
      <img className="profilna" src={img} />
      <p className="person-name">{name}</p>
      <div className="description">
        <p>{description}</p>
        <div className="links">
          <Link to={instagramUrl} target="_blank">
            <FaInstagram className="link" />
          </Link>
          <Link to={linkedInUrl} target="_blank">
            <FaLinkedin className="link" />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default AboutUsCard;

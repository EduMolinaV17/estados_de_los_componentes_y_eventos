import {faFacebook, faGithub, faLinkedinIn} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const SocialButton = ({ facebook, github, linkedin }) => {
  return (
    <>
      <button className="icono">
        {facebook && <FontAwesomeIcon icon={faFacebook} size="3x" />}
        {github && <FontAwesomeIcon icon={faGithub} size="3x" />}
        {linkedin && <FontAwesomeIcon icon={faLinkedinIn} size="3x" />}
      </button>
    </>
  );
};

export default SocialButton;

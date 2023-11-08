import './footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram, faLinkedin, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom';

export const Footer = () => {
    return (
      <footer>
        <div className='footer-content'>
        <div className="get-know-us">
            <p>Get know us</p>
            <Link to={'/aboutus'}>About Us</Link>
        </div>
        <div className="payment">
            <p>Payment partner</p>
            <a href='https://stripe.com/'>Stripe payment</a>
            <a href='https://stripe.com/en-gb-bg/payments'>Payment Info</a>
        </div>
        <div className="contacts">
            <p>Contacts:</p>
          <FontAwesomeIcon icon={faFacebookF} />
          <FontAwesomeIcon icon={faInstagram} />
          <FontAwesomeIcon icon={faYoutube} />
          <FontAwesomeIcon icon={faLinkedin} />
        </div>
        </div>
        <p>© 2002-2023, LiteratyLights.com, Inc. or its affiliates</p>
      </footer>
    );
}
import { GrFacebookOption } from 'react-icons/gr';
import { SiInstagram } from 'react-icons/si';
import { AiOutlineTwitter } from 'react-icons/ai';
import { FaYoutube } from 'react-icons/fa';
import "./footerStyle.css";

function App() {
  return (
    <>
      <div className="row footer-main">
        <div className='footer-icon'>
          <GrFacebookOption />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <SiInstagram />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <AiOutlineTwitter />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <FaYoutube />
        </div>
        <div className="col-md-3 col-6 footer-inr">
          <ul className="ft_conte">
            <li>Audio Description</li>
            <li>Investor Relations</li>
            <li>Legal Notices</li>
          </ul>
        </div>
        <div className="col-md-3 col-6 footer-inr">

          <ul className="ft_conte">
            <li>Help Centre</li>
            <li>Job</li>
            <li>Cookies Preferences</li>
          </ul>
        </div>
        <div className="col-md-3 col-6 footer-inr">

          <ul className="ft_conte">
            <li>Gift Card</li>
            <li>Terms of Use</li>
            <li>Corporate Information</li>
          </ul>
        </div>
        <div className="col-md-3 col-6 footer-inr">

          <ul className="ft_conte">
            <li>Media Centre</li>
            <li>Privacy</li>
            <li>Contact Us</li>
          </ul>
        </div>
        <div className='footer-span'>
          <span>Service Code</span>
        </div>
        <div className='footer-copyright'>
          <span>&#169; 1997-2023 Yogi, Inc.</span>
        </div>
      </div>

    </>
  );
}

export default App;


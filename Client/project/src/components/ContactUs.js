
import React from "react";
import Home from "./Home";

import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

const ContactUs = () => {
  return (
    <div>
    <Home />
    {/* Add your contact us page content here */}
    <div  className="contact-info page-div">
          <div className="contact-column">
            <h5>Phone</h5>
            <p>
              General Enquiries: 0800 WAIKATO{" "}
              <a href="tel:0800924528"> (0800 924 528)</a> or{" "}
              <a href="tel:078384176">07 838 4176</a>
              <br />
              Monday - Friday 8:30am - 5pm
            </p>
            <p>
              International Enquiries:{" "}
              <a href="tel:+6478079275"> +64 7 807 9275 </a>
            </p>
            <p>
              Reach an extension number:
              <a href="tel:+6478384466"> +64 7 838 4466 </a>- press 1 to enter
              an extension
            </p>
          </div>

          <div className="contact-column">
            <h5>Email</h5>
            <p>
              General Enquiries:{" "}
              <a href="mailto:info@waikato.ac.nz">info@waikato.ac.nz</a>
              <br />
              Monday - Friday 8:30am - 5pm
            </p>
            <p>
              International Enquiries:{" "}
              <a href="mailto:international@waikato.ac.nz">
                international@waikato.ac.nz
              </a>
            </p>
          </div>
        </div>

        <div className="follow-us page-div">
          <h5> Follow Us</h5>
          <div className="social-media-buttons">
            <a
              href="https://www.linkedin.com/edu/school?id=15520&trk=edu-cp-logo"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin />
              <span>LinkedIn</span>
            </a>
            <a
              href="https://www.instagram.com/waikatouniversity/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram />
              <span>Instagram</span>
            </a>
            <a
              href="https://www.facebook.com/WaikatoUniversity"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebook />
              <span>Facebook</span>
            </a>
            <a
              href="https://twitter.com/waikato"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaTwitter />
              <span>Twitter</span>
            </a>
          </div>
        </div>
  </div>
  );
};

export default ContactUs;


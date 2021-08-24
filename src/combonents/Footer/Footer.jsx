import React, { useEffect, useRef } from "react";
import { contactLinks } from "../../data/data";
import { FaPhoneAlt } from "react-icons/fa";

const Footer = () => {
  const refPhoneIcon = useRef(null);

  return (
    <footer className="Footer">
      <div className="container">
        <div className="social-links">
          <ul className="list-links">
            {contactLinks.map((link) => (
              <li key={link.id}>
                <a href={link.url} target="_blank">
                  <link.icon />
                </a>
              </li>
            ))}
            <li>
              <a
                className="phone-number"
                href="tel:+20 12974151"
                ref={refPhoneIcon}
              >
                <FaPhoneAlt /> <span>+20_1012974151</span>
              </a>
            </li>
          </ul>
          <div className="line">contact me</div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

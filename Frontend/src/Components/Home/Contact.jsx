import React, { useState } from "react";
import "../../SCSS/Home/Contact.scss";
import {
  FaEnvelope,
  FaPhone,
  FaWhatsapp,
  FaInstagram,
  FaTelegram,
  FaGithub,
} from "react-icons/fa6";
import { copyToClipboard } from "./Function/CopyText";

const Contact = () => {
  const [text, setText] = useState("+1 609 685 1351");
  const [showPopup, setShowPopup] = useState(false);

  const handleCopy = () => {
    copyToClipboard(text);
    setShowPopup(true);
    setTimeout(() => {
      setShowPopup(false);
    }, 2000);
  };

  return (
    <div className="contactmain" id="contacts">
      <div className="labeldiv">
        <label>Contact Me</label>
      </div>
      <div className="ContactDiv">
        <div className="InfoMe">
          <div className="card">
            <h1>Personal Info</h1>
            <p>
              <b>Full Name: </b>Artem Maslovskyi
            </p>
            <p>
              <b>Occupation: </b>Student
            </p>
            <p>
              <b>Location: </b>USA New Jersey
            </p>
            <p>
              <b>Ethnicity: </b>Ukrainian
            </p>
            <p>
              <b>Age: </b>18
            </p>
            <p>
              <b>Native Language: </b>Ukrainian
            </p>
            <p>
              <b>Language: </b>English B2
            </p>
          </div>
        </div>
        <div className="contactinfo">
          <div className="card">
            <h1>Contact Info</h1>
            <p>
              <b>Email: </b>lealoria117@gmail.com
            </p>
            <p>
              <b>Phone Number: </b>+1 609 685 1351
            </p>
            <p>
              <b>Whatsapp: </b>+380 98 272 3523
            </p>
            <p>
              <b>Instagram: </b>mrvoice.rar
            </p>
            <p>
              <b>Telegram: </b>MrVoice_rar
            </p>
            <p>
              <b>GitHub: </b>MrVoiceRAR
            </p>
            <div className="contacticons">
              <a href="mailto:lealoria117@gmail.com">
                <FaEnvelope />
              </a>
              <a onClick={handleCopy}>
                <FaPhone />
              </a>
              <a href="https://wa.me/+380982723523">
                <FaWhatsapp />
              </a>
              <a href="https://www.instagram.com/mrvoice.rar/">
                <FaInstagram />
              </a>
              <a href="https://t.me/Mrvoice_rar">
                <FaTelegram />
              </a>
              <a href="https://github.com/MrVoiceRAR">
                <FaGithub />
              </a>
            </div>
          </div>
        </div>
      </div>
      {showPopup && (
        <div className="popup">Phone Number copied to clipboard!</div>
      )}
    </div>
  );
};

export default Contact;

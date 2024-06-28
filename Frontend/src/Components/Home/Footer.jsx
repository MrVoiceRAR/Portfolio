import { FaLinkedin, FaGithub, FaTelegram } from "react-icons/fa6";
import "../../SCSS/Home/Footer.scss";
const Footer = () => {
  const links = [
    [
      { label: "Company", key: "header-1" },
      { label: "About us", key: "item-1-1" },
      { label: "Blog", key: "item-1-2" },
      { label: "Contact us", key: "item-1-3" },
      { label: "Spell DB", key: "item-1-4" },
      { label: "Feedback", key: "item-1-5" },
    ],
    [
      { label: "Support", key: "header-2" },
      { label: "Help center", key: "item-2-1" },
      { label: "Terms of service", key: "item-2-2" },
      { label: "Legal", key: "item-2-3" },
      { label: "Privacy policy", key: "item-2-4" },
      { label: "Status", key: "item-2-5" },
    ],
  ];
  return (
    <div className="footer">
      <div className="footer-company-info">
        <div className="footer-img">
          <img
            src="https://imgmasloportfolioaboba.blob.core.windows.net/images/react-2.svg"
            alt="aboba"
          />
          {/* <span>Made on React</span> */}
        </div>
      </div>
      <div className="footer-links">
        {links.map((col, index) => (
          <ul className={`col col-${index + 1}`} key={`col-${index}`}>
            {col.map((link, index) => (
              <li key={`link-${col}-${index}`}>{link.label}</li>
            ))}
          </ul>
        ))}
      </div>
      <div className="SocialLinks">
        <a
          id="LinkedInLink"
          href="https://www.linkedin.com/in/artem-maslvoskyi/"
        >
          <FaLinkedin />
        </a>

        <a id="GitHubLink" href="https://github.com/MrVoiceRAR">
          <FaGithub />
        </a>
        <a id="TelegramLink" href="https://t.me/Mrvoice_rar">
          <FaTelegram />
        </a>
      </div>
    </div>
  );
};

export default Footer;

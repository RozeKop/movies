import n from "../../assets/footerN.png";
import { FaYoutube } from "react-icons/fa6";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedin,
  FaInstagram,
} from "react-icons/fa";
import "./footer.css";

export default function Footer() {
  const email = "support@nextmovies.com";
  const officeHours = "Mon - Fri | 6:00 am-5:00 pm PT";
  const socials = [
    {
      platform: "facebook",
      link: "https://www.facebook.com",
      component: <FaFacebookF />,
    },
    {
      platform: "linkedin",
      link: "https://www.linkedin.com/in",
      component: <FaLinkedin />,
    },
    {
      platform: "twitter",
      link: "https://twitter.com",
      component: <FaTwitter />,
    },
    {
      platform: "instagram",
      link: "https://www.instagram.com",
      component: <FaInstagram />,
    },

    {
      platform: "youtube",
      link: "https://youtube.com/",
      component: <FaYoutube />,
    },
  ];

  function openLink(link) {
    window.open(link, "_blank");
  }
  return (
    <div className="footer">
      <img className="footerN" src={n} alt="n" />
      <div className="info">
        <h3>Contact us</h3>
        <p>{email}</p>
        <p>{officeHours}</p>
      </div>
      <div className="socials">
        {socials.map((social, index) => (
          <div
            className="social-btn"
            data-testid={`my-div-${index}`}
            key={index}
            onClick={() => openLink(social.link)}
          >
            {social.component}
          </div>
        ))}
      </div>
    </div>
  );
}

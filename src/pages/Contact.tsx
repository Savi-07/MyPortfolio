import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaPaperPlane,
} from "react-icons/fa";
import "./Contact.css";

const Contact = () => {
  return (
    <section className="contact-section" id="contact">
      <h1 className="contact-header">LET'S GET CONNECTED</h1>
      <div className="contact-socials">
        <a
          href="https://github.com/Savi-07"
          target="_blank"
          rel="noopener noreferrer"
          className="social-btn gh"
        >
          <FaGithub size={32} />
        </a>
        <a
          href="www.linkedin.com/in/sahil-kumar-singh-664549244"
          target="_blank"
          rel="noopener noreferrer"
          className="social-btn ln"
        >
          <FaLinkedin size={32} />
        </a>
        <a
          href="https://instagram.com/Sahilkumarsingh_07"
          target="_blank"
          rel="noopener noreferrer"
          className="social-btn ig"
        >
          <FaInstagram size={32} />
        </a>
      </div>
      <div className="contact-form-wrapper">
        <h3 className="contact-prompt">
          Got a question, proposal, project, or want to work together on
          something?
        </h3>
        <br />
        <form
          className="contact-form"
          action="https://formspree.io/f/mrbkdodn"
          method="POST"
        >
          <input
            type="email"
            name="email"
            placeholder="Your email"
            required
            className="contact-input"
          />
          <button type="submit" className="contact-send-btn">
            <FaPaperPlane />
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;

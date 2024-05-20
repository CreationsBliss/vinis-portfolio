import { footerVariants } from "../../utils/motion";
import "./Footer.css";
import {motion} from "framer-motion"

const Footer = () => {
  return (
    <section className="footer-area">
      <motion.div className="container padding-top-bottom" variants={footerVariants} initial="hidden" whileInView="show">
        <div className="footer">
          <div className="footer-left">
            <h1 className="footer-title">
              Let's make something <br /> amazing together.{" "}
            </h1>
            <h1 className="footer-text-contact">
              Start by{" "}
              <a href="mailto:someone@gmail.com" className="footer-hi-text">
                saying hi
              </a>
            </h1>
          </div>

          <div className="footer-right">
            <div>
              <p className="footer-info">Information</p>
              <p>45 New York, FL 5467, USA </p>
            </div>
            <div className="footer-links">
              <a href="#"> Services </a>
              <a href="#"> Works </a>
              <a href="#"> Notes </a>
              <a href="#"> Experience </a>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Footer;

import { motion } from "framer-motion";
import certificate from "../../assets/certificate.png";
import person from "../../assets/person.png";
import { fadeIn, slideIn, staggerContainer } from "../../utils/motion";
import "./Hero.css";

const Hero = () => {
  return (
    <motion.section
      className="hero-area"
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
    >
      <div className="container padding-top-bottom">
        <div className="hero-top">
          <div>
            <motion.h1 variants={fadeIn("right", "tween", 0.2, 1)}>
              Hey There, <br />
              I'm Vini.
            </motion.h1>
          </div>
          <div>
            <motion.p variants={fadeIn("left", "tween", 0.4, 1)}>
              I design beautiful simple <br /> things, And I love what I do
            </motion.p>
          </div>
        </div>

        <motion.div className="hero-area-person" variants={fadeIn("up", "tween", 0.3, 1)}>
          <motion.img src={person} alt="person" variants={slideIn("up", "tween", 0.5, 1.3)}/>
          {/* <h1>heelo</h1> */}
        </motion.div>

        <div className="hero-bottom">
          <motion.div className="hero-bottom-left-text" variants={fadeIn("right", "tween", 0.3, 1)}>
            <span className="ten-year">10</span>
            <span className="years-experience">
              Years <br /> Experience
            </span>
          </motion.div>
          <motion.div className="hero-bottom-right-text"  variants={fadeIn("left", "tween", 0.5, 1)}>
            <img src={certificate} alt="certificate" />
            <span>CERTIFIED PROFATIONAL </span>
            <span>UI/UX DESIGNER</span>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default Hero;

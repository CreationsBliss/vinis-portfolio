import { motion } from "framer-motion";
import { workExp } from "../../utils/data";
import { fadeIn, textVariant2, zoomIn } from "../../utils/motion";
import "./Experience.css";

const Experience = () => {
  return (
    <section className="experience-area">
      <a className="anchore" id="experience"></a>
      <div className="container padding-top-bottom">
        <h1 className="experience-area-title">My Work Experience</h1>
        <div className="experience">
          {workExp.map((experience, i) => {
            return (
              <motion.div
                key={experience.tenure}
                className="experience-detail"
                variants={textVariant2}
                initial="hidden"
                whileInView="show"
                viewport={{ once: false, amount: 0.25 }}
              >
                <div className="experience-detail-left">
                  <h1 className="experience-sub-title">{experience.place}</h1>
                  <p>{experience.tenure}</p>
                </div>

                <div className="experience-detail-right">
                  <h1 className="experience-sub-title">{experience.role}</h1>
                  <p className="experience-sub-text">{experience.detail}</p>
                </div>
              </motion.div>
            );
          })}

          <motion.div className="progressbar" variants={zoomIn(1,1)} initial="hidden" whileInView="show">
            <motion.div className="line" variants={fadeIn("down", "tween", 2, 1.5)}></motion.div>
            <div className="circle-box">
              <div className="circle" style={{ background: "#286f6c" }}></div>
            </div>
            <div className="circle-box">
              <div className="circle" style={{ background: "#f2704e" }}></div>
            </div>
            <div className="circle-box">
              <div className="circle" style={{ background: "#fec048" }}></div>
            </div>
          </motion.div>


        </div>
      </div>
    </section>
  );
};

export default Experience;

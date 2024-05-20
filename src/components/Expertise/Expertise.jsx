import { motion } from "framer-motion";
import { projectExperience } from "../../utils/data";
import { fadeIn, staggerContainer, textVariant } from "../../utils/motion";
import "./Expertise.css";

const Expertise = () => {
  return (
    <motion.section
      className="expertise-area"
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
    >
      <a className="anchore" id="expertise"></a>
      <div className="container padding-top-bottom expertise">
        <div className="expertise-left">
          <div className="expertise-name">
            {projectExperience.map((project, i) => {
              return (
                <motion.div key={project.name} className="single-expertise" variants={fadeIn("right", "tween", (i+1)*0.3, 1)}>
                  <div
                    style={{ background: project.bg }}
                    className="expertise-icon"
                  >
                    <project.icon size={25} color="white"></project.icon>
                  </div>
                  <div className="project-detail">
                    <div className="project-name">{project.name}</div>
                    <div className="project-amount">
                      {project.projects} Projects
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        <motion.div className="expertise-right" variants={textVariant(0.5)}>
          <h1>What do I help?</h1>
          <p>
            I will help you with finging a solution and solve your problem, We
            use process design to create digital products. Besides that also
            help their business.
          </p>
          <p>
            We use process design to create digital products. Besides that also
            help their business.
          </p>
          <div className="project-completed">
            <div>
              <h1>285+</h1>
              <p>Projects Completed</p>
            </div>
            <div>
              <h1>190+</h1>
              <p>Happy Clients</p>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Expertise;

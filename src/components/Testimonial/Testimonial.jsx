import { motion } from "framer-motion";
import Slider from "react-slick";
import { comments, sliderSettings } from "../../utils/data";
import { footerVariants } from "../../utils/motion";
import "./Testimonial.css";

const Testimonial = () => {
  return (
    <section className="testimonial-area">
      <a className="anchore" id="testimonials"></a>
      <motion.div
        className="container padding-top-bottom testimonial"
        variants={footerVariants}
        initial="hidden"
        whileInView="show"
      >
        <div className="testimonial-top">
          <h1 className="testimonial-title">People talk about us</h1>
          <p>
            I got a job that was in accordance with the salary and field of work
          </p>
          <p>The process of submitting an appilication was quite cosy</p>
        </div>

        <div className="testimonial-bottom">
          <Slider {...sliderSettings}>
            {comments.map((comment, i) => {
              return (
                <div key={i} className="single-testimonial-box">
                  <div className="single-testimonial">
                    <img src={comment.img} alt="image" />
                    <p className="testimonial-comment">{comment.comment}</p>
                    <div className="divider"></div>
                    <p className="client-name">{comment.name}</p>
                    <p className="client-post">{comment.post}</p>
                  </div>
                </div>
              );
            })}
          </Slider>
        </div>
      </motion.div>
    </section>
  );
};

export default Testimonial;

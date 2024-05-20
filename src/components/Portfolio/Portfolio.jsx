import './Portfolio.css';
import portfolio1 from "../../assets/showCase1.png"
import portfolio2 from "../../assets/showCase2.png"
import portfolio3 from "../../assets/showCase3.png"
import {motion} from "framer-motion"
import { fadeIn } from '../../utils/motion';

const Portfolio = () => {
    return (
        <section className='portfolio-area'>
            <a className="anchore" id="portfolio"></a>
            <div className='container padding-top-bottom portfolio'>
                <div className="portfolio-top">
                    <div>
                        <h1 className='portfolio-title'>My Latest Works</h1>
                        <p className='portfolio-subtitle'>Perfect solution for digital experience</p>
                    </div>
                    <p className='explore-portfolio'>Explore More Works</p>
                </div>

                <div className="portfolio-bottom">
                    <motion.img src={portfolio1} alt="portfolio1" variants={fadeIn("up", "tween", 0.5, 0.6)} initial="hidden" whileInView="show" />
                    <motion.img src={portfolio2} alt="portfolio2" variants={fadeIn("up", "tween", 0.7, 0.6)} initial="hidden" whileInView="show" />
                    <motion.img src={portfolio3} alt="portfolio3" variants={fadeIn("up", "tween", 0.9, 0.6)} initial="hidden" whileInView="show" />
                </div>
            </div>
        </section>
    );
};

export default Portfolio;
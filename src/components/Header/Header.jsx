import { motion } from "framer-motion";
import { useState } from "react";
import { FiPhoneCall } from "react-icons/fi";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { IoClose } from "react-icons/io5";
import { getMenuStyles, headerVariants } from "../../utils/motion";
import "./Header.css";
import useHeaderShadow from "../../hooks/useHeaderShadow";

const Header = () => {
  const [menuOpened, setMenuOpened] = useState(false);
  const headerShadow = useHeaderShadow()
  return (
    <motion.section
      className="header-area"
      initial="hidden"
      whileInView="show"
      variants={headerVariants}
      viewport={{ once: false, amount: 0.25 }}
      style={{boxShadow: headerShadow}}
    >
      <div className="container header">
        <div className="logo">
          <a href="#">ViNi</a>
        </div>

        <div className="menu">
          <ul className="menu-items" style={getMenuStyles(menuOpened)}>
            <li>
              <a href="#expertise">Services</a>
            </li>
            <li>
              <a href="#experience">Experience</a>
            </li>
            <li>
              <a href="#portfolio">Portfolio</a>
            </li>
            <li>
              <a href="#testimonials">Testimonials</a>
            </li>
            <li className="header-contact">
              <p className="header-phone-number">+001 (232) 345 678</p>
              <p>
                <FiPhoneCall className="phone" size={40} />
              </p>
            </li>
          </ul>
        </div>

        {/* Menu Icon for Mobile */}
        <div
          className="header-menu-icon"
          onClick={() => {
            setMenuOpened((prev) => !prev);
          }}
        >
          {menuOpened ? <IoClose size={30} /> : <HiOutlineMenuAlt3 size={30} />}
        </div>
      </div>
    </motion.section>
  );
};

export default Header;

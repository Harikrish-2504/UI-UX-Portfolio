import React, {useState} from "react";
import {HiMenuAlt4, HiX} from "react-icons/hi";
import {motion} from "framer-motion";
import {images} from "../../constants";
import "./Navbar.scss";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <nav className="app__navbar">
      <div className="app__navbar-logo">
        {/* <img src={images.name} alt="logo" /> */}
        <h2> H A R I </h2>
      </div>
      <ul className="app__navbar-links">
        {["home", "about", "work", "skills", "contact"].map((items) => (
          <li key={`link-${items}`} className="app__flex p-text">
            <div />
            <a href={`#${items}`}> {items}</a>
          </li>
        ))}
      </ul>
      <div className="app__navbar-menu">
        <HiMenuAlt4 onClick={() => setToggle(true)} />
        {toggle && (
          <motion.div whileInView={{x: [300, 0]}} transition={{duration: 0.85, ease: "easeOut"}}>
            <HiX onClick={() => setToggle(false)} />
            <ul className="app__navbar-links">
              {["home", "about", "work", "skills", "contact"].map((items) => (
                <li key={{items}}>
                  <a href={`#${items}`} onClick={() => setToggle(false)}>
                    {" "}
                    {items}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;

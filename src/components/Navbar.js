import React from "react";
import { Link } from "react-scroll";

function Navbar() {
  return (
    <nav>
      <Link to="basic-info" smooth={true} duration={500}>Home</Link>
      <Link to="work" smooth={true} duration={500}>Work</Link>
      <Link to="skills" smooth={true} duration={500}>Skills</Link>
      <Link to="resources" smooth={true} duration={500}>Resources</Link>
      <Link to="developer-setup" smooth={true} duration={500}>Setup</Link>
    </nav>
  );
}

export default Navbar;

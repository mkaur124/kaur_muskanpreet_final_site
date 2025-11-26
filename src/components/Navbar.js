import React from 'react';
import { Link } from 'react-scroll';

const styles = {
  nav: {
    display: 'flex',
    gap: '20px',
    padding: '15px',
    background: '#222',
    color: 'white',
    justifyContent: 'center',
    position: 'sticky',
    top: 0,
    zIndex: 1000,
  },
  link: {
    cursor: 'pointer',
    color: 'white',
    textDecoration: 'none',
    fontWeight: 'bold',
  },
};

function Navbar() {
  return (
    <nav style={styles.nav}>
      <Link
        to="basic-info"
        smooth
        spy
        offset={-70}
        duration={500}
        style={styles.link}
      >
        Home
      </Link>
      <Link
        to="work"
        smooth
        spy
        offset={-70}
        duration={500}
        style={styles.link}
      >
        Work
      </Link>
      <Link
        to="skills"
        smooth
        spy
        offset={-70}
        duration={500}
        style={styles.link}
      >
        Skills
      </Link>
      <Link
        to="resources"
        smooth
        spy
        offset={-70}
        duration={500}
        style={styles.link}
      >
        Resources
      </Link>
      <Link
        to="developer-setup"
        smooth
        spy
        offset={-70}
        duration={500}
        style={styles.link}
      >
        Setup
      </Link>
    </nav>
  );
}

export default Navbar;

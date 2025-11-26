import React from 'react';

function BasicInfo() {
  return (
    <section id="basic-info">
      <h1>Muskanpreet Kaur</h1>
      <p>Full Stack Web Developer</p>
      <img
        src="/profile.png"
        alt="Muskanpreet Kaur"
        width={200}
        style={{ borderRadius: '20%', border: '3px solid #000000ff' }}
      />

      <p>Email: muskanpreetkaur700@gmail.com</p>

      <p>
        <a
          href="https://github.com/mkaur124"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub: mkaur124
        </a>
      </p>
    </section>
  );
}

export default BasicInfo;

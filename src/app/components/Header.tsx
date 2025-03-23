import React from "react";

const Header = () => {
  return (
    <header className="container">
      <img src="/profile.jpg" alt="John Doe" className="profile-img" />
      <h1>John Doe</h1>
      <p>Software Developer | Penggemar Teknologi | Pemecah Masalah</p>
      <p>Kontak: johndoe@email.com</p>
      <p>
        Temukan saya di:
        <a href="https://www.linkedin.com/in/johndoe">LinkedIn</a> |
        <a href="https://github.com/johndoe">GitHub</a>
      </p>
    </header>
  );
};

export default Header;

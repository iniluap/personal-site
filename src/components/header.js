import React from 'react';

export default function Header() {
  return (
    <header className="psj-header-wrapper">
      <div className="psj-header-image-wrapper">
        <img
          src="/header-image.png"
          alt="Paulina Sedlak-Jakubowska"
          className="psj-header-image"
        />
      </div>
      <div className="psj-header-text-wrapper">
        <h1>Paulina Sędłak-Jakubowska</h1>
        <h2>frontend developer</h2>
      </div>
    </header>
  );
}

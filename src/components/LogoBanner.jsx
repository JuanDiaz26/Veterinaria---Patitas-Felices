import React, { useEffect } from 'react';
import '../components/LogoBanner.css';

const logos = [
  { src: '../src/assets/pedigree.png', alt: 'Logo 1' },
  { src: '../src/assets/purina.png', alt: 'Logo 2' },
  { src: '../src/assets/whiskas.png', alt: 'Logo 3' },
  { src: '../src/assets/nutrique.png', alt: 'Logo 4' },
  { src: '../src/assets/prince.png', alt: 'Logo 5' },
  { src: '../src/assets/eukanuba.png', alt: 'Logo 6' },
];

const LogoBanner = () => {
  useEffect(() => {
    const logoTrack = document.querySelector('.logo-track');
    const slides = Array.from(document.querySelectorAll('.logo-slide'));

    slides.forEach(slide => {
      const clone = slide.cloneNode(true);
      logoTrack.appendChild(clone);
    });
  }, []);

  return (
    <div className="logo-banner">
      <div className="logo-track">
        {logos.map((logo, index) => (
          <div className="logo-slide" key={index}>
            <img src={logo.src} alt={logo.alt} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default LogoBanner;

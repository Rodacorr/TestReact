import { useState, useEffect } from 'react';

function AnimatedHeroTitle() {
  const [mainTitle, setMainTitle] = useState('');
  const [subtitle, setSubtitle] = useState('');
  const [showDescription, setShowDescription] = useState(false);

  useEffect(() => {
    const text = 'MPI Taller Mecánico';
    const subText = 'Expertos en vehículos de alta gama';
    let index = 0;
    let subIndex = 0;

    const typeMainTitle = () => {
      if (index <= text.length) {
        setMainTitle(text.slice(0, index));
        index++;
        setTimeout(typeMainTitle, 80);
      } else {
        setTimeout(typeSubtitle, 200);
      }
    };

    const typeSubtitle = () => {
      if (subIndex <= subText.length) {
        setSubtitle(subText.slice(0, subIndex));
        subIndex++;
        setTimeout(typeSubtitle, 50);
      } else {
        setShowDescription(true);
      }
    };

    setTimeout(typeMainTitle, 200);
  }, []);

  return (
    <div className="hero-content animated-hero">
      <h1>{mainTitle}<span className="cursor">|</span></h1>
      <p className="hero-subtitle">{subtitle}</p>
      <div className={`hero-description ${showDescription ? 'fade-in' : ''}`}>
        <p>Más de 20 años de experiencia brindando servicio de excelencia</p>
        <p>Especialistas certificados en las mejores marcas</p>
      </div>
    </div>
  );
}

export default AnimatedHeroTitle; 
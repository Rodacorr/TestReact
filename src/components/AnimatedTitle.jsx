import { useState, useEffect } from 'react';

function AnimatedTitle() {
  const [displayText, setDisplayText] = useState('');
  const titles = [
    'MPI - Taller Especializado',
    'Expertos en vehículos de alta gama'
  ];

  useEffect(() => {
    let titleIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let timeoutId;

    const animateText = () => {
      const currentText = titles[titleIndex];

      if (!isDeleting) {
        // Escribiendo
        setDisplayText(currentText.substring(0, charIndex + 1));
        charIndex++;

        if (charIndex === currentText.length) {
          isDeleting = true;
          timeoutId = setTimeout(animateText, 2500);
          return;
        }
      } else {
        // Borrando
        setDisplayText(currentText.substring(0, charIndex));
        charIndex--;

        if (charIndex === 0) {
          isDeleting = false;
          titleIndex = (titleIndex + 1) % titles.length;
          timeoutId = setTimeout(animateText, 500);
          return;
        }
      }

      const speed = isDeleting ? 75 : 150;
      timeoutId = setTimeout(animateText, speed);
    };

    timeoutId = setTimeout(animateText, 100);

    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <h1 className="animated-title">
      {displayText}<span className="cursor">|</span>
    </h1>
  );
}

export default AnimatedTitle; 
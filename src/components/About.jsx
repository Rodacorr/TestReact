function About() {
  return (
    <div className="about-section">
      <div className="about-content">
        <div className="about-text">
          <h2>Acerca de MPI</h2>
          <p>
            Con más de dos décadas de experiencia en el sector automotriz, MPI se ha consolidado
            como un referente en el mantenimiento y reparación de vehículos de alta gama.
          </p>
          <p>
            Nuestro equipo de técnicos altamente capacitados combina experiencia y tecnología
            de última generación para ofrecer un servicio de excelencia a nuestros clientes.
          </p>
          <p>
            Nos especializamos en las marcas más prestigiosas del mercado, manteniendo siempre
            los estándares más altos de calidad y profesionalismo.
          </p>
        </div>
        <div className="about-video">
          <iframe
            src="https://www.youtube.com/embed/TU_VIDEO_ID" // Reemplaza con tu ID de video
            title="MPI Taller Mecánico"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="video-frame"
          ></iframe>
        </div>
      </div>
    </div>
  );
}

export default About; 
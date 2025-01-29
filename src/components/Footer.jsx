import PropTypes from 'prop-types'

function Footer({ onContactClick }) {
  // Configura estos valores con tu información real
  const contactInfo = {
    email: 'info@mpitaller.com',
    whatsapp: '5491112345678',
    direccion: 'Av. Ejemplo 1234, Buenos Aires'
  };

  const whatsappLink = `https://wa.me/${contactInfo.whatsapp}`;
  const emailLink = `mailto:${contactInfo.email}`;

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h4>MPI Taller Mecánico</h4>
          <p>Especialistas en vehículos de alta gama desde XXXX</p>
        </div>
        <div className="footer-section">
          <h4>Contacto</h4>
          <p>📍 {contactInfo.direccion}</p>
          <p>
            📞 <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
              WhatsApp
            </a>
          </p>
          <p>
            ✉️ <a href={emailLink}>{contactInfo.email}</a>
          </p>
          <p>
            📝 <a href="#" onClick={(e) => {
              e.preventDefault();
              onContactClick();
            }}>Formulario de Contacto</a>
          </p>
        </div>
        <div className="footer-section">
          <h4>Horarios</h4>
          <p>Lunes a Viernes: 9:00 - 18:00</p>
          <p>Sábados: 9:00 - 13:00</p>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2024 MPI Taller Mecánico. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
}

Footer.propTypes = {
  onContactClick: PropTypes.func.isRequired
}

export default Footer; 
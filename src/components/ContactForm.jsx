// src/components/ContactForm.js
import { useState } from 'react';

function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    vehicle: ''
  });

  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');

    try {
      // Aquí puedes usar un servicio de email como EmailJS, Formspree, o tu propio backend
      const response = await fetch('URL_DE_API', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus('success');
        setFormData({
          name: '',
          email: '',
          phone: '',
          message: '',
          vehicle: ''
        });
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  return (
    <div className="contact-form-container" id="contacto">
      <h2>Contáctanos</h2>
      <form onSubmit={handleSubmit} className="contact-form">
        <div className="form-group">
          <label htmlFor="name">Nombre:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            placeholder="Tu nombre completo"
          />
        </div>

        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            placeholder="tu@email.com"
          />
        </div>

        <div className="form-group">
          <label htmlFor="phone">Teléfono:</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="Tu número de teléfono"
          />
        </div>

        <div className="form-group">
          <label htmlFor="vehicle">Vehículo:</label>
          <input
            type="text"
            id="vehicle"
            name="vehicle"
            value={formData.vehicle}
            onChange={handleChange}
            placeholder="Marca y modelo de tu vehículo"
          />
        </div>

        <div className="form-group">
          <label htmlFor="message">Mensaje:</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            placeholder="¿En qué podemos ayudarte?"
            rows="4"
          />
        </div>

        <button 
          type="submit" 
          className={`submit-button ${status === 'sending' ? 'sending' : ''}`}
          disabled={status === 'sending'}
        >
          {status === 'sending' ? 'Enviando...' : 'Enviar Mensaje'}
        </button>

        {status === 'success' && (
          <div className="form-message success">
            ¡Mensaje enviado con éxito! Nos pondremos en contacto contigo pronto.
          </div>
        )}
        
        {status === 'error' && (
          <div className="form-message error">
            Hubo un error al enviar el mensaje. Por favor, intenta nuevamente.
          </div>
        )}
      </form>
    </div>
  );
}

export default ContactForm;
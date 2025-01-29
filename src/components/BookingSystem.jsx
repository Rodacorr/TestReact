import { useState } from 'react';


const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:3001';

function BookingSystem() {
  const [bookingData, setBookingData] = useState({
    date: '',
    time: '',
    name: '',
    email: '',
    phone: '',
    vehicle: '',
    service: ''
  });

  const availableTimeSlots = [
    '09:00', '10:00', '11:00', '12:00',
    '14:00', '15:00', '16:00', '17:00'
  ];

  const services = [
    'Diagnóstico general',
    'Mantenimiento preventivo',
    'Reparación de motor',
    'Sistema de frenos',
    'Suspensión',
    'Sistema eléctrico'
  ];

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`${API_URL}/api/create-booking`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(bookingData),
      });

      if (response.ok) {
        alert('Reserva realizada con éxito');
        setBookingData({
          date: '',
          time: '',
          name: '',
          email: '',
          phone: '',
          vehicle: '',
          service: ''
        });
      } else {
        alert('Error al realizar la reserva');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Error al realizar la reserva');
    }
  };

  return (
    <div className="booking-container">
      <h2>Reserva tu Visita</h2>
      <form onSubmit={handleSubmit} className="booking-form">
        <div className="form-group">
          <label htmlFor="date">Fecha:</label>
          <input
            type="date"
            id="date"
            value={bookingData.date}
            onChange={(e) => setBookingData({...bookingData, date: e.target.value})}
            min={new Date().toISOString().split('T')[0]}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="time">Hora:</label>
          <select
            id="time"
            value={bookingData.time}
            onChange={(e) => setBookingData({...bookingData, time: e.target.value})}
            required
          >
            <option value="">Selecciona un horario</option>
            {availableTimeSlots.map(time => (
              <option key={time} value={time}>{time}</option>
            ))}
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="service">Servicio:</label>
          <select
            id="service"
            value={bookingData.service}
            onChange={(e) => setBookingData({...bookingData, service: e.target.value})}
            required
          >
            <option value="">Selecciona un servicio</option>
            {services.map(service => (
              <option key={service} value={service}>{service}</option>
            ))}
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="name">Nombre:</label>
          <input
            type="text"
            id="name"
            value={bookingData.name}
            onChange={(e) => setBookingData({...bookingData, name: e.target.value})}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={bookingData.email}
            onChange={(e) => setBookingData({...bookingData, email: e.target.value})}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="phone">Teléfono:</label>
          <input
            type="tel"
            id="phone"
            value={bookingData.phone}
            onChange={(e) => setBookingData({...bookingData, phone: e.target.value})}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="vehicle">Vehículo (Marca/Modelo):</label>
          <input
            type="text"
            id="vehicle"
            value={bookingData.vehicle}
            onChange={(e) => setBookingData({...bookingData, vehicle: e.target.value})}
            required
          />
        </div>

        <button type="submit" className="submit-button">
          Reservar
        </button>
      </form>
    </div>
  );
}

export default BookingSystem; 
function ReservioWidget() {
  return (
    <div className="reservio-container">
      <h2>Reserva tu Visita</h2>
      <div className="reservio-wrapper">
        <iframe 
          src="https://matias9.reservio.com" 
          width="100%" 
          height="500px" 
          frameBorder="0"
          title="Sistema de Reservas"
        />
      </div>
    </div>
  );
}

export default ReservioWidget; 
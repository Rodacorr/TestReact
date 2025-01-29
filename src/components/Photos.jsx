// src/components/Photos.js
function Photos() {
  const trabajos = [
    {
      id: 1,
      titulo: 'Reparación Motor BMW',
      imagen: '/ruta-imagen-1.jpg',
      descripcion: 'Reparación completa de motor BMW Serie 3',
      fecha: 'Marzo 2024',
      categoria: 'Reparación Motor'
    },
    {
      id: 2,
      titulo: 'Mantenimiento Mercedes',
      imagen: '/ruta-imagen-2.jpg',
      descripcion: 'Servicio de mantenimiento Mercedes-Benz Clase C',
      fecha: 'Febrero 2024',
      categoria: 'Mantenimiento'
    }
  ];

  return (
    <div className="gallery">
      {trabajos.map(trabajo => (
        <div key={trabajo.id} className="gallery-card">
          <div className="gallery-card-image">
            <img src={trabajo.imagen} alt={trabajo.titulo} />
            <div className="gallery-card-category">{trabajo.categoria}</div>
          </div>
          <div className="gallery-card-content">
            <h3>{trabajo.titulo}</h3>
            <p>{trabajo.descripcion}</p>
            <span className="gallery-card-date">{trabajo.fecha}</span>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Photos;
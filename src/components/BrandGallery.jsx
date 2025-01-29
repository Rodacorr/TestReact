function BrandGallery() {
  const marcas = [
    {
      id: 1,
      nombre: 'Mercedes-Benz',
      logo: '/path-to-mercedes-logo.png',
      descripcion: 'Especialistas en toda la gama Mercedes-Benz'
    },
    {
      id: 2,
      nombre: 'BMW',
      logo: '/path-to-bmw-logo.png',
      descripcion: 'Servicio autorizado para BMW'
    },
    {
      id: 3,
      nombre: 'Audi',
      logo: '/path-to-audi-logo.png',
      descripcion: 'Expertos en tecnología Audi'
    },
    {
      id: 4,
      nombre: 'Porsche',
      logo: '/path-to-porsche-logo.png',
      descripcion: 'Mantenimiento especializado Porsche'
    }
  ];

  return (
    <div className="brand-gallery">
      {marcas.map(marca => (
        <div key={marca.id} className="brand-card">
          <img src={marca.logo} alt={marca.nombre} className="brand-logo" />
          <h3>{marca.nombre}</h3>
          <p>{marca.descripcion}</p>
        </div>
      ))}
    </div>
  );
}

export default BrandGallery; 
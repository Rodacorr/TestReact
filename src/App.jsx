import { useState, useEffect } from 'react'
import './App.css'
import Photos from './components/Photos.jsx'
import ContactForm from './components/ContactForm.jsx'
import Footer from './components/Footer.jsx'
import BrandGallery from './components/BrandGallery.jsx'
import HeroSection from './components/HeroSection.jsx'
import WhatsAppButton from './components/WhatsAppButton.jsx'
import About from './components/About.jsx'
import ReservioWidget from './components/ReservioWidget.jsx'
import AnimatedTitle from './components/AnimatedTitle.jsx'

function App() {
  const [showContent, setShowContent] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [showWhatsApp, setShowWhatsApp] = useState(false)
  const [activeSection, setActiveSection] = useState('inicio')

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY
      const windowHeight = window.innerHeight
      const sections = document.querySelectorAll('.section')
      
      setIsScrolled(scrollPosition > windowHeight * 0.8)
      setShowWhatsApp(scrollPosition > 300)
      
      if (scrollPosition > 100) {
        setShowContent(true)
      }

      // Detectar sección actual
      sections.forEach((section) => {
        const sectionTop = section.offsetTop
        const sectionHeight = section.clientHeight
        if (
          scrollPosition >= sectionTop - 100 && 
          scrollPosition < sectionTop + sectionHeight - 100
        ) {
          const id = section.getAttribute('data-section')
          setActiveSection(id)
        }
      })
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleExplore = () => {
    setShowContent(true)
    window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })
  }

  const handleContactClick = () => {
    setActiveSection('contacto');
    setShowContent(true);
    document.querySelector('#contacto').scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="app">
      <HeroSection onExplore={handleExplore} />
      
      {/* Agrupar los botones flotantes */}
      <div className={`floating-buttons ${showWhatsApp ? 'visible' : ''}`}>
        <WhatsAppButton />
      </div>

      <header className={isScrolled ? 'scrolled' : ''}>
        <AnimatedTitle />
        <nav>
          <button 
            className={activeSection === 'inicio' ? 'active' : ''} 
            onClick={() => {
              document.querySelector('[data-section="inicio"]').scrollIntoView({ behavior: 'smooth' })
            }}
          >
            Inicio
          </button>
          <button 
            className={activeSection === 'acerca' ? 'active' : ''} 
            onClick={() => {
              document.querySelector('[data-section="acerca"]').scrollIntoView({ behavior: 'smooth' })
            }}
          >
            Acerca de
          </button>
          <button 
            className={activeSection === 'servicios' ? 'active' : ''} 
            onClick={() => {
              document.querySelector('[data-section="servicios"]').scrollIntoView({ behavior: 'smooth' })
            }}
          >
            Servicios
          </button>
          <button 
            className={activeSection === 'trabajos' ? 'active' : ''} 
            onClick={() => {
              document.querySelector('[data-section="trabajos"]').scrollIntoView({ behavior: 'smooth' })
            }}
          >
            Trabajos
          </button>
          <button 
            className={activeSection === 'agenda' ? 'active' : ''} 
            onClick={() => {
              document.querySelector('[data-section="agenda"]').scrollIntoView({ behavior: 'smooth' })
            }}
          >
            Agendar
          </button>
          <button 
            className={activeSection === 'contacto' ? 'active' : ''} 
            onClick={() => {
              document.querySelector('[data-section="contacto"]').scrollIntoView({ behavior: 'smooth' })
            }}
          >
            Contacto
          </button>
        </nav>
      </header>

      <div className={`main-content ${showContent ? 'visible' : ''}`}>
        <main>
          <div className="section" data-section="inicio">
            <h2>Bienvenidos a MPI</h2>
            <p>Con más de X años de experiencia, somos especialistas en mantenimiento y reparación de vehículos de alta gama.</p>
            <h3>Marcas con las que trabajamos:</h3>
            <BrandGallery />
          </div>

          <div className="section" data-section="acerca">
            <About />
          </div>

          <div className="section" data-section="servicios">
            <h2>Nuestros Servicios</h2>
            <ul className="services-list">
              <li>Diagnóstico computarizado</li>
              <li>Mantenimiento preventivo</li>
              <li>Reparación de motor</li>
              <li>Sistemas de frenos</li>
              <li>Suspensión y dirección</li>
              <li>Sistemas eléctricos</li>
            </ul>
          </div>

          <div className="section" data-section="trabajos">
            <h2>Nuestros Trabajos</h2>
            <Photos />
          </div>

          <div className="section" data-section="agenda">
            <ReservioWidget />
          </div>

          <div className="section" data-section="contacto">
            <ContactForm />
            <div className="location">
              <h3>Ubicación</h3>
              <p>Dirección: [Tu dirección aquí]</p>
              <p>Teléfono: [Tu teléfono]</p>
              <p>Horario: Lunes a Viernes 9:00 - 18:00</p>
            </div>
          </div>
        </main>

        <Footer onContactClick={handleContactClick} />
      </div>
    </div>
  )
}

export default App

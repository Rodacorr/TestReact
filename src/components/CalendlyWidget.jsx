import { useEffect } from 'react';

function CalendlyWidget() {
  useEffect(() => {
    // Remover cualquier widget existente primero
    const existingWidgets = document.querySelectorAll('.calendly-badge-widget');
    existingWidgets.forEach(widget => widget.remove());

    // Agregar el CSS de Calendly
    const link = document.createElement('link');
    link.href = 'https://assets.calendly.com/assets/external/widget.css';
    link.rel = 'stylesheet';
    document.head.appendChild(link);

    // Agregar el script de Calendly
    const script = document.createElement('script');
    script.src = 'https://assets.calendly.com/assets/external/widget.js';
    script.async = true;
    document.body.appendChild(script);

    // Inicializar el badge widget cuando el script esté cargado
    script.onload = () => {
      window.Calendly.initBadgeWidget({
        url: 'https://calendly.com/matipirez99/30min?hide_event_type_details=1&hide_gdpr_banner=1&background_color=0a0a0a&text_color=f8f4f4&primary_color=f72209',
        text: 'Agendar',
        color: '#080808',
        textColor: '#f70a0a'
      });
    };

    // Limpieza
    return () => {
      document.head.removeChild(link);
      document.body.removeChild(script);
      const widgets = document.querySelectorAll('.calendly-badge-widget');
      widgets.forEach(widget => widget.remove());
    };
  }, []);

  return null; // El widget se inyecta automáticamente
}

export default CalendlyWidget; 
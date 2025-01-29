import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-purple-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Navigation Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Navegación</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="hover:text-purple-300">Inicio</Link></li>
              <li><Link to="/coaching-personal" className="hover:text-purple-300">Coaching Personal</Link></li>
              <li><Link to="/coaching-familiar" className="hover:text-purple-300">Coaching Familiar</Link></li>
              <li><Link to="/coaching-equipos" className="hover:text-purple-300">Coaching de Equipos</Link></li>
              <li><Link to="/pintura-corporativa" className="hover:text-purple-300">Pintura Corporativa</Link></li>
              <li><Link to="/testimonios" className="hover:text-purple-300">Testimonios</Link></li>
              <li><Link to="/sala-reuniones" className="hover:text-purple-300">Sala de reuniones</Link></li>
            </ul>
          </div>

          {/* Contact Information */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contacto</h3>
            <ul className="space-y-4">
              <li className="flex items-center">
                <Mail className="w-5 h-5 mr-2" />
                <a href="mailto:contact@colorcoach.es" className="hover:text-purple-300">
                  contact@colorcoach.es
                </a>
              </li>
              <li className="flex items-center">
                <Phone className="w-5 h-5 mr-2" />
                <a href="tel:+34600000000" className="hover:text-purple-300">
                  +34 600 000 000
                </a>
              </li>
              <li className="flex items-center">
                <MapPin className="w-5 h-5 mr-2" />
                <span>Barcelona, España</span>
              </li>
            </ul>
          </div>

          {/* Logo and Description */}
          <div>
            <h2 className="text-2xl font-bold mb-4">ColorCoach</h2>
            <p className="text-purple-200 mb-4">
              Transformando vidas a través del coaching y el poder de los colores.
            </p>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-purple-800 text-center">
          <p className="text-purple-300">
            © {new Date().getFullYear()} MaAngels Casanovas Coma - ColorCoach. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
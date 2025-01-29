import React from 'react';
import { Link } from 'react-router-dom';
import ContactForm from '../components/ContactForm';
import { ChevronDown } from 'lucide-react';

const Home = () => {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="h-screen relative flex items-center justify-center">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1605721911519-3dfeb3be25e7?auto=format&fit=crop&q=80)',
            filter: 'brightness(0.7)',
          }}
        />
        <div className="relative text-center text-white z-10 px-4">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            ColorCoach
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto">
            Descubre el poder transformador del coaching a través de los colores
          </p>
          <Link
            to="/sala-reuniones"
            className="inline-block bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-8 rounded-full transition-colors duration-300"
          >
            Explora Nuestra Sala
          </Link>
        </div>
        <button
          onClick={scrollToContact}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce"
          aria-label="Scroll to contact"
        >
          <ChevronDown size={40} />
        </button>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-16 text-gray-800">
            Nuestros Servicios
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <Link
                key={service.title}
                to={service.link}
                className="group bg-white rounded-lg shadow-lg overflow-hidden transform transition-transform hover:-translate-y-2"
              >
                <div
                  className="h-48 bg-cover bg-center"
                  style={{ backgroundImage: `url(${service.image})` }}
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2 text-gray-800">
                    {service.title}
                  </h3>
                  <p className="text-gray-600">{service.description}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-16 text-gray-800">
            Contacto
          </h2>
          <ContactForm />
        </div>
      </section>
    </div>
  );
};

const services = [
  {
    title: 'Coaching Personal',
    description: 'Descubre tu potencial y alcanza tus metas personales.',
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80',
    link: '/coaching-personal',
  },
  {
    title: 'Coaching Familiar',
    description: 'Fortalece los lazos familiares y mejora la comunicación.',
    image: 'https://images.unsplash.com/photo-1511895426328-dc8714191300?auto=format&fit=crop&q=80',
    link: '/coaching-familiar',
  },
  {
    title: 'Coaching de Equipos',
    description: 'Potencia el rendimiento y la cohesión de tu equipo.',
    image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80',
    link: '/coaching-equipos',
  },
];

export default Home;
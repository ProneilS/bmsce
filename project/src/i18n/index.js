import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      eduAI: 'EduAI',
      about: 'About',
      features: 'Features',
      contact: 'Contact',
      language: 'Language',
      hero: {
        title1: 'AI-Powered Education',
        title2: 'for Everyone',
        description: 'Breaking barriers in education through inclusive, AI-driven learning experiences that adapt to every student's needs.',
        getStarted: 'Get Started',
        learnMore: 'Learn More'
      },
      features: {
        heading: 'Features',
        subheading: 'Empowering Education Through Technology',
        accessibility: {
          title: 'Accessible Learning',
          description: 'Education available anytime, anywhere, on any device.'
        },
        multilingual: {
          title: 'Multiple Languages',
          description: 'Content available in various languages to reach diverse communities.'
        },
        inclusive: {
          title: 'Inclusive Design',
          description: 'Built with accessibility in mind to accommodate all learners.'
        },
        adaptive: {
          title: 'Adaptive Learning',
          description: 'AI-powered system that adapts to individual learning styles and pace.'
        }
      }
    }
  },
  es: {
    translation: {
      eduAI: 'EduAI',
      about: 'Acerca de',
      features: 'Características',
      contact: 'Contacto',
      language: 'Idioma',
      hero: {
        title1: 'Educación Impulsada por IA',
        title2: 'para Todos',
        description: 'Rompiendo barreras en la educación a través de experiencias de aprendizaje inclusivas impulsadas por IA que se adaptan a las necesidades de cada estudiante.',
        getStarted: 'Comenzar',
        learnMore: 'Más Información'
      },
      features: {
        heading: 'Características',
        subheading: 'Potenciando la Educación a Través de la Tecnología',
        accessibility: {
          title: 'Aprendizaje Accesible',
          description: 'Educación disponible en cualquier momento, en cualquier lugar, en cualquier dispositivo.'
        },
        multilingual: {
          title: 'Múltiples Idiomas',
          description: 'Contenido disponible en varios idiomas para llegar a comunidades diversas.'
        },
        inclusive: {
          title: 'Diseño Inclusivo',
          description: 'Construido pensando en la accesibilidad para acomodar a todos los estudiantes.'
        },
        adaptive: {
          title: 'Aprendizaje Adaptativo',
          description: 'Sistema impulsado por IA que se adapta a los estilos y ritmo de aprendizaje individuales.'
        }
      }
    }
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'en',
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
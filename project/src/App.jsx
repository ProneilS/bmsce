import React from 'react';
import { I18nextProvider } from 'react-i18next';
import i18n from './i18n';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';

function App() {
  return (
    <I18nextProvider i18n={i18n}>
      <div className="min-h-screen bg-white">
        <Navbar />
        <Hero />
        <Features />
      </div>
    </I18nextProvider>
  );
}

export default App;
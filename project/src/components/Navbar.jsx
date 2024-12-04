import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Menu } from '@headlessui/react';
import { motion } from 'framer-motion';

const languages = [
  { code: 'en', name: 'English' },
  { code: 'es', name: 'Español' },
  { code: 'hi', name: 'हिंदी' },
  { code: 'ar', name: 'العربية' }
];

export default function Navbar() {
  const { t, i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <nav className="bg-indigo-600 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex-shrink-0 cursor-pointer"
          >
            <h1 className="text-2xl font-bold">{t('eduAI')}</h1>
          </motion.div>

          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <a href="#about" className="hover:bg-indigo-500 px-3 py-2 rounded-md">
                {t('about')}
              </a>
              <a href="#features" className="hover:bg-indigo-500 px-3 py-2 rounded-md">
                {t('features')}
              </a>
              <a href="#contact" className="hover:bg-indigo-500 px-3 py-2 rounded-md">
                {t('contact')}
              </a>
              <Menu as="div" className="relative">
                <Menu.Button className="hover:bg-indigo-500 px-3 py-2 rounded-md">
                  {t('language')}
                </Menu.Button>
                <Menu.Items className="absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                  {languages.map((lang) => (
                    <Menu.Item key={lang.code}>
                      {({ active }) => (
                        <button
                          className={`${
                            active ? 'bg-indigo-100' : ''
                          } block px-4 py-2 text-sm text-gray-700 w-full text-left`}
                          onClick={() => changeLanguage(lang.code)}
                        >
                          {lang.name}
                        </button>
                      )}
                    </Menu.Item>
                  ))}
                </Menu.Items>
              </Menu>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
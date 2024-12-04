import { useTranslation } from 'next-i18next';
import { motion } from 'framer-motion';
import { 
  AcademicCapIcon, 
  GlobeAltIcon, 
  UserGroupIcon, 
  LightBulbIcon 
} from '@heroicons/react/24/outline';

const features = [
  {
    name: 'features.accessibility.title',
    description: 'features.accessibility.description',
    icon: AcademicCapIcon,
  },
  {
    name: 'features.multilingual.title',
    description: 'features.multilingual.description',
    icon: GlobeAltIcon,
  },
  {
    name: 'features.inclusive.title',
    description: 'features.inclusive.description',
    icon: UserGroupIcon,
  },
  {
    name: 'features.adaptive.title',
    description: 'features.adaptive.description',
    icon: LightBulbIcon,
  },
];

export default function Features() {
  const { t } = useTranslation('common');

  return (
    <div className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">
            {t('features.heading')}
          </h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            {t('features.subheading')}
          </p>
        </div>

        <div className="mt-10">
          <div className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
            {features.map((feature, index) => (
              <motion.div
                key={feature.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                className="relative"
              >
                <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                  <feature.icon className="h-6 w-6" aria-hidden="true" />
                </div>
                <p className="ml-16 text-lg leading-6 font-medium text-gray-900">
                  {t(feature.name)}
                </p>
                <p className="mt-2 ml-16 text-base text-gray-500">
                  {t(feature.description)}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
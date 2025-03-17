import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import hermesLogo from '../assets/hermes-logo.svg';
import anytimeLogo from '../assets/anytime-logo.svg';
import titanLogo from '../assets/titan-logo.jpeg';
import kalpataruLogo from '../assets/kalpataru-logo.png';
import lodhaLogo from '../assets/lodha-logo.png';
import narangLogo from '../assets/narang-logo.jpg';
import rustomjeeLogo from '../assets/rustomjee-logo.png';
import herStoryLogo from '../assets/her-story.png';
import montBlancLogo from '../assets/montblanc-1.svg';
const brands = [
  {
    name: 'HDFC Bank',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/2/28/HDFC_Bank_Logo.svg'
  },
  {
    name: 'Tanishq',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/7/71/Tanishq_Logo.svg'
  },
  {
    name: 'Louis Vuitton',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/7/76/Louis_Vuitton_logo_and_wordmark.svg'
  },
  {
    name: 'Hermes',
    logo: hermesLogo
  },
  {
    name: 'Reliance',
    logo: 'https://upload.wikimedia.org/wikipedia/hi/9/99/Reliance_Industries_Logo.svg'
  },
  {
    name: 'Anytime Fitness',
    logo: anytimeLogo
  },
  {
    name: 'Titan Eye',
    logo: titanLogo
  },
  {
    name: 'Kalpa-taru',
    logo: kalpataruLogo
  },
  {
    name: 'Abhinandan Lodha',
    logo: lodhaLogo
  },
  {
    name: 'Narang Realty',
    logo: narangLogo
  },
  {
    name: 'Rustomjee Realty',
    logo: rustomjeeLogo
  },
  {
    name: 'HerStory',
    logo: herStoryLogo
  },
  {
    name: 'Mont Blanc',
    logo: montBlancLogo
  }
];

export default function BrandMarquee() {
  const [duplicatedBrands, setDuplicatedBrands] = useState(brands);

  // Duplicate brands for seamless loop
  useEffect(() => {
    setDuplicatedBrands([...brands, ...brands]);
  }, []);

  return (
    <section className="w-full overflow-hidden bg-background py-8 md:py-16">
      <div className="flex flex-col items-center justify-center gap-4 text-center px-4">
        <h3 className="text-2xl font-bold tracking-tighter sm:text-3xl md:text-4xl text-gray-800">
          Trusted by Leading Brands
        </h3>
        <p className="mx-auto max-w-[700px] text-gray-600 text-sm md:text-base">
          We partner with the world&apos;s most prestigious brands to deliver exceptional experiences.
        </p>
      </div>

      <div className="block sm:hidden relative mt-8 w-full overflow-hidden">
        <motion.div
          className="flex gap-4 py-8 flex-nowrap"
          animate={{ x: ['0%', '-50%'] }}
          transition={{
            duration: 25,
            ease: 'linear',
            repeat: Infinity
          }}
          style={{ width: duplicatedBrands.length * 160 }}
        >
          {duplicatedBrands.map((brand, idx) => (
            <div key={`${brand.name}-mobile-${idx}`} className="flex items-center justify-center h-32 w-40">
              <img
                src={brand.logo || '/placeholder.svg'}
                alt={`${brand.name} logo`}
                className="h-full object-contain"
              />
            </div>
          ))}
        </motion.div>
      </div>

      <div className="hidden sm:block relative mt-12 w-full overflow-hidden">
        <motion.div
          className="flex gap-8 py-4 w-[250%]"
          animate={{ x: ['0%', '-50%'] }}
          transition={{
            duration: 25,
            ease: 'linear',
            repeat: Infinity
          }}
        >
          {duplicatedBrands.map((brand, idx) => (
            <div key={`${brand.name}-desktop-${idx}`} className="flex w-[260px] flex-col items-center gap-4">
              <div className="w-32 h-32 bg-white rounded-lg shadow-sm flex items-center justify-center px-1">
                <img
                  src={brand.logo || '/placeholder.svg'}
                  alt={`${brand.name} logo`}
                  className="max-h-20 max-w-full"
                />
              </div>
              <span className="text-lg font-medium text-center">{brand.name}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

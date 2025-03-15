import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import hermesLogo from '../assets/hermes-logo.svg';
import anytimeLogo from '../assets/anytime-logo.svg';
import titanLogo from '../assets/titan-logo.jpeg';
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
  }
];

export default function BrandMarquee() {
  const [duplicatedBrands, setDuplicatedBrands] = useState(brands);

  // Duplicate brands for seamless loop
  useEffect(() => {
    setDuplicatedBrands([...brands, ...brands]);
  }, []);

  return (
    <section className="w-full overflow-hidden bg-background py-12 md:py-24">
      <div className="container flex flex-col items-center justify-center gap-4 text-center">
        <h3 className="text-2xl font-bold tracking-tighter sm:text-4xl md:text-4xl text-gray-800">
          Trusted by Leading Brands
        </h3>
        <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
          We partner with the world&apos;s most prestigious brands to deliver exceptional experiences.
        </p>
      </div>

      <div className="relative mt-12 flex w-full overflow-hidden">
        <motion.div
          className="flex gap-8 py-4 w-[200%]"
          animate={{ x: ['0%', '-50%'] }}
          transition={{
            duration: 20,
            ease: 'linear',
            repeat: Infinity
          }}
        >
          {duplicatedBrands.map((brand, idx) => (
            <div key={`${brand.name}-${idx}`} className="flex w-[200px] flex-col items-center gap-4">
              <div className="relative aspect-[2/1] w-full overflow-hidden rounded-lg bg-muted p-4">
                <img
                  src={brand.logo || '/placeholder.svg'}
                  alt={`${brand.name} logo`}
                  className="w-full h-full object-contain p-2 transition-opacity hover:opacity-70"
                />
              </div>
              <span className="text-sm font-medium">{brand.name}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

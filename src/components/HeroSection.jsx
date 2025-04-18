import { useEffect, useState } from 'react';
import { cn } from '@/lib/utils';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { NumberTicker } from './magicui/number-ticker';
import { AuroraText } from './magicui/aurora-text';

const counterAnimation = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.5
    }
  }
};

export default function HeroSection() {
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <>
      <section className="relative overflow-hidden bg-gradient-to-r from-blue-800 via-blue-900 to-slate-700 py-16 md:py-24">
        {/* Animated background elements */}
        <div className="absolute inset-0 z-0 opacity-20">
          <div className="absolute -left-10 -top-10 h-64 w-64 rounded-full bg-yellow-500 opacity-20 blur-3xl animate-blob"></div>
          <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-blue-400 opacity-10 blur-3xl animate-blob animation-delay-2000"></div>
          <div className="absolute left-1/3 top-1/3 h-64 w-64 rounded-full bg-blue-300 opacity-10 blur-3xl animate-blob animation-delay-4000"></div>
        </div>

        <div className="relative z-10 px-4 md:px-6">
          <div
            className={cn(
              'inline-block rounded-full bg-black text-yellow-400 px-4 py-1 font-medium shadow-lg transition-all duration-700 ease-out',
              isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
            )}
          >
            Celebrating 26 Years of Excellence
          </div>

          <div className="mt-6 max-w-3xl">
            <h1
              className={cn(
                'text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl transition-all duration-700 delay-100 ease-out',
                isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
              )}
            >
              Premium HVAC Solutions
              <br />
              For Your Comfort
            </h1>

            <p
              className={cn(
                'mt-6 text-lg text-white/90 transition-all duration-700 delay-200 ease-out',
                isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
              )}
            >
              Delivering expert heating, ventilation, and air conditioning services with unmatched quality and
              reliability since 1999.
            </p>

            <div
              className={cn(
                'mt-8 flex flex-wrap gap-4 transition-all duration-700 delay-300 ease-out',
                isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
              )}
            >
              <button
                onClick={() => window.open('https://wa.me/9324775501', '_blank')}
                className="inline-flex h-12 items-center justify-center rounded-md border border-white/70 bg-white/10 px-6 text-base font-medium text-white backdrop-blur-sm transition-all duration-300 hover:bg-white/20 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2"
              >
                Get a Free Quote
              </button>
              <Link
                to="/products"
                className="inline-flex h-12 items-center justify-center rounded-md border border-white/70 bg-white/10 px-6 text-base font-medium text-white backdrop-blur-sm transition-all duration-300 hover:bg-white/20 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2"
              >
                Explore Products
              </Link>
            </div>
          </div>
        </div>
      </section>
      <motion.div
        className="w-[95%] mx-auto rounded-2xl bg-white border-blue-800 border py-12 text-white mt-5"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={counterAnimation}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <Counter number={26} text="Years of Experience" />
            <Counter number={7250} text="Completed Projects" />
            <Counter number={99} text="Client Satisfaction" suffix="%" />
            <Counter number={180} text="Certified Technicians" />
          </div>
        </div>
      </motion.div>
    </>
  );
}

const Counter = ({ number, text, suffix = '' }) => {
  return (
    <div>
      <motion.p className="text-4xl text-blue-800 md:text-5xl font-bold mb-2" variants={counterAnimation}>
        <NumberTicker value={number} className="whitespace-pre-wrap tracking-tighter text-blue-800" />
        {suffix}
      </motion.p>
      <motion.p className="text-sm md:text-base text-blue-800" variants={counterAnimation}>
        {text}
      </motion.p>
    </div>
  );
};

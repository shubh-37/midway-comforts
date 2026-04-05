import { useEffect, useState } from 'react';
import { cn } from '@/lib/utils';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { NumberTicker } from './magicui/number-ticker';

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
      <section className="relative overflow-hidden bg-[#0f172a] py-16 md:py-24">
        {/* Dot grid overlay */}
        <div className="absolute inset-0 bg-dot-grid opacity-40 z-0" />

        {/* Animated background blobs */}
        <div className="absolute inset-0 z-0">
          <div className="absolute -left-10 -top-10 h-64 w-64 rounded-full bg-blue-600 opacity-30 blur-3xl animate-blob"></div>
          <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-indigo-500 opacity-20 blur-3xl animate-blob animation-delay-2000"></div>
          <div className="absolute left-1/3 top-1/3 h-64 w-64 rounded-full bg-blue-400 opacity-15 blur-3xl animate-blob animation-delay-4000"></div>
        </div>

        <div className="relative z-10 px-4 md:px-6">
          <div
            className={cn(
              'inline-flex items-center gap-2 rounded-full bg-yellow-400/15 border border-yellow-400/40 text-yellow-300 px-4 py-1.5 text-sm font-medium shadow-sm transition-all duration-700 ease-out',
              isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
            )}
          >
            Celebrating 26 Years of Excellence
          </div>

          <div className="mt-6 max-w-3xl">
            <h1
              className={cn(
                'text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl transition-all duration-700 delay-100 ease-out',
                isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
              )}
            >
              <span className="text-gradient-blue">Premium HVAC Solutions</span>
              <br />
              <span className="text-white">For Your Comfort</span>
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
                className="inline-flex h-12 items-center justify-center rounded-md bg-blue-600 hover:bg-blue-500 px-6 text-base font-medium text-white btn-glow-blue border border-transparent focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2"
              >
                Get a Free Quote
              </button>
              <Link
                to="/products"
                className="inline-flex h-12 items-center justify-center rounded-md border border-white/60 bg-white/10 px-6 text-base font-medium text-white backdrop-blur-sm transition-all duration-300 hover:bg-white/20 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2"
              >
                Explore Products
              </Link>
            </div>
          </div>
        </div>
      </section>

      <motion.div
        className="w-[95%] mx-auto rounded-2xl bg-card text-card-foreground border border-border py-12 mt-5 shadow-xl"
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
      <motion.p className="text-4xl text-primary md:text-5xl font-bold mb-2" variants={counterAnimation}>
        <NumberTicker value={number} className="whitespace-pre-wrap tracking-tighter text-primary" />
        {suffix}
      </motion.p>
      <motion.p className="text-sm md:text-base text-muted-foreground" variants={counterAnimation}>
        {text}
      </motion.p>
    </div>
  );
};

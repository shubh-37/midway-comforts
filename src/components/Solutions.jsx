import { useState, useRef, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { ArrowRight, ArrowLeft, Monitor, Megaphone, Wind, Cpu, Zap, Calendar, CheckCircle2 } from 'lucide-react';

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }
  }
};

const slideVariants = {
  enter: (direction) => ({
    x: direction > 0 ? 1000 : -1000,
    opacity: 0
  }),
  center: {
    x: 0,
    opacity: 1
  },
  exit: (direction) => ({
    x: direction < 0 ? 1000 : -1000,
    opacity: 0
  })
};

export default function PremiumHVACSolutions() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const carouselRef = useRef(null);
  const controls = useAnimation();

  const solutions = [
    {
      icon: <Monitor className="w-7 h-7 text-white" />,
      title: 'Cutting-Edge Cooling Solutions',
      description:
        'Experience the next generation of air conditioning with our high-performance cooling systems. Designed for efficiency, comfort, and durability for homes, offices, and commercial spaces.',
      features: [
        'Higher Energy Efficiency & Eco-Friendly',
        'Compact & Flexible Design',
        'Easy Maintenance & High Reliability'
      ]
    },
    {
      icon: <Megaphone className="w-7 h-7 text-white" />,
      title: 'Heating Systems',
      description:
        'High-efficiency furnaces, heat pumps, and boilers designed to provide reliable warmth while minimizing energy consumption.',
      features: ['High AFUE ratings', 'Dual-fuel options', 'Zoned heating control']
    },
    {
      icon: <Wind className="w-7 h-7 text-white" />,
      title: 'Commercial HVAC Solutions',
      description:
        'Advanced HVAC systems for malls, office buildings, hotels, and industrial facilities. Reliable temperature regulation with optimized energy usage.',
      features: ['Custom Climate Control', 'Energy-Efficient & Cost-Effective', 'Scalable & Smart Integration']
    },
    {
      icon: <Cpu className="w-7 h-7 text-white" />,
      title: 'Smart HVAC Controls',
      description:
        'Intelligent thermostats and control systems that optimize performance, enable remote access, and reduce energy costs.',
      features: ['Mobile app control', 'Learning algorithms', 'Usage analytics']
    },
    {
      icon: <Zap className="w-7 h-7 text-white" />,
      title: 'Advanced Ventilation Solutions',
      description:
        'Superior indoor air quality for offices, malls, hotels, and industrial facilities. Optimize airflow and ensure a fresh environment.',
      features: ['Optimized Air Circulation', 'Energy-Efficient Ventilation', 'Humidity & Temperature Regulation']
    },
    {
      icon: <Calendar className="w-7 h-7 text-white" />,
      title: 'Maintenance Services',
      description:
        'Comprehensive maintenance plans and services to ensure your HVAC systems operate at peak efficiency year-round.',
      features: ['Regular inspections', 'Preventative care', '24/7 emergency service']
    }
  ];

  const visibleSolutions = () => {
    const items = [];
    for (let i = 0; i < 3; i++) {
      const index = (currentIndex + i) % solutions.length;
      items.push(solutions[index]);
    }
    return items;
  };

  const nextSlide = () => {
    setDirection(1);
    setCurrentIndex((prevIndex) => (prevIndex + 1) % solutions.length);
    controls.start('visible');
  };

  const prevSlide = () => {
    setDirection(-1);
    setCurrentIndex((prevIndex) => (prevIndex - 1 + solutions.length) % solutions.length);
    controls.start('visible');
  };

  useEffect(() => {
    controls.start('visible');
    const handleResize = () => controls.start('visible');
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [controls]);

  return (
    <div className="flex flex-col items-center w-full bg-muted/60 dark:bg-background py-8 md:py-16">
      <motion.div
        className="w-full px-4 sm:px-6 md:px-12"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeIn}
      >
        <div className="text-center mb-8 md:mb-12">
          <motion.h2
            className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-800 dark:text-slate-100 mb-3 md:mb-4"
            variants={fadeIn}
          >
            Our Premium HVAC Solutions
          </motion.h2>
          <motion.p className="max-w-3xl mx-auto text-sm md:text-base text-gray-600 dark:text-slate-400" variants={fadeIn}>
            Discover our comprehensive range of heating, ventilation, and air conditioning products designed for optimal
            comfort and energy efficiency.
          </motion.p>
        </div>

        <div className="relative w-full">
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 h-10 w-10 rounded-full flex items-center justify-center bg-card shadow-lg border border-border hover:bg-blue-600 hover:text-white dark:hover:bg-blue-600 text-muted-foreground transition-all duration-200 md:-left-5"
            aria-label="Previous slide"
          >
            <ArrowLeft className="h-5 w-5" />
          </button>

          <motion.div
            ref={carouselRef}
            className="overflow-hidden px-10 md:px-6"
            variants={container}
            initial="visible"
            animate={controls}
          >
            <motion.div
              className="flex gap-4 my-1 md:gap-8"
              custom={direction}
              variants={slideVariants}
              initial="center"
              animate="center"
              exit="exit"
              transition={{
                x: { type: 'spring', stiffness: 300, damping: 30 },
                opacity: { duration: 0.2 }
              }}
            >
              {visibleSolutions().map((solution, index) => (
                <div key={index} className="w-full flex-shrink-0 md:w-1/2 lg:w-1/3">
                  <SolutionCard solution={solution} />
                </div>
              ))}
            </motion.div>
          </motion.div>

          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 h-10 w-10 rounded-full flex items-center justify-center bg-card shadow-lg border border-border hover:bg-blue-600 hover:text-white dark:hover:bg-blue-600 text-muted-foreground transition-all duration-200 md:-right-5"
            aria-label="Next slide"
          >
            <ArrowRight className="h-5 w-5" />
          </button>
        </div>
      </motion.div>
    </div>
  );
}

const SolutionCard = ({ solution }) => {
  return (
    <motion.div
      variants={fadeIn}
      className="h-full rounded-xl overflow-hidden bg-card text-card-foreground border border-border shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex flex-col"
    >
      <div className="h-1 w-full bg-gradient-to-r from-blue-600 to-blue-400 flex-shrink-0" />
      <div className="p-4 md:p-6 flex flex-col h-full">
        <div className="w-12 h-12 md:w-14 md:h-14 rounded-xl bg-gradient-to-br from-blue-600 to-blue-800 flex items-center justify-center mb-4 shadow-md flex-shrink-0">
          {solution.icon}
        </div>

        <h3 className="text-lg md:text-xl font-semibold mb-2 md:mb-3 text-gray-800 dark:text-slate-100">
          {solution.title}
        </h3>

        <p className="text-sm md:text-base text-gray-600 dark:text-slate-400 mb-4 md:mb-6 flex-grow">
          {solution.description}
        </p>

        <div className="mt-auto">
          <ul className="space-y-1.5 md:space-y-2">
            {solution.features.map((feature, index) => (
              <li key={index} className="flex items-center gap-2 text-sm md:text-base">
                <CheckCircle2 className="h-4 w-4 text-blue-500 dark:text-blue-400 flex-shrink-0" />
                <span className="text-gray-700 dark:text-slate-300">{feature}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </motion.div>
  );
};

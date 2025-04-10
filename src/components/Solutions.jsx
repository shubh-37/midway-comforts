import { useState, useRef, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight, ArrowLeft, Monitor, Megaphone, Wind, Cpu, Zap, Calendar } from 'lucide-react';

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15
    }
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
      icon: <Monitor className="w-8 h-8 text-blue-600" />,
      title: 'Cutting-Edge Cooling Solutions',
      description:
        'Experience the next generation of air conditioning with our high-performance cooling systems. Designed for efficiency, comfort, and durability, our solutions cater to homes, offices, and commercial spaces, ensuring optimal temperature control in every environment.',
      features: [
        'Higher Energy Efficiency & Eco-Friendly',
        'Compact & Flexible Design',
        'Easy Maintenance & High Reliability'
      ]
    },
    {
      icon: <Megaphone className="w-8 h-8 text-blue-600" />,
      title: 'Heating Systems',
      description:
        'High-efficiency furnaces, heat pumps, and boilers designed to provide reliable warmth while minimizing energy consumption.',
      features: ['High AFUE ratings', 'Dual-fuel options', 'Zoned heating control']
    },
    {
      icon: <Wind className="w-8 h-8 text-blue-600" />,
      title: 'High-Performance HVAC Solutions for Commercial Spaces',
      description:
        'Enhance efficiency, comfort, and climate control in large-scale commercial environments with our advanced HVAC systems. Designed for malls, office buildings, hotels, and industrial facilities, our solutions provide reliable temperature regulation while optimizing energy usage.',
      features: ['Custom Climate Control', 'Energy-Efficient & Cost-Effective', 'Scalable & Smart Integration']
    },
    {
      icon: <Cpu className="w-8 h-8 text-blue-600" />,
      title: 'Smart HVAC Controls',
      description:
        'Intelligent thermostats and control systems that optimize performance, enable remote access, and reduce energy costs.',
      features: ['Mobile app control', 'Learning algorithms', 'Usage analytics']
    },
    {
      icon: <Zap className="w-8 h-8 text-blue-600" />,
      title: 'Advanced Ventilation Solutions for Commercial Spaces',
      description:
        'Maintain superior indoor air quality and comfort with our cutting-edge ventilation systems, designed for offices, malls, hotels, and industrial facilities. Our solutions optimize airflow, reduce contaminants, and ensure a fresh environment for employees, customers, and visitors.',
      features: ['Optimized Air Circulation', 'Energy-Efficient Ventilation', 'Humidity & Temperature Regulation']
    },
    {
      icon: <Calendar className="w-8 h-8 text-blue-600" />,
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

    const handleResize = () => {
      controls.start('visible');
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [controls]);

  return (
    <div className="flex flex-col items-center w-full bg-blue-50 py-8 md:py-16">
      <motion.div
        className="w-full px-4 sm:px-6 md:px-12"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeIn}
      >
        <div className="text-center mb-8 md:mb-12">
          <motion.h2
            className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-800 mb-3 md:mb-4"
            variants={fadeIn}
          >
            Our Premium HVAC Solutions
          </motion.h2>
          <motion.p className="max-w-3xl mx-auto text-sm md:text-base text-gray-600" variants={fadeIn}>
            Discover our comprehensive range of heating, ventilation, and air conditioning products designed for optimal
            comfort and energy efficiency.
          </motion.p>
        </div>

        <div className="relative w-full">
          <Button
            variant="outline"
            size="icon"
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 rounded-full bg-white/80 shadow-md hover:bg-blue-50 hover:text-blue-600 transition-colors border-0 md:-left-5"
            aria-label="Previous slide"
          >
            <ArrowLeft className="h-5 w-5" />
          </Button>

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

          <Button
            variant="outline"
            size="icon"
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 rounded-full bg-white/80 shadow-md hover:bg-blue-50 hover:text-blue-600 transition-colors border-0 md:-right-5"
            aria-label="Next slide"
          >
            <ArrowRight className="h-5 w-5" />
          </Button>
        </div>
      </motion.div>
    </div>
  );
}

const SolutionCard = ({ solution }) => {
  return (
    <motion.div variants={fadeIn} className="h-full">
      <Card className="h-full hover:shadow-lg transition-shadow duration-300 border-0 bg-white">
        <CardContent className="p-4 md:p-6 flex flex-col h-full">
          <div className="bg-blue-50 p-3 md:p-4 rounded-full w-12 h-12 md:w-16 md:h-16 flex items-center justify-center mb-4 md:mb-6">
            {solution.icon}
          </div>

          <h3 className="text-lg md:text-xl font-semibold mb-2 md:mb-3 text-gray-800">{solution.title}</h3>

          <p className="text-sm md:text-base text-gray-600 mb-4 md:mb-6">{solution.description}</p>

          <div className="mt-auto">
            <ul className="space-y-1 md:space-y-2">
              {solution.features.map((feature, index) => (
                <li key={index} className="flex items-center text-sm md:text-base">
                  <span className="text-yellow-500 mr-2">✓</span>
                  <span className="text-gray-700">{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
};

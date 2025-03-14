import { useState, useRef, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { ArrowRight, ArrowLeft, ArrowRightCircle, Monitor, Megaphone, Wind, Cpu, Zap, Calendar } from 'lucide-react';

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
      title: 'Air Conditioning Systems',
      description:
        'State-of-the-art cooling solutions including central air, split systems, and ductless mini-splits for residential and commercial spaces.',
      features: ['Energy-efficient models', 'Smart temperature control', 'Quiet operation'],
      details:
        'Our air conditioning systems are designed with the latest technology to provide optimal cooling while minimizing energy consumption. We offer a range of options to suit different spaces and requirements, from compact units for small apartments to powerful systems for large commercial buildings.'
    },
    {
      icon: <Megaphone className="w-8 h-8 text-blue-600" />,
      title: 'Heating Systems',
      description:
        'High-efficiency furnaces, heat pumps, and boilers designed to provide reliable warmth while minimizing energy consumption.',
      features: ['High AFUE ratings', 'Dual-fuel options', 'Zoned heating control'],
      details:
        'Stay warm during the coldest months with our high-efficiency heating systems. Our furnaces and heat pumps are engineered to deliver consistent warmth throughout your space while keeping energy costs low. With advanced features like zoned heating control, you can customize the temperature in different areas for maximum comfort.'
    },
    {
      icon: <Wind className="w-8 h-8 text-blue-600" />,
      title: 'Ventilation Systems',
      description:
        'Advanced ventilation solutions that improve indoor air quality, reduce allergens, and maintain proper air circulation.',
      features: ['HEPA filtration', 'Heat recovery systems', 'Air purification'],
      details:
        'Breathe easier with our advanced ventilation systems that ensure proper air circulation and filtration. Our HEPA filtration technology removes up to 99.97% of airborne particles, while heat recovery systems help maintain energy efficiency by recapturing thermal energy from exhaust air.'
    },
    {
      icon: <Cpu className="w-8 h-8 text-blue-600" />,
      title: 'Smart HVAC Controls',
      description:
        'Intelligent thermostats and control systems that optimize performance, enable remote access, and reduce energy costs.',
      features: ['Mobile app control', 'Learning algorithms', 'Usage analytics'],
      details:
        'Take control of your comfort with our smart HVAC control systems. Access and adjust your heating and cooling from anywhere using our mobile app. Our learning algorithms adapt to your preferences over time, automatically optimizing settings for comfort and efficiency while providing detailed usage analytics.'
    },
    {
      icon: <Zap className="w-8 h-8 text-blue-600" />,
      title: 'Commercial HVAC Solutions',
      description:
        'Specialized systems designed for offices, retail spaces, warehouses, and other commercial facilities with advanced zoning options.',
      features: ['Large-scale capacity', 'Building automation', 'Energy management'],
      details:
        'Our commercial HVAC solutions are built to handle the demands of larger spaces with precision and reliability. From office buildings to warehouses, we provide customized systems that integrate with building automation platforms and include comprehensive energy management features to reduce operational costs.'
    },
    {
      icon: <Calendar className="w-8 h-8 text-blue-600" />,
      title: 'Maintenance Services',
      description:
        'Comprehensive maintenance plans and services to ensure your HVAC systems operate at peak efficiency year-round.',
      features: ['Regular inspections', 'Preventative care', '24/7 emergency service'],
      details:
        'Keep your HVAC system running smoothly with our comprehensive maintenance services. Our technicians perform thorough inspections and preventative care to identify and address potential issues before they become problems. With our 24/7 emergency service, help is always available when you need it most.'
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
    <div className="flex flex-col items-center w-full bg-gray-50 py-8 md:py-16">
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

            <div className="mt-4 md:mt-6">
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    variant="ghost"
                    className="text-blue-600 font-medium flex items-center hover:text-blue-800 transition-colors p-0 text-sm md:text-base"
                  >
                    Learn more <ArrowRightCircle className="w-3 h-3 md:w-4 md:h-4 ml-1" />
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-72 md:w-80 p-4 bg-white">
                  <motion.div
                    initial={{ opacity: 0, y: 5 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <h4 className="font-semibold text-base md:text-lg mb-2">{solution.title}</h4>
                    <p className="text-gray-600 text-xs md:text-sm">{solution.details}</p>
                    <div className="mt-4 pt-4 border-t border-gray-100">
                      <Button variant="outline" size="sm" className="w-full">
                        Request a quote
                      </Button>
                    </div>
                  </motion.div>
                </PopoverContent>
              </Popover>
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
};

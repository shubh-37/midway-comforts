import React from 'react';
import { Zap, Eye } from 'lucide-react';
import { motion } from 'framer-motion';

export default function AboutUsHeader() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5, delay: 0.4 }
    }
  };

  const iconVariants = {
    hidden: { scale: 0, rotate: -180 },
    visible: {
      scale: 1,
      rotate: 0,
      transition: {
        type: 'spring',
        stiffness: 260,
        damping: 20
      }
    }
  };

  return (
    <motion.div initial="hidden" animate="visible" variants={containerVariants}>
      <div>
        <motion.h5
          variants={itemVariants}
          className="bg-blue-100 w-min mx-auto px-3 py-2 rounded-3xl font-bold text-blue-800 text-center whitespace-nowrap"
        >
          About Us
        </motion.h5>
        <motion.h2 variants={itemVariants} className="text-2xl font-bold my-4 text-center text-gray-700">
          26 Years of HVAC Excellence
        </motion.h2>
        <motion.p variants={itemVariants} className="text-center text-gray-700 mt-4 mb-8">
          Founded in <b>1999</b>, Midway Comforts is the result of the passion and perseverance of{' '}
          <b>Mr. A. Sattar Khokar and Mr. Manish Pandey.</b> From a small showroom in Prabhadevi to becoming one of
          <b> Mumbai's fastest-growing dealerships</b> for <b>TOSHIBA and CARRIER Air Conditioning</b>, we've built a
          legacy of excellence. We specialize in <b>end-to-end HVAC solutions</b>, including{' '}
          <b>
            Design, Sales, Installation, Commissioning, and Servicing of Ductables, VRF, Mini VRF, Ventilation Systems,
            Chillers, and AHUs.
          </b>
        </motion.p>
      </div>
      <motion.div variants={cardVariants} className="w-full bg-blue-800 text-white rounded-lg p-8 shadow-lg">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div variants={itemVariants} className="space-y-4">
              <div className="flex items-center gap-3">
                <motion.div variants={iconVariants}>
                  <Zap className="h-6 w-6 text-yellow-300" />
                </motion.div>
                <h3 className="text-2xl font-bold">Our Mission</h3>
              </div>

              <p className="text-white/90 whitespace-normal">
                To enhance the comfort, health, and energy efficiency of every space we serve by delivering superior
                HVAC solutions tailored to our clients' unique needs, while maintaining the highest standards of
                technical expertise, reliability, and customer service.
              </p>

              <p className="text-white/90 whitespace-normal">
                We're committed to creating comfortable environments where people can live, work, and thrive while
                minimizing environmental impact through energy-efficient systems and sustainable practices.
              </p>
            </motion.div>

            {/* Vision Column */}
            <motion.div variants={itemVariants} className="space-y-4">
              <div className="flex items-center gap-3">
                <motion.div variants={iconVariants}>
                  <Eye className="h-6 w-6 text-yellow-300" />
                </motion.div>
                <h3 className="text-2xl font-bold">Our Vision</h3>
              </div>

              <p className="text-white/90 whitespace-normal">
                To be the leading HVAC service provider known for innovation, environmental responsibility, and setting
                industry standards for excellence. We envision a future where every home and business enjoys optimal
                indoor climate solutions that maximize comfort while minimizing environmental impact.
              </p>

              <p className="text-white/90 whitespace-normal">
                By 2030, we aim to reduce the carbon footprint of our clients' HVAC systems by 50% through advanced
                technology, renewable energy integration, and smart climate control solutions.
              </p>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

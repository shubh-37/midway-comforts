import React from 'react';
import { Zap, Eye } from 'lucide-react';
import { motion } from 'framer-motion';
import { Badge } from '@/components/ui/badge';
import LeadershipCarousel from './Leadership';

export default function AboutUsHeader() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: 'easeOut' }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5, delay: 0.3 }
    }
  };

  return (
    <motion.div initial="hidden" animate="visible" variants={containerVariants}>
      {/* Intro card */}
      <motion.div
        variants={itemVariants}
        className="mx-auto my-2 bg-card border border-border rounded-2xl p-8 shadow-lg"
      >
        <div className="text-center space-y-2 pb-2">
          <Badge
            variant="secondary"
            className="w-fit mx-auto px-4 py-1 text-sm font-medium bg-muted border border-border rounded-full text-primary"
          >
            About Us
          </Badge>
          <h2 className="text-3xl font-bold text-primary">26 Years of HVAC Excellence</h2>
        </div>
        <div className="space-y-4 text-center mt-4">
          <p className="text-lg text-foreground">
            Founded in <span className="font-semibold">1999</span>, Midway Comforts is the result of the passion and
            perseverance of
            <span className="font-semibold"> Mr. A. Sattar Khokar</span> and{' '}
            <span className="font-semibold">Mr. Manish Pandey</span>.
          </p>

          <p className="text-foreground">
            From a showroom in Prabhadevi to becoming one of
            <span className="font-semibold text-primary"> Mumbai's fastest-growing dealerships</span> for
            <span className="font-semibold"> TOSHIBA and CARRIER Air Conditioning</span>, we've built a legacy of
            excellence.
          </p>

          <div className="pt-2">
            <p className="font-medium text-foreground">
              We specialize in <span className="text-primary font-semibold">end-to-end HVAC solutions</span>, including:
            </p>
            <div className="flex flex-wrap justify-center gap-2 mt-3">
              {['Design', 'Sales', 'Installation', 'Commissioning', 'Servicing'].map((item) => (
                <Badge key={item} variant="outline" className="px-3 py-1 border-border text-foreground">
                  {item}
                </Badge>
              ))}
            </div>
          </div>
        </div>
        <div className="mt-6 flex justify-center bg-muted rounded-xl p-4">
          <p className="text-center text-foreground">
            <span className="font-medium">Our Expertise:</span> Ductables, VRF, Mini VRF, Ventilation Systems, Chillers,
            and AHUs
          </p>
        </div>
      </motion.div>

      <LeadershipCarousel />

      {/* Mission / Vision — two glass cards on gradient background */}
      <motion.div
        variants={cardVariants}
        className="w-full rounded-2xl overflow-hidden mt-8 shadow-xl"
        style={{ background: 'linear-gradient(135deg, #1e3a5f 0%, #1e40af 50%, #1d4ed8 100%)' }}
      >
        <div className="p-8 md:p-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Mission */}
            <motion.div
              variants={itemVariants}
              className="rounded-xl p-6 bg-white/10 backdrop-blur-sm border border-white/15 space-y-4"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-yellow-400/20 border border-yellow-400/40 flex items-center justify-center flex-shrink-0">
                  <Zap className="h-5 w-5 text-yellow-300" />
                </div>
                <h3 className="text-2xl font-bold text-white">Our Mission</h3>
              </div>
              <p className="text-white/85 leading-relaxed text-sm md:text-base">
                To enhance the comfort, health, and energy efficiency of every space we serve by delivering superior
                HVAC solutions tailored to our clients' unique needs, while maintaining the highest standards of
                technical expertise, reliability, and customer service.
              </p>
              <p className="text-white/85 leading-relaxed text-sm md:text-base">
                We're committed to creating comfortable environments where people can live, work, and thrive while
                minimizing environmental impact through energy-efficient systems and sustainable practices.
              </p>
            </motion.div>

            {/* Vision */}
            <motion.div
              variants={itemVariants}
              className="rounded-xl p-6 bg-white/10 backdrop-blur-sm border border-white/15 space-y-4"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-yellow-400/20 border border-yellow-400/40 flex items-center justify-center flex-shrink-0">
                  <Eye className="h-5 w-5 text-yellow-300" />
                </div>
                <h3 className="text-2xl font-bold text-white">Our Vision</h3>
              </div>
              <p className="text-white/85 leading-relaxed text-sm md:text-base">
                To be the leading HVAC service provider known for innovation, environmental responsibility, and setting
                industry standards for excellence. We envision a future where every home and business enjoys optimal
                indoor climate solutions that maximize comfort while minimizing environmental impact.
              </p>
              <p className="text-white/85 leading-relaxed text-sm md:text-base">
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

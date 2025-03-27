import React from 'react';
import { Zap, Eye } from 'lucide-react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { SparklesText } from './magicui/sparkles-text';
import LeadershipCarousel from './Leadership';

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
      <Card className=" mx-auto my-2 border-blue-700">
        <CardHeader className="text-center space-y-2 pb-2">
          <Badge
            variant="secondary"
            className="w-fit mx-auto px-4 py-1 text-sm font-medium bg-blue-100 rounded-4xl text-blue-700"
          >
            About Us
          </Badge>
          <CardTitle className="text-3xl font-bold text-primary">
            <SparklesText text="26 Years of HVAC Excellence" className="text-3xl" />
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4 text-center">
          <p className="text-lg">
            Founded in <span className="font-semibold">1999</span>, Midway Comforts is the result of the passion and
            perseverance of
            <span className="font-semibold"> Mr. A. Sattar Khokar</span> and{' '}
            <span className="font-semibold">Mr. Manish Pandey</span>.
          </p>

          <p>
            From a showroom in Prabhadevi to becoming one of
            <span className="font-semibold text-primary"> Mumbai's fastest-growing dealerships</span> for
            <span className="font-semibold"> TOSHIBA and CARRIER Air Conditioning</span>, we've built a legacy of
            excellence.
          </p>

          <div className="pt-2">
            <p className="font-medium">
              We specialize in <span className="text-primary font-semibold">end-to-end HVAC solutions</span>, including:
            </p>
            <div className="flex flex-wrap justify-center gap-2 mt-3">
              <Badge variant="outline" className="px-3 py-1">
                Design
              </Badge>
              <Badge variant="outline" className="px-3 py-1">
                Sales
              </Badge>
              <Badge variant="outline" className="px-3 py-1">
                Installation
              </Badge>
              <Badge variant="outline" className="px-3 py-1">
                Commissioning
              </Badge>
              <Badge variant="outline" className="px-3 py-1">
                Servicing
              </Badge>
            </div>
          </div>
        </CardContent>
        <CardFooter className="flex justify-center bg-muted/20 rounded-b-lg">
          <p className="text-center">
            <span className="font-medium">Our Expertise:</span> Ductables, VRF, Mini VRF, Ventilation Systems, Chillers,
            and AHUs
          </p>
        </CardFooter>
      </Card>
      <LeadershipCarousel />
      <motion.div variants={cardVariants} className="w-full bg-blue-800 text-white rounded-lg p-8 shadow-lg">
        <div className="mx-auto">
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

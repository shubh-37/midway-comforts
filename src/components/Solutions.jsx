import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowRight, Monitor, Megaphone, Wind, Cpu, Zap, Calendar } from 'lucide-react';

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
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

export default function PremiumHVACSolutions() {
  return (
    <div className="flex flex-col items-center w-full bg-gray-50 py-16">
      <motion.div
        className="w-full px-6 sm:px-8 md:px-12"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeIn}
      >
        <div className="text-center mb-12">
          <motion.h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4" variants={fadeIn}>
            Our Premium HVAC Solutions
          </motion.h2>
          <motion.p className="max-w-3xl mx-auto text-gray-600" variants={fadeIn}>
            Discover our comprehensive range of heating, ventilation, and air conditioning products designed for optimal
            comfort and energy efficiency.
          </motion.p>
        </div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <SolutionCard
            icon={<Monitor className="w-8 h-8 text-blue-600" />}
            title="Air Conditioning Systems"
            description="State-of-the-art cooling solutions including central air, split systems, and ductless mini-splits for residential and commercial spaces."
            features={['Energy-efficient models', 'Smart temperature control', 'Quiet operation']}
          />

          <SolutionCard
            icon={<Megaphone className="w-8 h-8 text-blue-600" />}
            title="Heating Systems"
            description="High-efficiency furnaces, heat pumps, and boilers designed to provide reliable warmth while minimizing energy consumption."
            features={['High AFUE ratings', 'Dual-fuel options', 'Zoned heating control']}
          />

          <SolutionCard
            icon={<Wind className="w-8 h-8 text-blue-600" />}
            title="Ventilation Systems"
            description="Advanced ventilation solutions that improve indoor air quality, reduce allergens, and maintain proper air circulation."
            features={['HEPA filtration', 'Heat recovery systems', 'Air purification']}
          />

          <SolutionCard
            icon={<Cpu className="w-8 h-8 text-blue-600" />}
            title="Smart HVAC Controls"
            description="Intelligent thermostats and control systems that optimize performance, enable remote access, and reduce energy costs."
            features={['Mobile app control', 'Learning algorithms', 'Usage analytics']}
          />

          <SolutionCard
            icon={<Zap className="w-8 h-8 text-blue-600" />}
            title="Commercial HVAC Solutions"
            description="Specialized systems designed for offices, retail spaces, warehouses, and other commercial facilities with advanced zoning options."
            features={['Large-scale capacity', 'Building automation', 'Energy management']}
          />

          <SolutionCard
            icon={<Calendar className="w-8 h-8 text-blue-600" />}
            title="Maintenance Services"
            description="Comprehensive maintenance plans and services to ensure your HVAC systems operate at peak efficiency year-round."
            features={['Regular inspections', 'Preventative care', '24/7 emergency service']}
          />
        </motion.div>
      </motion.div>
    </div>
  );
}

const SolutionCard = ({ icon, title, description, features }) => {
  return (
    <motion.div variants={fadeIn}>
      <Card className="h-full hover:shadow-lg transition-shadow duration-300 border-0 bg-white">
        <CardContent className="p-6 flex flex-col h-full">
          <div className="bg-blue-50 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-6">{icon}</div>

          <h3 className="text-xl font-semibold mb-3 text-gray-800">{title}</h3>

          <p className="text-gray-600 mb-6">{description}</p>

          <div className="mt-auto">
            <ul className="space-y-2">
              {features.map((feature, index) => (
                <li key={index} className="flex items-center">
                  <span className="text-yellow-500 mr-2">✓</span>
                  <span className="text-gray-700">{feature}</span>
                </li>
              ))}
            </ul>

            <div className="mt-6">
              <button className="text-blue-600 font-medium flex items-center hover:text-blue-800 transition-colors">
                Learn more <ArrowRight className="w-4 h-4 ml-1" />
              </button>
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
};

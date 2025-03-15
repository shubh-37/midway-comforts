import { Card, CardContent } from '@/components/ui/card';
import { Clock, Shield, DollarSign, Zap, Award, MessageSquare } from 'lucide-react';
import { motion } from 'framer-motion';
const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

export default function HVACServicePage() {
  return (
    <div className="flex flex-col items-center w-full bg-gray-50">
      <motion.div className="w-[90%] px-4 py-8 md:py-16" initial="hidden" animate="visible" variants={fadeIn}>
        <div className="text-center mb-16">
          <motion.h1 className="text-2xl md:text-4xl lg:text-4xl font-bold text-gray-800 mb-6" variants={fadeIn}>
            Why Choose Us for Your HVAC Needs
          </motion.h1>
          <motion.p className="max-w-3xl mx-auto text-gray-600" variants={fadeIn}>
            At Midway Comforts, we don't just provide air conditioning — we create comfort, sustainability, and
            long-term value for every client we serve. Here's why you should choose us for all your HVAC needs.
          </motion.p>
        </div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={container}
          initial="hidden"
          animate="visible"
        >
          <FeatureCard
            icon={<Clock className="w-8 h-8 text-blue-800" />}
            title="Experience & Expertise"
            description="Over 25 years in the HVAC industry with a track record of successful projects and our average staff is 15+ years showing further expertise"
            footer="Minimum 15+ years experienced staff"
          />

          <FeatureCard
            icon={<Shield className="w-8 h-8 text-blue-800" />}
            title="Comprehensive Solutions"
            description="From design to installation and round-the-clock servicing. We offer end-to-end solutions for all your HVAC needs."
            footer="Customized solutions available"
          />

          <FeatureCard
            icon={<DollarSign className="w-8 h-8 text-blue-800" />}
            title="Competitive Pricing"
            description="We provide transparent, upfront pricing with no hidden fees. Our value-driven solutions deliver exceptional quality without breaking your budget."
            footer="Flexible financing options available"
          />

          <FeatureCard
            icon={<Zap className="w-8 h-8 text-blue-800" />}
            title="Innovative & Sustainable Practices"
            description="Focus on energy efficiency and high-quality air for healthier environments. Our sustainable practices help you save money and reduce your carbon footprint."
            footer="Energy-efficient solutions available"
          />

          <FeatureCard
            icon={<Award className="w-8 h-8 text-blue-800" />}
            title="Customer-Centric Approach"
            description="Unmatched client retention, with many relationships lasting decades. Our commitment to customer satisfaction is the cornerstone of our business."
            footer="100% customer satisfaction guaranteed"
          />

          <FeatureCard
            icon={<MessageSquare className="w-8 h-8 text-blue-800" />}
            title="Proven Reliability"
            description=": We ensured uninterrupted service even during the COVID-19 pandemic, never letting clients go a day without comfort."
            footer="24/7 emergency service available"
          />
        </motion.div>
      </motion.div>
    </div>
  );
}

const FeatureCard = ({ icon, title, description, footer }) => {
  return (
    <motion.div variants={fadeIn}>
      <Card className="h-full hover:shadow-lg transition-shadow duration-300 border-0 bg-gray-100">
        <CardContent className="p-6 flex flex-col h-full">
          <div className="bg-blue-50 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-6">{icon}</div>
          <h3 className="text-xl font-bold mb-3 text-gray-800">{title}</h3>
          <p className="text-gray-600 mb-6 flex-grow">{description}</p>
          <p className="text-blue-700 font-medium">{footer}</p>
        </CardContent>
      </Card>
    </motion.div>
  );
};

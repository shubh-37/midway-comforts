import { Card, CardContent } from '@/components/ui/card';
import { Clock, Shield, DollarSign, Zap, Award, MessageSquare } from 'lucide-react';
import { motion } from 'framer-motion';
import { NumberTicker } from './magicui/number-ticker';
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

const counterAnimation = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.5
    }
  }
};

export default function HVACServicePage() {
  return (
    <div className="flex flex-col items-center w-full bg-gray-50">
      <motion.div
        className="w-[95%] rounded-2xl bg-white border-blue-800 border py-12 text-white mt-5"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={counterAnimation}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <Counter number={26} text="Years of Experience" />
            <Counter number={5000} text="Completed Projects" />
            <Counter number={98} text="Client Satisfaction" suffix="%" />
            <Counter number={50} text="Certified Technicians" />
          </div>
        </div>
      </motion.div>

      <motion.div className="w-[90%] px-4 py-8 md:py-16" initial="hidden" animate="visible" variants={fadeIn}>
        <div className="text-center mb-16">
          <motion.h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-6" variants={fadeIn}>
            Why Choose Us for Your HVAC Needs
          </motion.h1>
          <motion.p className="max-w-3xl mx-auto text-gray-600" variants={fadeIn}>
            With 26 years of proven experience, we've established ourselves as leaders in the HVAC industry by
            consistently delivering exceptional service and innovative solutions.
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
            title="26 Years of Experience"
            description="Since 1999, we've been delivering exceptional HVAC solutions with a track record of reliability and excellence that spans over two and a half decades."
            footer="Over 10,000 successful installations"
          />

          <FeatureCard
            icon={<Shield className="w-8 h-8 text-blue-800" />}
            title="Licensed & Certified Technicians"
            description="Our team consists of highly trained, certified professionals who stay updated with the latest HVAC technologies and industry standards."
            footer="100% licensed and insured"
          />

          <FeatureCard
            icon={<DollarSign className="w-8 h-8 text-blue-800" />}
            title="Competitive Pricing"
            description="We provide transparent, upfront pricing with no hidden fees. Our value-driven solutions deliver exceptional quality without breaking your budget."
            footer="Flexible financing options available"
          />

          <FeatureCard
            icon={<Zap className="w-8 h-8 text-blue-800" />}
            title="Energy-Efficient Solutions"
            description="We specialize in eco-friendly HVAC systems that reduce your carbon footprint while significantly lowering your energy bills over time."
            footer="Up to 40% energy savings"
          />

          <FeatureCard
            icon={<Award className="w-8 h-8 text-blue-800" />}
            title="Industry-Leading Warranties"
            description="We stand behind our work with comprehensive warranties, giving you peace of mind and protection for your investment."
            footer="Extended warranties available"
          />

          <FeatureCard
            icon={<MessageSquare className="w-8 h-8 text-blue-800" />}
            title="24/7 Emergency Service"
            description="HVAC emergencies don't wait for business hours. Our responsive team is available around the clock to handle urgent situations when you need us most."
            footer="Average response time under 1 hour"
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

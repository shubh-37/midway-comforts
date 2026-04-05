import { Clock, Shield, DollarSign, Zap, Award, MessageSquare } from 'lucide-react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } }
};

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12 }
  }
};

export default function HVACServicePage() {
  return (
    <div className="flex flex-col items-center w-full bg-background">
      <motion.div
        className="w-[90%] px-4 py-8 md:py-16"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-60px' }}
        variants={fadeIn}
      >
        <div className="text-center mb-12">
          <motion.h1
            className="text-2xl md:text-4xl font-bold text-foreground mb-4"
            variants={fadeIn}
          >
            Why Choose Us for Your HVAC Needs
          </motion.h1>
          <motion.p className="max-w-3xl mx-auto text-muted-foreground" variants={fadeIn}>
            At Midway Comforts, we don't just provide air conditioning — we create comfort, sustainability, and
            long-term value for every client we serve.
          </motion.p>
        </div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-6 gap-5"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
        >
          <FeatureCard
            size="large"
            colSpan="md:col-span-3"
            icon={<Clock className="w-6 h-6 text-white" />}
            title="Experience & Expertise"
            description="Over 25 years in the HVAC industry with a track record of successful projects and our average staff experience is over 15 years showing further expertise."
            footer="Minimum 15+ years experienced staff"
          />
          <FeatureCard
            size="large"
            colSpan="md:col-span-3"
            icon={<Shield className="w-6 h-6 text-white" />}
            title="Comprehensive Solutions"
            description="From design to installation and round-the-clock servicing. We offer end-to-end solutions for all your HVAC needs."
            footer="Customized solutions available"
          />
          <FeatureCard
            size="small"
            colSpan="md:col-span-2"
            icon={<DollarSign className="w-6 h-6 text-white" />}
            title="Competitive Pricing"
            description="Transparent, upfront pricing with no hidden fees. Value-driven solutions that deliver exceptional quality."
            footer="Flexible financing available"
          />
          <FeatureCard
            size="small"
            colSpan="md:col-span-2"
            icon={<Zap className="w-6 h-6 text-white" />}
            title="Innovative & Sustainable"
            description="Focus on energy efficiency and high-quality air for healthier environments. Save money and reduce your carbon footprint."
            footer="Energy-efficient solutions"
          />
          <FeatureCard
            size="small"
            colSpan="md:col-span-2"
            icon={<Award className="w-6 h-6 text-white" />}
            title="Customer-Centric"
            description="Unmatched client retention, with many relationships lasting decades. Customer satisfaction is our cornerstone."
            footer="100% satisfaction guaranteed"
          />
          <FeatureCard
            size="wide"
            colSpan="md:col-span-6"
            icon={<MessageSquare className="w-6 h-6 text-white" />}
            title="Proven Reliability"
            description="We ensured uninterrupted service even during the COVID-19 pandemic, never letting clients go a day without comfort. Our commitment to reliability is absolute — because comfort isn't optional."
            footer="24/7 emergency service available"
          />
        </motion.div>
      </motion.div>
    </div>
  );
}

const FeatureCard = ({ icon, title, description, footer, size, colSpan }) => {
  return (
    <motion.div
      variants={fadeIn}
      className={cn(
        colSpan,
        'relative rounded-2xl p-6 overflow-hidden h-full group',
        'glass-card-light',
        'hover:-translate-y-1 hover:shadow-lg dark:hover:shadow-blue-900/30 transition-all duration-300',
        size === 'wide' && 'flex flex-col md:flex-row md:items-center md:gap-8'
      )}
    >
      <div className={cn(
        'w-12 h-12 rounded-xl bg-gradient-to-br from-blue-600 to-blue-800 flex items-center justify-center shadow-md group-hover:scale-105 transition-transform duration-200 flex-shrink-0',
        size === 'wide' ? 'mb-4 md:mb-0' : 'mb-5'
      )}>
        {icon}
      </div>
      <div className="flex flex-col h-full">
        <h3 className="text-xl font-bold mb-3 text-foreground">{title}</h3>
        <p className="text-muted-foreground mb-4 flex-grow text-sm leading-relaxed">{description}</p>
        <p className="text-primary font-medium text-sm mt-auto">{footer}</p>
      </div>
    </motion.div>
  );
};

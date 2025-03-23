import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ExternalLink, Award, ShieldCheck } from 'lucide-react';
import { Link } from 'react-router-dom';
import carrierLogo from '@/assets/carrier.svg';
import toshibaLogo from '@/assets/toshiba.svg';
const PartnerBrands = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: 'easeOut'
      }
    },
    hover: {
      scale: 1.05,
      boxShadow: '0px 10px 30px rgba(0, 0, 0, 0.1)',
      transition: {
        duration: 0.3,
        ease: 'easeInOut'
      }
    }
  };

  return (
    <motion.div
      className="w-full bg-blue-50 py-12 mt-10"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={containerVariants}
    >
      <div className=" mx-auto px-4">
        <motion.div className="text-center mb-8" variants={itemVariants}>
          <div className="flex justify-center mb-3">
            <Award className="text-blue-700 w-8 h-8 mr-2" />
            <h2 className="text-3xl font-bold text-blue-700">Our Exclusive Partners</h2>
          </div>
          <p className="text-slate-700 text-lg">
            We are proud to exclusively offer premium products from these trusted brands
          </p>
        </motion.div>

        <div className="flex flex-col md:flex-row items-center justify-center gap-12 mb-10">
          <div className="flex flex-col items-center">
            <div className="h-32 w-64 flex items-center justify-center bg-white rounded-lg shadow-md p-4">
              <img src={toshibaLogo} alt="Toshiba" className="max-h-20 max-w-full object-contain" />
            </div>
            <div className="flex items-center mt-3 text-blue-600">
              <ShieldCheck className="w-5 h-5 mr-1" />
              <span className="text-sm font-medium">Official Dealer</span>
            </div>
          </div>

          <div className="flex flex-col items-center">
            <div className="h-32 w-64 flex items-center justify-center bg-white rounded-lg shadow-md p-4">
              <img src={carrierLogo} alt="Carrier" className="max-h-20 max-w-full object-contain" />
            </div>
            <div className="flex items-center mt-3 text-blue-600">
              <ShieldCheck className="w-5 h-5 mr-1" />
              <span className="text-sm font-medium">Official Dealer</span>
            </div>
          </div>
        </div>

        <motion.div className="flex justify-center" variants={itemVariants}>
          <Link to="/products">
            <Button className="bg-blue-700 hover:bg-blue-800 text-white px-8 py-6 text-lg font-medium rounded-md flex items-center gap-2">
              View Our Products
              <ExternalLink className="w-5 h-5 ml-1" />
            </Button>
          </Link>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default PartnerBrands;

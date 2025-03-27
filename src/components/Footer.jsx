import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Calculator, ImageIcon } from 'lucide-react';
import { Link } from 'react-router-dom';
const quickLinks = [
  { text: 'About Us', href: '/about' },
  { text: 'Key Projects', href: '/projects' },
  { text: 'Products', href: '/products' },
  // { text: 'Before & After', href: '/before-after' },
  { text: 'AC Calculator', href: '/calculator' },
  { text: 'Privacy Policy', href: '/privacy-policy' },
  { text: 'Terms of Service', href: '/tnc' }
];

const services = [
  { text: 'Residential & Commercial Spaces' },
  { text: 'Hospitality & Healthcare' },
  { text: 'Banking & Finance' },
  { text: 'IT & Corporate Offices' },
  { text: 'Educational Institutions' },
  { text: 'Retail & Showrooms' }
];

export default function Footer() {
  return (
    <footer className="bg-[#1a1a1a] text-white">
      <div className="mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h2 className="text-xl font-bold border-b border-blue-500 pb-2 inline-block">Midway Comforts</h2>
            <p className="text-gray-300 text-sm leading-relaxed">
              Providing premium HVAC solutions since 1999. With 26 years of experience, we're your trusted partner for
              all heating, ventilation, and air conditioning needs.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-xl font-bold border-b border-blue-500 pb-2 inline-block">Quick Links</h2>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <motion.li key={index} whileHover={{ x: 5 }}>
                  <Link
                    to={link.href}
                    className="text-gray-300 hover:text-blue-400 transition-colors flex items-center gap-2"
                  >
                    <span className="text-blue-500">›</span>
                    {link.text}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </div>

          <div className="space-y-4">
            <h2 className="text-xl font-bold border-b border-blue-500 pb-2 inline-block">Industries we serve</h2>
            <ul className="space-y-2">
              {services.map((service, index) => (
                <motion.li key={index} whileHover={{ x: 5 }}>
                  <h3 className="text-gray-300 hover:text-blue-400 transition-colors flex items-center gap-2">
                    <span className="text-blue-500">›</span>
                    {service.text}
                  </h3>
                </motion.li>
              ))}
            </ul>
          </div>

          <div className="space-y-4">
            <h2 className="text-xl font-bold border-b border-blue-500 pb-2 inline-block">Contact & Tools</h2>
            <div className="space-y-4">
              <div className="space-y-2">
                <motion.div whileHover={{ x: 5 }} className="flex items-start gap-2 text-yellow-400">
                  <MapPin className="w-5 h-5 mt-1 flex-shrink-0" />
                  <span>
                    Unit 11, Grd.Floor, Universal Indst. Estate, Nr. Wadia School, J.P. Road, Andheri (W), Mumbai - 400
                    058.
                  </span>
                </motion.div>
                <motion.div whileHover={{ x: 5 }} className="flex items-center gap-2 text-yellow-400">
                  <Phone className="w-5 h-5" />
                  <span>9930267231</span>
                  <span>9324775501</span>
                </motion.div>
                <motion.div whileHover={{ x: 5 }} className="flex items-center gap-2 text-yellow-400">
                  <Mail className="w-5 h-5" />
                  <div className='flex flex-col'>
                    <span>midwaycomforts@gmail.com</span>
                    <span>projects@midwaycomforts.in</span>
                  </div>
                </motion.div>
              </div>

              <div className="space-y-2">
                <h3 className="text-lg font-semibold">Useful Tools</h3>
                <motion.div whileHover={{ x: 5 }}>
                  <Link
                    to="/calculator"
                    className="text-gray-300 hover:text-blue-400 transition-colors flex items-center gap-2"
                  >
                    <Calculator className="w-4 h-4" />
                    AC Tonnage Calculator
                  </Link>
                </motion.div>
                <motion.div whileHover={{ x: 5 }}>
                  <Link
                    to="/before-after"
                    className="text-gray-300 hover:text-blue-400 transition-colors flex items-center gap-2"
                  >
                    <ImageIcon className="w-4 h-4" />
                    Before & After Gallery
                  </Link>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-blue-700 py-8 text-center">
        <div className="mx-auto px-4 space-y-2">
          <p className="text-sm font-medium">Celebrating a Milestone</p>
          <h2 className="text-2xl md:text-3xl font-bold">26 Years of Excellence in HVAC Solutions</h2>
          <p className="text-sm md:text-base">Thank you for trusting us with your comfort since 1999</p>
        </div>
      </div>
    </footer>
  );
}

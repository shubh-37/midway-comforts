import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import companyImage from '@/assets/company.jpeg';
import {
  Award,
  Briefcase,
  GraduationCap,
  Heart,
  Clock,
  DollarSign,
  Leaf,
  MapPin,
  CalendarDays,
  Search
} from 'lucide-react';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import clientAero from '@/assets/client-aero.png';
import clientAndheri from '@/assets/client-andheri.png';

export default function CareersPage() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  const fadeIn = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { duration: 0.8 } }
  };

  const slideInLeft = {
    hidden: { opacity: 0, x: -50 },
    show: { opacity: 1, x: 0, transition: { duration: 0.6 } }
  };

  const slideInRight = {
    hidden: { opacity: 0, x: 50 },
    show: { opacity: 1, x: 0, transition: { duration: 0.6 } }
  };

  return (
    <div className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <motion.section
        className="relative bg-blue-700 text-white overflow-hidden"
        initial="hidden"
        animate={isLoaded ? 'show' : 'hidden'}
        variants={fadeIn}
      >
        <div className="hidden sm:flex absolute inset-0 items-center justify-center">
          <motion.div
            initial={{ opacity: 0, scale: 1.2 }}
            animate={{ opacity: 0.15, scale: 1 }}
            transition={{ duration: 1.2 }}
            className=""
          >
            <img src={companyImage} alt="HVAC Background" fill className="object-contain" priority />
          </motion.div>
        </div>

        <div className="relative mx-auto px-4 py-24 sm:px-6 lg:px-8">
          <motion.div className="mx-auto max-w-3xl text-center" variants={container}>
            <motion.h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl" variants={item}>
              Join Our Team at Midway Comforts
            </motion.h1>
            <motion.p className="mt-6 text-xl" variants={item}>
              Build your career with a company that values innovation, growth, and excellence in the HVAC industry.
            </motion.p>
            <motion.div className="mt-10" variants={item} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                className="bg-[#FFD700] text-blue-700 hover:bg-[#FFD700]/90 font-bold text-lg px-8 py-6"
                size="lg"
                asChild
              >
                <a href="#open-positions">View Open Positions</a>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* Why Work With Us Section */}
      <section id="why-work-with-us" className="py-16 bg-white">
        <div className="mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            className="text-3xl font-bold text-center mb-12 text-blue-700"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Why Work With Us
          </motion.h2>
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
          >
            {[
              {
                icon: <DollarSign className="h-10 w-10 text-blue-700" />,
                title: 'Competitive Compensation',
                description:
                  'We offer industry-leading pay and comprehensive benefits packages to reward your expertise and dedication.'
              },
              {
                icon: <GraduationCap className="h-10 w-10 text-blue-700" />,
                title: 'Career Development',
                description:
                  'Continuous learning opportunities, certifications, and clear paths for advancement within the company.'
              },
              {
                icon: <Heart className="h-10 w-10 text-blue-700" />,
                title: 'Comprehensive Benefits',
                description:
                  'Health, dental, vision insurance, 401(k) matching, paid time off, and wellness programs for you and your family.'
              },
              {
                icon: <Clock className="h-10 w-10 text-blue-700" />,
                title: 'Work-Life Balance',
                description:
                  'Flexible scheduling options and respect for your time outside of work to ensure you stay refreshed and motivated.'
              },
              {
                icon: <Award className="h-10 w-10 text-blue-700" />,
                title: 'Recognition Programs',
                description: "Your hard work doesn't go unnoticed with our employee recognition and incentive programs."
              },
              {
                icon: <Leaf className="h-10 w-10 text-blue-700" />,
                title: 'Sustainable Practices',
                description:
                  'Be part of a company committed to environmental responsibility and sustainable HVAC solutions.'
              }
            ].map((item, index) => (
              <motion.div key={index} variants={item}>
                <motion.div
                  whileHover={{
                    scale: 1.03,
                    boxShadow: '0 10px 30px rgba(0, 71, 171, 0.1)',
                    borderColor: '#FFD700'
                  }}
                  transition={{ type: 'spring', stiffness: 300 }}
                >
                  <Card className="border-2 border-blue-700/10 hover:border-[#FFD700] transition-all h-full">
                    <CardContent className="p-6">
                      <motion.div
                        className="mb-4"
                        initial={{ scale: 1 }}
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        transition={{ type: 'spring', stiffness: 400 }}
                      >
                        {item.icon}
                      </motion.div>
                      <h3 className="text-xl font-bold mb-2 text-blue-700">{item.title}</h3>
                      <p className="text-gray-600">{item.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Life at Midway Comforts */}
      <section id="life-at-midway" className="py-16 bg-gray-50">
        <div className="mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            className="text-3xl font-bold text-center mb-12 text-blue-700"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Life at Midway Comforts
          </motion.h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <motion.div
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.3 }}
              variants={slideInLeft}
            >
              <h3 className="text-2xl font-bold mb-4 text-blue-700">Our Culture</h3>
              <p className="text-gray-600 mb-6">
                At Midway Comforts, we foster a collaborative environment where innovation thrives and every team
                member's contribution is valued. Our culture is built on mutual respect, open communication, and a
                shared commitment to excellence.
              </p>
              <motion.ul
                className="space-y-2"
                variants={container}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.3 }}
              >
                {[
                  'Team-oriented approach to problem-solving',
                  'Regular team building events and activities',
                  'Open-door policy with leadership',
                  'Diverse and inclusive workplace'
                ].map((item, index) => (
                  <motion.li key={index} className="flex items-start" variants={item}>
                    <span className="mr-2 mt-1 text-[#FFD700]">•</span>
                    <span>{item}</span>
                  </motion.li>
                ))}
              </motion.ul>
            </motion.div>
            <motion.div
              className="relative h-80 rounded-lg overflow-hidden"
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.3 }}
              variants={slideInRight}
            >
              <img src={clientAero} alt="Team collaboration at Midway Comforts" fill className="object-cover" />
            </motion.div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              className="order-2 lg:order-1 relative h-80 rounded-lg overflow-hidden"
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.3 }}
              variants={slideInLeft}
            >
              <img src={clientAndheri} alt="Community involvement at Midway Comforts" fill className="object-cover" />
            </motion.div>
            <motion.div
              className="order-1 lg:order-2"
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.3 }}
              variants={slideInRight}
            >
              <h3 className="text-2xl font-bold mb-4 text-blue-700">Community Involvement</h3>
              <p className="text-gray-600 mb-6">
                We believe in giving back to the communities we serve. Our team regularly participates in local
                initiatives, volunteer opportunities, and charitable events that make a positive impact.
              </p>
              <motion.div
                className="grid grid-cols-2 gap-4"
                variants={container}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.3 }}
              >
                {[
                  {
                    title: 'Volunteer Days',
                    description: 'Paid time off for community service'
                  },
                  {
                    title: 'Charity Partnerships',
                    description: 'Supporting local organizations'
                  },
                  {
                    title: 'Environmental Initiatives',
                    description: 'Reducing our carbon footprint'
                  },
                  {
                    title: 'Education Programs',
                    description: 'HVAC training for underserved communities'
                  }
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    className="p-4 bg-white rounded-lg shadow-sm"
                    variants={item}
                    whileHover={{
                      y: -5,
                      boxShadow: '0 10px 20px rgba(0, 71, 171, 0.1)'
                    }}
                  >
                    <h4 className="font-bold text-blue-700">{item.title}</h4>
                    <p className="text-sm text-gray-600">{item.description}</p>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section id="open-positions" className="py-16 bg-white">
        <div className="mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            className="text-3xl font-bold text-center mb-12 text-blue-700"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Open Positions
          </motion.h2>

          <motion.div
            className="max-w-3xl mx-auto mb-10"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Search positions..."
                className="w-full pl-10 pr-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-blue-700"
              />
            </div>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 gap-6 max-w-4xl mx-auto"
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.1 }}
          >
            {[
              {
                title: 'HVAC Service Technician',
                location: 'Chicago, IL',
                type: 'Full-time',
                experience: '3+ years',
                description: 'Diagnose, repair, and maintain HVAC systems for residential and commercial clients.'
              },
              {
                title: 'Installation Specialist',
                location: 'Milwaukee, WI',
                type: 'Full-time',
                experience: '2+ years',
                description: 'Install new HVAC systems according to specifications and industry standards.'
              },
              {
                title: 'HVAC Sales Consultant',
                location: 'Indianapolis, IN',
                type: 'Full-time',
                experience: '4+ years',
                description: 'Consult with clients to determine their HVAC needs and recommend appropriate solutions.'
              },
              {
                title: 'Apprentice Technician',
                location: 'Detroit, MI',
                type: 'Full-time',
                experience: 'Entry Level',
                description:
                  'Learn the HVAC trade while assisting experienced technicians with installations and repairs.'
              },
              {
                title: 'Service Manager',
                location: 'Columbus, OH',
                type: 'Full-time',
                experience: '5+ years',
                description: 'Oversee service department operations, scheduling, and technician management.'
              }
            ].map((job, index) => (
              <motion.div key={index} variants={item}>
                <motion.div
                  whileHover={{
                    scale: 1.02,
                    boxShadow: '0 10px 30px rgba(0, 71, 171, 0.1)',
                    borderColor: '#FFD700'
                  }}
                  transition={{ type: 'spring', stiffness: 300 }}
                >
                  <Card className="border-2 hover:border-[#FFD700] transition-all">
                    <CardContent className="p-6">
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                        <h3 className="text-xl font-bold text-blue-700">{job.title}</h3>
                        <div className="flex flex-wrap gap-2 mt-2 md:mt-0">
                          <Badge className="bg-blue-700 text-white">{job.type}</Badge>
                          <Badge variant="outline" className="text-blue-700 border-blue-700">
                            {job.experience}
                          </Badge>
                        </div>
                      </div>
                      <p className="text-gray-600 mb-4">{job.description}</p>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center text-gray-500">
                          <MapPin className="h-4 w-4 mr-1" />
                          <span className="text-sm">{job.location}</span>
                        </div>
                        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                          <Button
                            variant="outline"
                            className="border-blue-700 text-blue-700 hover:bg-blue-700 hover:text-white"
                          >
                            View Details
                          </Button>
                        </motion.div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            className="text-center mt-10"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button variant="outline" className="border-blue-700 text-blue-700">
                View All Positions
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Apply Here CTA */}
      <motion.section
        className="py-16 bg-blue-700"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <motion.div
          className="mx-auto px-4 sm:px-6 lg:px-8 text-center"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={container}
        >
          <motion.h2 className="text-3xl font-bold mb-6 text-white" variants={item}>
            Ready to Join Our Team?
          </motion.h2>
          <motion.p className="text-xl text-white/80 mb-10 max-w-2xl mx-auto" variants={item}>
            Take the next step in your career with Midway Comforts. We're looking for talented individuals who are
            passionate about HVAC and customer service.
          </motion.p>
          <motion.div
            variants={item}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            animate={{
              boxShadow: [
                '0px 0px 0px rgba(255,215,0,0)',
                '0px 0px 20px rgba(255,215,0,0.5)',
                '0px 0px 0px rgba(255,215,0,0)'
              ]
            }}
            transition={{
              boxShadow: {
                repeat: Number.POSITIVE_INFINITY,
                duration: 2
              }
            }}
          >
            <Button
              className="bg-[#FFD700] text-blue-700 hover:bg-[#FFD700]/90 font-bold text-lg px-8 py-6"
              size="lg"
              asChild
            >
              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=midwaycomforts@gmail.com&su=Seeking job"
                target="_blank"
              >
                {' '}
                Apply Here
              </a>
            </Button>
          </motion.div>
          <motion.div
            className="mt-8 flex flex-wrap justify-center gap-6"
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            <motion.div className="flex items-center text-white" variants={item}>
              <Briefcase className="h-5 w-5 mr-2" />
              <span>Multiple Positions</span>
            </motion.div>
            <motion.div className="flex items-center text-white" variants={item}>
              <MapPin className="h-5 w-5 mr-2" />
              <span>Various Locations</span>
            </motion.div>
            <motion.div className="flex items-center text-white" variants={item}>
              <CalendarDays className="h-5 w-5 mr-2" />
              <span>Immediate Openings</span>
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.section>
    </div>
  );
}

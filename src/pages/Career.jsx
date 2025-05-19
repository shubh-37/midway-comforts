import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import companyImage from '@/assets/company.jpeg';
import { Award, Briefcase, GraduationCap, Heart, TrendingUp, MapPin, CalendarDays, Users } from 'lucide-react';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import clientAero from '@/assets/client-aero.png';
import clientAndheri from '@/assets/client-andheri.png';
import OpenPositions from '@/components/JobPosting';
import car1 from '@/assets/car1.jpg';
import car2 from '@/assets/car2.jpg';

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
                icon: <GraduationCap className="h-10 w-10 text-blue-700" />,
                title: 'Learning & Development Culture',
                description:
                  'We believe in continuous growth — not just for the company but for our people. Regular training, on-the-job learning, and mentorship from industry veterans ensure that you’re always improving and staying ahead in your field.'
              },
              {
                icon: <Award className="h-10 w-10 text-blue-700" />,
                title: 'Legacy of Trust & Excellence',
                description:
                  'With over 25 years in the HVAC industry, Midway Comforts is a name synonymous with reliability and quality. Our long-standing reputation has been built through consistent performance and strong client relationships. When you join us, you become part of a legacy that stands tall in the market.'
              },
              {
                icon: <Heart className="h-10 w-10 text-blue-700" />,
                title: 'Supportive Team Environment',
                description:
                  "At Midway Comforts, you’re not just another employee — you're family. We foster a culture of teamwork, mutual respect, and open communication, where everyone’s ideas and efforts are valued and recognized."
              },
              {
                icon: <TrendingUp className="h-10 w-10 text-blue-700" />,
                title: 'Stability with Growth Potential',
                description:
                  'We combine the security of a well-established business with the mindset of ongoing expansion. Our steady growth means more opportunities for career advancement, job stability, and personal development over time.'
              },
              {
                icon: <Users className="h-10 w-10 text-blue-700" />,
                title: 'Diverse Career Opportunities',
                description:
                  "We offer a wide range of roles — from technical and engineering positions to project management, sales, and support. Whether you're just starting out or have years of experience, there's a place for you to grow and thrive at Midway Comforts."
              },
              {
                icon: <Briefcase className="h-10 w-10 text-blue-700" />,
                title: 'Hands-On Experience with Big Projects',
                description:
                  'Get exposure to some of the most prestigious HVAC projects across commercial, residential, and industrial sectors. Working here means real on-site learning, challenging assignments, and the satisfaction of contributing to large-scale solutions.'
              }
            ].map((item, index) => (
              <motion.div key={index} variants={item} className="h-full">
                <motion.div
                  className="h-full"
                  whileHover={{
                    scale: 1.03,
                    boxShadow: '0 10px 30px rgba(0, 71, 171, 0.1)',
                    borderColor: '#FFD700'
                  }}
                  transition={{ type: 'spring', stiffness: 300 }}
                >
                  <Card className="border-2 border-blue-700/10 hover:border-[#FFD700] transition-all h-full flex flex-col">
                    <CardContent className="p-6 flex flex-col h-full">
                      <motion.div
                        className="mb-4"
                        initial={{ scale: 1 }}
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        transition={{ type: 'spring', stiffness: 400 }}
                      >
                        {item.icon}
                      </motion.div>
                      <h3 className="text-xl font-bold mb-2 text-blue-700">{item.title}</h3>
                      <p className="text-gray-600 flex-grow">{item.description}</p>
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

              <motion.ul
                className="space-y-2"
                variants={container}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.3 }}
              >
                {[
                  'People-First Approach – We value every team member and create an environment where everyone feels respected and heard.',
                  'Teamwork at the Core – Collaboration and support are at the heart of how we work, both on-site and in the office.',
                  'Celebrating Together – From birthdays to project wins, we take time to celebrate achievements as a team.',
                  'Professional, Yet Personal – While we maintain high standards, we never lose the warmth of a close-knit, family-like culture.'
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
              <img src={car2} alt="Team collaboration at Midway Comforts" fill className="object-cover" />
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
              <img src={car1} alt="Community involvement at Midway Comforts" fill className="object-cover" />
            </motion.div>
            <motion.div
              className="order-1 lg:order-2"
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.3 }}
              variants={slideInRight}
            >
              <h3 className="text-2xl font-bold mb-4 text-blue-700">Your Future, Engineered Here</h3>
              <motion.div
                className="grid grid-cols-2 gap-4"
                variants={container}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.3 }}
              >
                {[
                  {
                    title: 'Grow with Purpose',
                    description:
                      'At Midway Comforts, you’re not just doing a job — you’re building a career with direction and long-term goals.'
                  },
                  {
                    title: 'Be Part of Innovation',
                    description:
                      'From modern HVAC systems to energy-efficient tech, we’re always upgrading — and so will you.'
                  },
                  {
                    title: 'Every Day Is Different',
                    description:
                      'Work isn’t routine here. Every project brings new challenges, clients, and creative problem-solving.'
                  },
                  {
                    title: 'Proud to Build Something Real',
                    description:
                      "Whether it's a massive commercial space or a cozy home, your work has visible impact and real value."
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

      <OpenPositions />

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

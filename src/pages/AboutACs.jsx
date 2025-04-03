import { motion } from 'framer-motion';
import { Fan, Thermometer, Wrench, Shield, Leaf, Droplets, Zap, MessageCircle, ArrowDown, ArrowUp } from 'lucide-react';
import { useInView } from 'react-intersection-observer';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { VerticalMarquee } from '@/components/vertical-marquee';
import acimage from '@/assets/ac.png';
import whatsapp from '@/assets/whatsapp.png';

// Updated the circularProcessStyles to fix the mobile marquee overflow
const circularProcessStyles = `
  .circular-process-container {
    position: relative;
    width: 100%;
    max-width: 900px;
    height: 700px;
    margin: 0 auto;
  }
  
  @keyframes spin-slow {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
  
  .animate-spin-slow {
    animation: spin-slow 20s linear infinite;
  }

  .mobile-process-container {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px 0;
    width: 100%;
    overflow: hidden; /* Prevent overflow */
  }
  
  .mobile-step-container {
    position: relative;
    width: 100%;
    display: flex;
    justify-content: center;
    margin-bottom: 20px;
  }
  
  .mobile-arrow {
    display: flex;
    justify-content: center;
    margin: 8px 0;
  }
  
  .mobile-loop-indicator {
    position: relative;
    width: 100%;
    display: flex;
    justify-content: center;
    margin-top: 20px;
    z-index: 20;
  }
  
  .mobile-marquee-container {
    height: 450px; /* Reduced height */
    width: 100%;
    max-width: 300px;
    margin: 0 auto;
    position: relative;
    overflow: hidden; /* Important: Ensure no overflow */
  }
  
  .mobile-marquee-container::before,
  .mobile-marquee-container::after {
    content: '';
    position: absolute;
    left: 0;
    right: 0;
    height: 80px;
    z-index: 10;
    pointer-events: none;
  }
  
  .mobile-marquee-container::before {
    top: 0;
    background: linear-gradient(to bottom, white, transparent);
  }
  
  .mobile-marquee-container::after {
    bottom: 0;
    background: linear-gradient(to top, white, transparent);
  }

  /* Make mobile cards narrower */
  .mobile-process-card {
    width: 100%;
    max-width: 260px; /* Narrower width */
  }

  @media (max-width: 768px) {
    .circular-process-container {
      display: none !important;
    }
    
    .mobile-process-container {
      display: flex;
    }

    /* Additional responsive adjustments */
    .tabs-content-container {
      position: relative;
      width: 100%;
      min-height: 500px; /* Min height to contain marquee */
      overflow: hidden; /* Prevent overflow */
    }
  }
  
  @media (min-width: 769px) {
    .mobile-process-container {
      display: none;
    }
  }
`;

export default function ACGuidePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-blue-50">
      <style jsx>{circularProcessStyles}</style>
      <HowAcWorksSection />
      <MythsVsFactsSection />
      <ServiceImportanceSection />
    </div>
  );
}

function HowAcWorksSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

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
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <section id="how-ac-works" className="py-10 bg-white">
      <div className="px-4 md:px-6">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          variants={containerVariants}
          className="flex flex-col items-center"
        >
          <motion.h2
            variants={itemVariants}
            className="text-3xl font-bold tracking-tighter sm:text-3xl md:text-3xl lg:text-4xl text-center"
          >
            How Does an AC Work?
          </motion.h2>
          <motion.p variants={itemVariants} className="mt-4 max-w-[700px] text-center text-muted-foreground">
            Air Conditioners cool indoor spaces by removing heat through a refrigeration cycle, divided between indoor
            and outdoor units.
          </motion.p>

          <motion.div variants={itemVariants} className="mt-12 w-full">
            <Tabs defaultValue="process" className="w-full">
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger
                  value="process"
                  className="data-[state=active]:bg-slate-100 data-[state=active]:text-black py-2"
                >
                  Step-by-Step Process
                </TabsTrigger>
                <TabsTrigger
                  value="diagram"
                  className="data-[state=active]:bg-slate-100 data-[state=active]:text-black py-2"
                >
                  AC Cycle Diagram
                </TabsTrigger>
              </TabsList>
              {/* Fixed TabsContent with better containment */}
              <TabsContent value="process" className="mt-6 tabs-content-container">
                <div className="relative w-full max-w-5xl mx-auto">
                  {/* Desktop View */}
                  <div className="circular-process-container md:block">
                    {/* Top */}
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 transform">
                      <ProcessCard
                        step="1"
                        title="Compressor"
                        location="Outdoor Unit"
                        description="Compresses refrigerant gas, increasing pressure and temperature to create hot, high-pressure gas."
                        icon={<Fan className="h-10 w-10 text-blue-500" />}
                      />
                      <div className="absolute bottom-0 left-[75%] transform translate-y-8">
                        <Arrow direction="down-right" />
                      </div>
                    </div>

                    {/* Top Right */}
                    <div className="absolute top-[20%] right-0 transform translate-x-0">
                      <ProcessCard
                        step="2"
                        title="Condenser Coil"
                        location="Outdoor Unit"
                        description="Hot gas passes through coils, cooling and condensing into liquid. Heat transfers to outside air."
                        icon={<Thermometer className="h-10 w-10 text-red-500" />}
                      />
                      <div className="absolute bottom-0 left-1/2 transform translate-y-8">
                        <Arrow direction="down" />
                      </div>
                    </div>

                    {/* Bottom Right */}
                    <div className="absolute bottom-[20%] right-0 transform translate-x-0">
                      <ProcessCard
                        step="3"
                        title="Expansion Valve"
                        location="Between Units"
                        description="Liquid refrigerant passes through valve, pressure drops, cooling further into cold liquid."
                        icon={<Zap className="h-10 w-10 text-yellow-500" />}
                      />
                      <div className="absolute bottom-1/2 left-0 transform -translate-x-8">
                        <Arrow direction="down-left" />
                      </div>
                    </div>

                    {/* Bottom */}
                    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 transform">
                      <ProcessCard
                        step="4"
                        title="Evaporator Coil"
                        location="Indoor Unit"
                        description="Cold liquid absorbs heat from indoor air, evaporating back to gas state."
                        icon={<Thermometer className="h-10 w-10 text-blue-300" />}
                      />
                      <div className="absolute top-0 left-[25%] transform -translate-y-8">
                        <Arrow direction="up-left" />
                      </div>
                    </div>

                    {/* Bottom Left */}
                    <div className="absolute bottom-[20%] left-0 transform -translate-x-0">
                      <ProcessCard
                        step="5"
                        title="Cooling the Air"
                        location="Indoor Unit"
                        description="Warm room air blows over cold coils, cools down, and circulates back into the room."
                        icon={<Droplets className="h-10 w-10 text-blue-400" />}
                      />
                      <div className="absolute top-0 left-1/2 transform -translate-y-8">
                        <Arrow direction="up" />
                      </div>
                    </div>

                    {/* Top Left */}
                    <div className="absolute top-[20%] left-0 transform -translate-x-0">
                      <ProcessCard
                        step="6"
                        title="Return to Compressor"
                        location="System Cycle"
                        description="Warm gas refrigerant flows back to compressor and the cycle repeats continuously."
                        icon={<Fan className="h-10 w-10 text-blue-600" />}
                      />
                      <div className="absolute top-1/2 right-0 transform translate-x-8">
                        <Arrow direction="up-right" />
                      </div>
                    </div>

                    {/* Center */}
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                      <div className="bg-blue-100 rounded-full p-4 shadow-sm text-center">
                        <Fan className="h-8 w-8 text-blue-700 mx-auto animate-spin-slow" />
                        <p className="text-xs font-medium mt-1">Continuous Cycle</p>
                      </div>
                    </div>
                  </div>

                  {/* Mobile View - Vertical Marquee - Fixed */}
                  <div className="mobile-process-container">
                    <div className="mobile-marquee-container">
                      <VerticalMarquee speed={4} direction="down">
                        <div className="mobile-step-container">
                          <MobileProcessCard
                            step="6"
                            title="Return to Compressor"
                            location="System Cycle"
                            description="Warm gas refrigerant returns to compressor."
                            icon={<Fan className="h-8 w-8 text-blue-600" />}
                          />
                        </div>
                        <div className="mobile-arrow">
                          <ArrowDown className="h-6 w-6 text-blue-500" />
                        </div>
                        {/* Step 1 */}
                        <div className="mobile-step-container">
                          <MobileProcessCard
                            step="1"
                            title="Compressor"
                            location="Outdoor Unit"
                            description="Compresses refrigerant gas, increasing pressure and temperature."
                            icon={<Fan className="h-8 w-8 text-blue-500" />}
                          />
                        </div>
                        <div className="mobile-arrow">
                          <ArrowDown className="h-6 w-6 text-blue-500" />
                        </div>

                        {/* Step 2 */}
                        <div className="mobile-step-container">
                          <MobileProcessCard
                            step="2"
                            title="Condenser Coil"
                            location="Outdoor Unit"
                            description="Hot gas cools and condenses into liquid."
                            icon={<Thermometer className="h-8 w-8 text-red-500" />}
                          />
                        </div>
                        <div className="mobile-arrow">
                          <ArrowDown className="h-6 w-6 text-blue-500" />
                        </div>

                        {/* Step 3 */}
                        <div className="mobile-step-container">
                          <MobileProcessCard
                            step="3"
                            title="Expansion Valve"
                            location="Between Units"
                            description="Liquid refrigerant cools further into cold liquid."
                            icon={<Zap className="h-8 w-8 text-yellow-500" />}
                          />
                        </div>
                        <div className="mobile-arrow">
                          <ArrowDown className="h-6 w-6 text-blue-500" />
                        </div>

                        {/* Step 4 */}
                        <div className="mobile-step-container">
                          <MobileProcessCard
                            step="4"
                            title="Evaporator Coil"
                            location="Indoor Unit"
                            description="Cold liquid absorbs heat from indoor air."
                            icon={<Thermometer className="h-8 w-8 text-blue-300" />}
                          />
                        </div>
                        <div className="mobile-arrow">
                          <ArrowDown className="h-6 w-6 text-blue-500" />
                        </div>

                        {/* Step 5 */}
                        <div className="mobile-step-container">
                          <MobileProcessCard
                            step="5"
                            title="Cooling the Air"
                            location="Indoor Unit"
                            description="Warm room air blows over cold coils and cools down."
                            icon={<Droplets className="h-8 w-8 text-blue-400" />}
                          />
                        </div>
                        <div className="mobile-arrow">
                          <ArrowDown className="h-6 w-6 text-blue-500" />
                        </div>

                        {/* Step 6 */}
                      </VerticalMarquee>
                    </div>
                  </div>
                </div>
              </TabsContent>
              <TabsContent value="diagram" className="mt-6">
                <ACCycleDiagram />
              </TabsContent>
            </Tabs>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

// Regular ProcessCard for desktop
function ProcessCard({ step, title, location, description, icon }) {
  return (
    <div className="bg-white rounded-lg shadow-sm p-4 w-64">
      <div className="flex items-center mb-2">
        <div className="rounded-full bg-blue-100 p-2 mr-3">{icon}</div>
        <div>
          <p className="text-sm font-medium text-muted-foreground">Step {step}</p>
          <h3 className="text-lg font-bold">{title}</h3>
        </div>
      </div>
      <p className="text-sm font-medium text-blue-600 mb-1">{location}</p>
      <p className="text-sm text-muted-foreground">{description}</p>
    </div>
  );
}

// New MobileProcessCard with more compact design
function MobileProcessCard({ step, title, location, description, icon }) {
  return (
    <div className="bg-white rounded-lg shadow-sm p-3 mobile-process-card">
      <div className="flex items-center mb-1">
        <div className="rounded-full bg-blue-100 p-1 mr-2">{icon}</div>
        <div>
          <p className="text-xs font-medium text-muted-foreground">Step {step}</p>
          <h3 className="text-md font-bold">{title}</h3>
        </div>
      </div>
      <p className="text-xs font-medium text-blue-600 mb-1">{location}</p>
      <p className="text-xs text-muted-foreground">{description}</p>
    </div>
  );
}

function Arrow({ direction = 'right' }) {
  const rotationClasses = {
    right: 'rotate-0',
    'down-right': 'rotate-45',
    down: 'rotate-90',
    'down-left': 'rotate-135',
    left: 'rotate-180',
    'up-left': '-rotate-135',
    up: '-rotate-90',
    'up-right': '-rotate-45'
  };

  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`transform ${rotationClasses[direction]}`}
    >
      <path
        d="M5 12H19M19 12L12 5M19 12L12 19"
        stroke="#3B82F6"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ACCycleDiagram() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0 }}
      animate={inView ? { opacity: 1 } : { opacity: 0 }}
      transition={{ duration: 0.8 }}
      className="relative h-[400px] md:h-[500px] w-full rounded-lg p-4 flex items-center justify-center"
    >
      <div className="text-center w-full h-full flex flex-col items-center justify-center">
        <div className="mb-4">
          <Fan className="h-16 w-16 mx-auto text-blue-500" />
        </div>
        <h3 className="text-xl font-bold">AC Refrigeration Cycle</h3>

        <div className="mt-4 w-full h-full max-h-[300px] flex items-center justify-center">
          <img
            src={acimage}
            alt="AC Refrigeration Cycle Diagram"
            className="w-full h-full object-contain max-w-full max-h-full"
          />
        </div>
      </div>
    </motion.div>
  );
}

function MythsVsFactsSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

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
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <section id="myths-facts" className="py-16 md:py-24 bg-blue-50">
      <div className="px-4 md:px-6">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          variants={containerVariants}
          className="flex flex-col items-center"
        >
          <motion.h2
            variants={itemVariants}
            className="text-3xl font-bold tracking-tighter sm:text-3xl md:text-3xl lg:text-4xl text-center"
          >
            AC Myths vs. Facts
          </motion.h2>
          <motion.p variants={itemVariants} className="mt-4 max-w-[700px] text-center text-muted-foreground">
            Let's separate common misconceptions from the truth about air conditioning systems.
          </motion.p>

          <motion.div variants={itemVariants} className="mt-12 w-full grid gap-8">
            <MythFactCard
              mythNumber="1"
              myth="ACs cause health problems."
              fact="ACs themselves do not cause health problems. However, poor maintenance can lead to dirty filters and bacteria build-up, which can cause allergies and respiratory issues."
              solution="Regular cleaning, filter replacement and overall servicing are essential to maintaining a healthy indoor air quality."
              icon={<Shield className="h-10 w-10 text-blue-500" />}
            />

            <MythFactCard
              mythNumber="2"
              myth="Turning off AC saves energy."
              fact="It might seem like turning off the AC saves energy, but this is often not true. Constantly turning the AC off and on uses more energy as the system has to work harder to cool down the space again."
              solution="Maintaining a steady, comfortable temperature (e.g., 24-26°C) uses less energy compared to frequent on/off cycles."
              icon={<Zap className="h-10 w-10 text-yellow-500" />}
            />

            <MythFactCard
              mythNumber="3"
              myth="ACs are bad for the environment."
              fact="Older ACs may have been harmful to the environment, but modern ACs use eco-friendly refrigerants and are designed to be more energy-efficient."
              solution="New technologies, like inverter technology, optimize energy consumption and minimize the environmental impact."
              icon={<Leaf className="h-10 w-10 text-green-500" />}
            />

            <MythFactCard
              mythNumber="4"
              myth="ACs dry out the air too much."
              fact="While ACs do remove humidity from the air, they do not completely dry it out unless set at very low temperatures for extended periods."
              solution="If you feel the air is too dry, you can use a humidifier alongside your AC or simply set the temperature a little higher for a more comfortable experience."
              icon={<Droplets className="h-10 w-10 text-blue-400" />}
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

function MythFactCard({ mythNumber, myth, fact, solution, icon }) {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.6 }}
      className="rounded-lg overflow-hidden bg-white shadow-md"
    >
      <div className="grid md:grid-cols-2">
        <div className="bg-muted/30 p-6 flex flex-col">
          <div className="flex items-center mb-4">
            <div className="rounded-full bg-red-100 p-2 mr-3">
              <span className="text-red-600 font-bold">Myth</span>
            </div>
            <h3 className="text-lg font-bold">
              Myth {mythNumber}: "{myth}"
            </h3>
          </div>
          <div className="flex-1 flex items-center justify-center">
            <div className="p-4 rounded-full bg-background shadow-sm">{icon}</div>
          </div>
        </div>
        <div className="p-6">
          <div className="flex items-center mb-4">
            <div className="rounded-full bg-green-100 p-2 mr-3">
              <span className="text-green-600 font-bold">Fact</span>
            </div>
            <h3 className="text-lg font-bold">The Truth</h3>
          </div>
          <p className="text-muted-foreground mb-4">{fact}</p>
          <div className="bg-blue-50 p-4 rounded-lg">
            <h4 className="font-medium mb-2">Solution:</h4>
            <p className="text-sm">{solution}</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

function ServiceImportanceSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

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
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <section id="service" className="py-16 md:py-24 bg-white">
      <div className="px-4 md:px-6">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          variants={containerVariants}
          className="flex flex-col items-center"
        >
          <motion.h2
            variants={itemVariants}
            className="text-3xl font-bold tracking-tighter sm:text-3xl md:text-3xl lg:text-4xl text-center"
          >
            Why Regular Service is Important
          </motion.h2>
          <motion.p variants={itemVariants} className="mt-4 max-w-[700px] text-center text-muted-foreground">
            Maintaining your AC system regularly ensures optimal performance, energy efficiency, and a longer lifespan.
          </motion.p>

          <motion.div variants={itemVariants} className="mt-12 w-full grid gap-8 md:grid-cols-2">
            <div>
              <h3 className="text-2xl font-bold mb-6">Key Benefits of Regular Service</h3>
              <div className="space-y-6">
                <BenefitCard
                  title="Efficiency"
                  description="Regular maintenance ensures that your AC works at optimal efficiency, cooling your space faster and using less energy."
                  icon={<Zap className="h-6 w-6 text-yellow-500" />}
                />
                <BenefitCard
                  title="Cost Savings"
                  description="Regularly serviced ACs are less likely to break down, preventing expensive repairs in the future."
                  icon={<Zap className="h-6 w-6 text-green-500" />}
                />
                <BenefitCard
                  title="Longer Lifespan"
                  description="An AC that is maintained regularly lasts much longer (typically 10-15 years) compared to one that is neglected."
                  icon={<Shield className="h-6 w-6 text-blue-500" />}
                />
              </div>

              <div className="mt-8 space-y-4">
                <h3 className="text-xl font-bold">What Regular Service Includes</h3>
                <ul className="space-y-2">
                  <ServiceItem text="Cleaning Air Filters: Removes dirt, dust, and allergens from the filters, improving air quality and reducing strain on the system." />
                  <ServiceItem text="Checking Refrigerant Levels: Ensures that the refrigerant is at the right level for efficient cooling." />
                  <ServiceItem text="Cleaning Coils: Both evaporator and condenser coils should be cleaned regularly to maintain the AC's performance." />
                  <ServiceItem text="Inspecting the Ductwork: Ensures there are no leaks or blockages in the air ducts that could reduce airflow." />
                  <ServiceItem text="Checking Thermostat Calibration: Ensures the thermostat is working properly, helping maintain the right temperature." />
                </ul>
              </div>
            </div>

            <div>
              <Card className="shadow-lg">
                <CardHeader>
                  <CardTitle className="text-2xl font-bold">Contact us on WhatsApp for your servicing needs</CardTitle>
                </CardHeader>
                <CardContent className="flex flex-col items-center justify-center p-8">
                  <div className="mb-6">
                    <img src={whatsapp} className="h-24 w-24  mx-auto" />
                    <p className="text-center mt-4 text-gray-600">
                      Get quick responses to your questions by contacting us directly on WhatsApp. Our team is ready to
                      assist you!
                    </p>
                  </div>
                  <Button
                    size="lg"
                    className="bg-green-500 hover:bg-green-600 text-white font-bold py-4 px-8 rounded-lg flex items-center gap-2"
                    onClick={() => window.open('https://wa.me/9930267231', '_blank')}
                  >
                    <MessageCircle className="h-5 w-5" />
                    Contact on WhatsApp
                  </Button>
                </CardContent>
              </Card>
              <div className="mt-8 p-6 bg-blue-50 rounded-lg">
                <h3 className="text-xl font-bold mb-4">Did You Know?</h3>
                <p className="text-muted-foreground mb-3">
                  Regular AC maintenance can improve its efficiency by up to 5-15%.
                </p>
                <p className="text-muted-foreground">
                  HVAC systems consume around 50-55% of the total electricity bill in a household or a corporate office.
                  Therefore it is important to keep all the machines well maintained to ensure efficient operation.
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

function BenefitCard({ title, description, icon }) {
  return (
    <div className="flex items-start">
      <div className="mr-4 mt-1 rounded-full bg-primary/10 p-2">{icon}</div>
      <div>
        <h4 className="font-bold">{title}</h4>
        <p className="text-muted-foreground">{description}</p>
      </div>
    </div>
  );
}

function ServiceItem({ text }) {
  return (
    <li className="flex items-start">
      <div className="mr-2 mt-1">
        <Wrench className="h-4 w-4 text-blue-500" />
      </div>
      <span className="text-sm text-muted-foreground">{text}</span>
    </li>
  );
}

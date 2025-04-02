import { motion } from 'framer-motion';
import { Fan, Thermometer, Wrench, Shield, Leaf, Droplets, Zap, MessageCircle } from 'lucide-react';
import { useInView } from 'react-intersection-observer';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import acimage from '@/assets/ac.png';
import whatsapp from '@/assets/whatsapp.png';
export default function ACGuidePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-blue-50">
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
      <div className="container px-4 md:px-6">
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
                  className=" data-[state=active]:bg-slate-100 data-[state=active]:text-black py-2"
                >
                  Step-by-Step Process
                </TabsTrigger>
                <TabsTrigger
                  value="diagram"
                  className=" data-[state=active]:bg-slate-100 data-[state=active]:text-black py-2"
                >
                  AC Cycle Diagram
                </TabsTrigger>
              </TabsList>
              <TabsContent value="process" className="mt-6">
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                  <ACProcessCard
                    step="1"
                    title="Compressor"
                    location="Outdoor Unit"
                    description="Compresses refrigerant gas, increasing pressure and temperature to create hot, high-pressure gas."
                    icon={<Fan className="h-10 w-10 text-blue-500" />}
                  />
                  <ACProcessCard
                    step="2"
                    title="Condenser Coil"
                    location="Outdoor Unit"
                    description="Hot gas passes through coils, cooling and condensing into liquid. Heat transfers to outside air."
                    icon={<Thermometer className="h-10 w-10 text-red-500" />}
                  />
                  <ACProcessCard
                    step="3"
                    title="Expansion Valve"
                    location="Between Units"
                    description="Liquid refrigerant passes through valve, pressure drops, cooling further into cold liquid."
                    icon={<Zap className="h-10 w-10 text-yellow-500" />}
                  />
                  <ACProcessCard
                    step="4"
                    title="Evaporator Coil"
                    location="Indoor Unit"
                    description="Cold liquid absorbs heat from indoor air, evaporating back to gas state."
                    icon={<Thermometer className="h-10 w-10 text-blue-300" />}
                  />
                  <ACProcessCard
                    step="5"
                    title="Cooling the Air"
                    location="Indoor Unit"
                    description="Warm room air blows over cold coils, cools down, and circulates back into the room."
                    icon={<Droplets className="h-10 w-10 text-blue-400" />}
                  />
                  <ACProcessCard
                    step="6"
                    title="Return to Compressor"
                    location="System Cycle"
                    description="Warm gas refrigerant flows back to compressor and the cycle repeats continuously."
                    icon={<Fan className="h-10 w-10 text-blue-600" />}
                  />
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

function ACProcessCard({ step, title, location, description, icon }) {
  return (
    <Card className="overflow-hidden">
      <CardHeader className="bg-muted/50 pb-3">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm font-medium text-muted-foreground">Step {step}</p>
            <CardTitle className="text-xl">{title}</CardTitle>
          </div>
          <div className="rounded-full bg-background p-2 shadow-sm">{icon}</div>
        </div>
      </CardHeader>
      <CardContent className="pt-4">
        <p className="text-sm font-medium text-blue-600 mb-2">{location}</p>
        <CardDescription className="text-sm">{description}</CardDescription>
      </CardContent>
    </Card>
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
      <div className="container px-4 md:px-6">
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
      <div className="container px-4 md:px-6">
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
                  According to the US Department of Energy, regular AC maintenance can improve its efficiency by up to
                  5-15%.
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

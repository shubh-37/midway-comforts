import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Building, ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import aero1 from '@/assets/aero1.jpeg';
import aero2 from '@/assets/aero2.jpeg';
import col1 from '@/assets/col1.jpeg';
import col2 from '@/assets/col2.jpeg';

// Case studies data
const caseStudies = [
  {
    id: 'tanishq',
    title: 'Tanishq Case Study',
    subtitle: 'Frequent Breakdown and Gas Leaks',
    client: 'Tanishq',
    location: 'Andheri (W), Mumbai',
    industry: 'Retail',
    overview:
      'Tanishq, a famous jewellery brand, operates a commercial showroom located in Andheri (W), Mumbai. The showroom was experiencing persistent issues with its air conditioning system, which severely impacted its daily operations and customer comfort.',
    problem:
      "The showroom's location near a sewer contributed to a high concentration of sulphur gases in the air. These gases caused severe corrosion in the copper pipes of the existing system, compromising their structural integrity and resulting in frequent gas leaks and disrupted cooling performance. The client required a permanent solution to this recurring problem and replacement of their current old AC's with Toshiba.",
    assessment:
      'Midway Comforts approached the problem by conducting a comprehensive heat load calculation for the entire site. Additionally, Air tests were performed to confirm the presence of sulphur gases in the environment, validating the root cause of the recurring issues.',
    solution: [
      'Anti-Corrosion Coating: A protective coating was applied to all machines and copper pipes by trained professionals, ensuring long-lasting durability.',
      'Tonnage Calculation & Installation: Ensured proper tonnage installation based on the heat load assessment for efficient and reliable cooling.'
    ],
    implementation:
      'The anti-corrosion coating process was meticulously carried out, and the necessary tonnage adjustments were made according to the heat load calculation. The entire process was managed with precision to provide a robust and long-term solution.',
    results:
      'The solution proved to be highly effective. Since our intervention, the client experienced zero gas leaks, and their cooling system continued to perform flawlessly despite the challenging environmental conditions. The protective coating provided a durable barrier against corrosive sulphur gases, ensuring uninterrupted operation.',
    benefits:
      'The client was highly satisfied with the results, and since our assessment and customized approach, not a single gas leak complaint has been reported. The sustainable cooling system we provided offers peace of mind and dependable performance.',
    conclusion:
      "Midway Comforts successfully resolved the persistent gas leak issues at Tanishq's showroom by applying an anti-corrosion coating and ensuring proper tonnage calculation. Our solution provided lasting protection against corrosive gases and maintained optimal cooling performance.",
    images: ['/placeholder.svg?height=400&width=600', '/placeholder.svg?height=400&width=600']
  },
  {
    id: 'ventilation',
    title: 'Ventilation Project',
    client: 'Aero Mall',
    location: 'Pune Airport',
    industry: 'Commercial',
    overview:
      'Aero Mall, located at Pune Airport and developed as a joint venture of Pebble Infra with the Airport Authority of India, required a comprehensive air conditioning and ventilation solution. The project involved installing air-cooled chillers for the mall area and implementing an efficient ventilation system for the multi-level car parking area associated with the mall.',
    problem:
      'The site was provided to Midway Comforts as a bare-shell structure, requiring everything to be built from scratch. Given that the mall operates 24/7, there was a high demand for a system that could maintain good efficiency consistently and reduce operational costs over time.',
    assessment:
      "To address the client's needs, a thorough assessment was carried out. Recognizing the continuous operational nature of the mall, we focused on energy-efficient solutions that would provide optimal cooling and ventilation while minimizing power consumption.",
    solution: [
      'High-efficiency air-cooled chillers for the mall area',
      'High-efficiency fans for the multi-level car parking area',
      'CO2 sensor system to actively monitor and maintain appropriate CO2 levels',
      'Integration with Building Management System (BMS)'
    ],
    implementation:
      "The installation process was carried out meticulously, with special attention given to optimizing power consumption. By applying high-efficiency systems and integrating automated monitoring solutions, we ensured that the project was completed to meet the client's specifications while also enhancing energy efficiency.",
    results:
      'The installation and ventilation processes were completed smoothly, providing the client with a reliable, efficient, and low-maintenance cooling and ventilation system.',
    benefits:
      'By focusing on power-saving strategies and utilizing modern technologies like CO2 sensors and BMS systems, we were able to significantly reduce future power consumption for the client. The client expressed high satisfaction with the project outcome, appreciating the balance between efficiency, reliability, and long-term cost savings.',
    conclusion:
      'Midway Comforts successfully completed the air conditioning and ventilation project for Aero Mall, Pune Airport, providing an efficient and durable solution that ensures optimal cooling and air quality round-the-clock.',
    images: [aero1, aero2]
  },
  {
    id: 'safety',
    title: 'Safety Protocol',
    client: 'Reliance',
    location: 'BKC, Mumbai',
    industry: 'Corporate',
    overview:
      'Reliance, a prominent corporate client, collaborated with Samsung as the Project Management Consultant (PMC) for a high-profile project situated in BKC, Mumbai. The project encompassed both residential and commercial spaces, demanding strict adherence to advanced safety standards.',
    problem:
      'Midway Comforts was unprepared for the rigorous safety protocols required by Samsung, including extensive paperwork and compliance standards. Two major challenges emerged: 1. Grooming manpower to strictly follow the imposed safety standards. 2. Ensuring adherence to rules regarding tobacco consumption, which was strictly prohibited and accompanied by fines if violated.',
    assessment:
      'Recognizing the importance of meeting safety requirements, Midway Comforts implemented a rigorous training regimen. Both Samsung and our team conducted thorough training sessions to ensure that all workers understood the protocols and adhered to them. Proper documentation of every training process was maintained for accountability and proof of compliance.',
    solution: [
      'Training, training, and more training: Continuous education and awareness programs to instil the importance of safety among the workforce.',
      'Motivation and Accountability: Introducing gift ceremonies and incentive programs for workers following protocols diligently, while imposing fines for negligence.'
    ],
    implementation:
      'Midway Comforts organized multiple training sessions, led by both Samsung and our own supervisors. The training emphasized safety guidelines, workplace conduct, and prohibited behaviours such as tobacco consumption. Incentive programs were established to encourage compliance, while penalties were applied to ensure adherence to the rules.',
    safetyProtocols: [
      'Health, Safety, and Environment (HSE) Plan: This document outlines the health, safety, and environmental requirements for the project. It emphasizes hazard identification, risk assessment, and the implementation of appropriate control measures.',
      'Occupational Health and Safety Management Systems (OHSMS): The project complies with recognized Occupational Health and Safety Management Systems to prevent workplace accidents and ensure a safe working environment for all personnel.',
      'Risk Management: Comprehensive risk assessments are conducted to identify potential hazards. Effective mitigation strategies are implemented to control and minimize risks.',
      'Emergency Response Plan: An established Emergency Response Plan is maintained, detailing procedures for addressing emergencies, ensuring prompt and effective action to mitigate impacts.',
      'Safety Training and Awareness: All personnel receive safety training to enhance their awareness of hazards and promote a culture of safety throughout the operation.',
      'Personal Protective Equipment (PPE) Usage: The proper use of PPE is enforced to protect employees from workplace hazards that cannot be eliminated.',
      'Documentation and Reporting: All safety activities are thoroughly documented, with reports generated for review and continuous improvement of safety protocols.'
    ],
    results:
      'The comprehensive safety training initiative yielded excellent results. The project was completed with zero casualties, and all safety norms were followed meticulously by both staff members and supervisors.',
    benefits:
      "The experience prompted Midway Comforts to establish higher standards for safety compliance across all projects, marking a significant milestone in the company's safety protocols.",
    conclusion:
      "The successful implementation of safety protocols for this project has brought about a positive transformation in Midway Comforts' approach to safety. By prioritizing training and compliance, we have created a safer and more reliable working environment for all future projects.",
    images: ['/placeholder.svg?height=400&width=600', '/placeholder.svg?height=400&width=600']
  },
  {
    id: 'overseas',
    title: 'Overseas Project',
    client: 'Lanka Hotel Pvt Ltd (Sheraton Hotel)',
    location: 'Colombo, Sri Lanka',
    industry: 'Hospitality',
    overview:
      'Lanka Hotel Pvt Ltd (Sheraton Hotel), a prestigious hospitality client based in Colombo, Sri Lanka, approached Midway Comforts for the complete installation of a cooling and ventilation system for their hotel. The project presented a unique challenge due to its overseas nature, requiring meticulous planning and execution.',
    problem:
      'The client provided a bare site, while all required materials were present in India. With the project site located in Sri Lanka, the primary challenges included: Exporting low-side material and executing operations from India, skilled manpower was expensive and unavailable locally, necessitating the transportation of skilled manpower from India, and specific materials needed were not available in India, complicating the supply chain process.',
    assessment:
      "Understanding the logistical difficulties, Midway Comforts developed a plan to export materials at a reduced cost while maintaining quality. Additionally, we proposed a shift from VRF systems to chillers to optimize efficiency and meet the client's requirements. As part of the assessment process, our team first travelled to the site to conduct a comprehensive survey of the entire hotel premises. During this visit, our engineers meticulously measured all areas where installations were to be carried out and created a soft drawing for preliminary planning. This detailed survey allowed us to identify specific requirements and challenges early in the process.",
    solution: [
      'Rerouted material supply chain from Singapore to Sri Lanka',
      'Coordinated movement of skilled manpower from India to Sri Lanka',
      'Ensured proper documentation and adherence to international shipping standards, including handling Visas, passports, and other requirements for our manpower'
    ],
    implementation:
      'To overcome the logistical challenges, Midway Comforts arranged for the required materials to be shipped from Singapore to Sri Lanka, coordinated the movement of skilled manpower from India to Sri Lanka for the installation process, and ensured proper documentation and adherence to international shipping standards to avoid delays.',
    results:
      'Despite the complexities, the entire project was executed flawlessly. Not a single screw or part was missing, showcasing our dedication to excellence and meticulous planning.',
    benefits:
      "The successful execution of this overseas project highlighted Midway Comforts' capability to operate effectively in international settings.",
    conclusion:
      "Midway Comforts' ability to handle overseas projects with precision and efficiency sets us apart as a reliable partner for complex installations. Our commitment to quality and thoroughness ensures outstanding performance, regardless of geographical challenges.",
    images: [col1, col2]
  },
  {
    id: 'sound',
    title: 'Sound Issues',
    client: 'Rustomjee Elements',
    location: 'Mumbai',
    industry: 'Residential',
    overview:
      'Rustomjee Elements, a prominent residential project by Rustomjee, entrusted Midway Comforts with handling the ventilation, STP, and AC systems across all seven wings (A, B, C, D, E, F, G) of their sprawling complex. The project covered approximately 6 lakh square feet and involved the installation of systems providing a total of 3600 HP of Premium Toshiba VRF. Facilities included banquet halls, gyms, and other amenities, making it a massive undertaking.',
    problem:
      'A bare site was provided to Midway Comforts to complete the entire installation. However, once the systems were operational, a critical challenge emerged: sound transmission issues. Television and miscellaneous sounds were traveling between rooms through the ducts and grills, disturbing the peaceful environment the residents expected. Moreover, resolving this issue required intricate work without causing any damage to the already completed interior work, which demanded precision and expertise.',
    assessment:
      'Through thorough assessment and inspection, Midway Comforts traced the source of the sound transmission to the return air paths within the ducting system.',
    solution: [
      'Installation of Sound Attenuators: To minimize sound transmission effectively.',
      'Application of Acoustic Insulation: A layer of acoustic insulation was recommended to dampen noise and improve overall soundproofing.'
    ],
    implementation:
      'The installation process required extreme care and meticulous planning to avoid damage to the beautifully finished interiors. Our team executed the proposed solutions with precision, ensuring all sound attenuation systems were installed flawlessly and tested thoroughly.',
    results:
      'The sound transmission issue was completely resolved, resulting in a quiet and comfortable environment for the residents.',
    benefits:
      "The client was highly satisfied with the outcome, which led to multiple referrals from Rustomjee residents for future projects, enhancing Midway Comforts' reputation as a reliable and proficient service provider.",
    conclusion:
      "This project demonstrated Midway Comforts' ability to tackle complex challenges with finesse. By effectively addressing sound transmission issues without disrupting the interiors, we have reinforced our commitment to excellence and customer satisfaction.",
    images: ['/placeholder.svg?height=400&width=600', '/placeholder.svg?height=400&width=600']
  },
  {
    id: 'hybrid',
    title: 'Hybrid Solutions',
    client: 'Ad Factor',
    location: 'Kamala Mills, Mumbai',
    industry: 'Commercial',
    overview:
      "Ad Factor, a commercial client located at Kamala Mills, Mumbai, required Midway Comforts' expertise for designing and installing a hybrid air conditioning system. The site featured extensive running hours, making energy efficiency a primary concern. The project needed to be completed within a limited budget, necessitating innovative thinking and precise execution.",
    problem:
      'The project began with a bare-shell premises where everything needed to be constructed from scratch. However, budget constraints posed a significant challenge. Delivering the desired level of cooling efficiency while adhering to cost limitations required a customized approach.',
    assessment:
      'To achieve a balance between cost-effectiveness and efficiency, we conducted an assessment and identified the following requirements: The need for underdeck insulation to reduce heat conduction from the cement sheet roof, and incorporating a combination of VRF systems for cabins and DX systems for open areas to optimize both energy consumption and budget.',
    solution: [
      'Implement high-efficiency VRF and DX systems',
      'Install an exhaust fan to remove excess heat between the cement sheet and the false ceiling',
      'Strategic insulation to minimize heat conduction'
    ],
    implementation:
      "Efficient installation of VRF and DX systems as per the client's specifications, installation of an exhaust fan to dissipate heat trapped between the roof and false ceiling, and strategic insulation to minimize heat conduction and reduce overall power consumption.",
    results: 'The project was completed successfully within the budgetary constraints.',
    benefits:
      'Reduced heat load and improved cooling efficiency, lowered power consumption, resulting in long-term cost savings, and enhanced comfort levels throughout the premises.',
    conclusion:
      "The Hybrid Solutions project for Ad Factor demonstrates Midway Comforts' ability to provide tailored solutions that meet client requirements without compromising quality. By combining innovative approaches with efficient execution, we ensured a highly satisfactory outcome for the client.",
    images: ['/placeholder.svg?height=400&width=600', '/placeholder.svg?height=400&width=600']
  },
  {
    id: 'billing',
    title: 'Billing Reduced',
    client: 'Yashwant Rao Chavan Pratishthan',
    location: 'Nariman Point, Mumbai',
    industry: 'Commercial',
    overview:
      "Yashwant Rao Chavan Pratishthan, a prominent commercial and multipurpose building located at Nariman Point, Mumbai, sought Midway Comforts' assistance to tackle their high power consumption problem. The existing air conditioning systems were outdated, having been installed over 15 years ago, and were causing electricity bills to skyrocket to approximately ₹9 lakhs per month.",
    problem:
      'The building operated using old DX systems that were highly inefficient in terms of energy consumption. The primary challenges included: Installing new, energy-efficient VRF systems in an operational premises without interrupting building activities, and dealing with external factors such as attacks from eagles and birds during the installation process, which required careful planning and execution.',
    assessment:
      'We began by conducting a thorough heat load calculation to determine the appropriate system requirements.',
    solution: [
      'Implementation of energy-efficient VRF systems to replace the outdated DX systems, enhancing efficiency and reducing power consumption significantly.',
      'Replacement of existing glass with toughened double-glazed glass to reduce heat gain, improve cooling efficiency, and minimize sound transmission.'
    ],
    implementation:
      'The entire process was meticulously planned and executed. To ensure maximum performance, Building Management Systems (BMS) were installed for optimal control and monitoring of the systems. Care was taken to conduct all installations while the premises remained fully operational, demonstrating our expertise in handling complex projects without disrupting client operations.',
    results:
      'The successful installation of new VRF systems resulted in a 25% reduction in electricity bills, providing substantial cost savings for the client.',
    benefits:
      "Additionally, the use of double-glazed glass effectively reduced sound levels, further enhancing the client's experience.",
    conclusion:
      "Midway Comforts' ability to deliver energy-efficient solutions while ensuring uninterrupted operations proved essential in this project. Our expertise in implementing cutting-edge technology continues to provide unmatched value to our clients.",
    images: ['/placeholder.svg?height=400&width=600', '/placeholder.svg?height=400&width=600']
  }
];

// Section component for case study details
const CaseStudySection = ({ title, content, className = '' }) => {
  if (!content) return null;

  return (
    <div className={cn('mb-4', className)}>
      <h4 className="text-lg font-semibold text-primary mb-2">{title}</h4>
      {Array.isArray(content) ? (
        <ul className="list-disc pl-5 space-y-1">
          {content.map((item, index) => (
            <li key={index} className="text-foreground">
              {item}
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-foreground">{content}</p>
      )}
    </div>
  );
};

// Case study card component
const CaseStudyCard = ({ study, isActive, onClick }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className={cn(
        'rounded-lg overflow-hidden shadow-lg transition-all duration-300 cursor-pointer border-2',
        isActive ? 'border-yellow-400 bg-blue-950' : 'border-transparent bg-blue-900 hover:border-yellow-300'
      )}
      onClick={onClick}
    >
      <div className="p-5">
        <div className="flex items-center mb-2">
          <Building className="h-6 w-6 text-yellow-400 mr-2" />
          <h3 className="text-xl font-bold text-white">{study.title}</h3>
        </div>
        {study.subtitle && <p className="text-yellow-400 font-medium mb-2">{study.subtitle}</p>}
        <div className="flex flex-wrap gap-2 mb-3">
          <Badge className="bg-yellow-400 text-blue-950 hover:bg-yellow-500">{study.industry}</Badge>
          <Badge className="bg-blue-700 text-white hover:bg-blue-800">{study.location}</Badge>
        </div>
        <p className="text-blue-100 line-clamp-3">{study.overview}</p>
        <div className="mt-4 flex justify-between items-center">
          <span className="text-sm text-blue-200">Client: {study.client}</span>
          <Button
            variant="outline"
            size="sm"
            className="text-yellow-400 hover:text-yellow-300 hover:bg-blue-800"
            onClick={(e) => {
              e.stopPropagation();
              onClick();
            }}
          >
            View Details
          </Button>
        </div>
      </div>
    </motion.div>
  );
};

// Modal component for case study details
const CaseStudyModal = ({ study, isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4 overflow-y-auto"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        transition={{ type: 'spring', damping: 20 }}
        className="bg-white rounded-lg shadow-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="sticky top-0 bg-white z-10 flex justify-between items-center p-4 border-b">
          <h2 className="text-2xl font-bold text-blue-950">{study.title}</h2>
          <Button variant="ghost" size="icon" onClick={onClose} className="rounded-full">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-x"
            >
              <path d="M18 6 6 18" />
              <path d="m6 6 12 12" />
            </svg>
            <span className="sr-only">Close</span>
          </Button>
        </div>

        <div className="p-6">
          <div className="flex justify-between items-start mb-6">
            <div>
              {study.subtitle && <p className="text-yellow-600 font-medium">{study.subtitle}</p>}
              <p className="text-gray-600 mt-1">
                {study.client} | {study.location}
              </p>
            </div>
            <Badge className="bg-yellow-400 text-blue-950 hover:bg-yellow-500 text-sm">{study.industry}</Badge>
          </div>

          {/* Image gallery */}
          {study.images && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              {study.images.map((image, index) => (
                <div key={index} className="rounded-lg overflow-hidden border border-gray-200">
                  <img
                    src={image || '/placeholder.svg'}
                    alt={`${study.title} - Image ${index + 1}`}
                    className="w-full h-64 object-contain"
                  />
                </div>
              ))}
            </div>
          )}

          <div className="space-y-6">
            <div className="bg-blue-50 p-4 rounded-lg">
              <h3 className="text-xl font-semibold text-blue-900 mb-3">Client Overview</h3>
              <p className="text-gray-700">{study.overview}</p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-blue-900 mb-3">Initial Situation & Challenges</h3>
              <p className="text-gray-700">{study.problem}</p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-blue-900 mb-3">Assessment & Proposed Solution</h3>
              <CaseStudySection title="Assessment" content={study.assessment} className="mb-4" />
              <CaseStudySection title="Proposed Solution" content={study.solution} />
            </div>

            <div>
              <h3 className="text-xl font-semibold text-blue-900 mb-3">Implementation Process</h3>
              <p className="text-gray-700">{study.implementation}</p>
            </div>

            {study.safetyProtocols && (
              <div>
                <h3 className="text-xl font-semibold text-blue-900 mb-3">Safety Protocols</h3>
                <CaseStudySection content={study.safetyProtocols} />
              </div>
            )}

            <div>
              <h3 className="text-xl font-semibold text-blue-900 mb-3">Results & Benefits</h3>
              <CaseStudySection title="Results" content={study.results} className="mb-4" />
              <CaseStudySection title="Benefits" content={study.benefits} />
            </div>

            <div>
              <h3 className="text-xl font-semibold text-blue-900 mb-3">Conclusion</h3>
              <p className="text-gray-700">{study.conclusion}</p>
            </div>
          </div>

          <div className="mt-6 flex justify-end">
            <Button
              className="bg-blue-900 hover:bg-blue-800 text-white"
              onClick={() => window.open('https://wa.me/9930267231', '_blank')}
            >
              Contact Us <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

// Filter options for case studies
const filterOptions = [
  { value: 'all', label: 'All Case Studies' },
  { value: 'Commercial', label: 'Commercial' },
  { value: 'Residential', label: 'Residential' },
  { value: 'Retail', label: 'Retail' },
  { value: 'Hospitality', label: 'Hospitality' },
  { value: 'Corporate', label: 'Corporate' }
];

// Main component
export default function KeyProjects() {
  const [activeStudy, setActiveStudy] = useState(null);
  const [filter, setFilter] = useState('all');
  const [isModalOpen, setIsModalOpen] = useState(false);

  const filteredStudies = filter === 'all' ? caseStudies : caseStudies.filter((study) => study.industry === filter);

  const handleOpenModal = (study) => {
    setActiveStudy(study);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="mx-auto py-12 px-4">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-8"
      >
        <h1 className="text-4xl font-bold text-blue-950 mb-4">Our Success Stories</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Explore our case studies to see how we've helped clients overcome challenges and achieve exceptional results.
        </p>
      </motion.div>

      {/* Fixed position tabs container with shadow for better visibility */}
      <div className="sticky top-0 z-30 mb-8">
        <Tabs defaultValue="all" onValueChange={setFilter} className="w-full">
          <TabsList className="bg-blue-100 p-2 w-full h-auto flex flex-wrap justify-center gap-3 md:gap-2">
            {filterOptions.map((option) => (
              <TabsTrigger
                key={option.value}
                value={option.value}
                className="data-[state=active]:bg-blue-900 data-[state=active]:text-white px-3 py-2 flex-grow md:flex-grow-0 text-sm md:text-base"
              >
                {option.label}
              </TabsTrigger>
            ))}
          </TabsList>
        </Tabs>
      </div>

      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        {filteredStudies.map((study) => (
          <CaseStudyCard key={study.id} study={study} isActive={false} onClick={() => handleOpenModal(study)} />
        ))}
      </div>

      {filteredStudies.length === 0 && (
        <div className="text-center py-16">
          <p className="text-xl text-gray-500">No case studies found for this filter.</p>
          <Button variant="outline" className="mt-4" onClick={() => setFilter('all')}>
            View all case studies
          </Button>
        </div>
      )}

      <AnimatePresence>
        {activeStudy && <CaseStudyModal study={activeStudy} isOpen={isModalOpen} onClose={handleCloseModal} />}
      </AnimatePresence>
    </div>
  );
}

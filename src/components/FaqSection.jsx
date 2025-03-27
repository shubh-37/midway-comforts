import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';

const faqItems = [
  {
    id: 'faq-1',
    question: 'How often should I service my HVAC system?',
    answer:
      'For optimal performance and longevity, we recommend servicing your HVAC system twice a year—once before the cooling season and once before the heating season. Regular maintenance helps prevent unexpected breakdowns, ensures efficient operation, and can extend the lifespan of your equipment by up to 5-10 years.'
  },
  {
    id: 'faq-2',
    question: "How do I know when it's time to replace my HVAC system?",
    answer:
      "Consider replacing your HVAC system if it's more than 15 years old, requires frequent repairs, causes significant increases in energy bills, or struggles to maintain comfortable temperatures. Modern systems are up to 40% more energy-efficient than older models, which can lead to substantial savings on utility bills and improved comfort."
  },
  {
    id: 'faq-3',
    question: 'What size HVAC system do I need for my house?',
    answer:
      "Determining the right size HVAC system depends on multiple factors including your home's square footage, insulation quality, window efficiency, ceiling height, and local climate conditions. An oversized system will cycle too frequently and waste energy, while an undersized one will run constantly and struggle to maintain comfort. Our technicians perform a detailed load calculation to recommend the optimal system size for your specific needs."
  },
  {
    id: 'faq-4',
    question: 'How do I improve my indoor air quality?',
    answer:
      'To improve indoor air quality, consider installing air purifiers, HEPA filters, UV germicidal lights, or whole-home ventilation systems. Regular HVAC maintenance, including duct cleaning and filter replacement, is also essential. Our comprehensive indoor air quality assessment can identify specific issues in your home and recommend targeted solutions to address allergens, pollutants, and humidity concerns.'
  },
  {
    id: 'faq-5',
    question: 'Are there any tax credits or rebates available for HVAC upgrades?',
    answer:
      'Yes, various federal, state, and local incentives are often available for energy-efficient HVAC upgrades. These may include tax credits, utility rebates, and manufacturer rebates. The specific programs change periodically, but our team stays up-to-date on available incentives and can help you maximize your savings. Energy-efficient systems that qualify for these incentives typically provide significant long-term energy savings in addition to the upfront rebates.'
  },
  {
    id: 'faq-6',
    question: 'What maintenance can I do myself vs. calling a professional?',
    answer:
      'Homeowners can perform basic maintenance like regularly changing air filters (every 1-3 months), keeping outdoor units clear of debris, ensuring indoor vents are unobstructed, and cleaning visible parts of the system. However, professional maintenance should be scheduled twice yearly for tasks requiring specialized tools and expertise, such as checking refrigerant levels, inspecting electrical components, cleaning coils, and calibrating the system for optimal performance.'
  },
  {
    id: 'faq-7',
    question: 'What warranties do you offer for new installations?',
    answer:
      "We provide comprehensive warranty coverage for all new installations. This typically includes the manufacturer's warranty on equipment parts (usually 5-10 years) and our own labor warranty on the installation (typically 1-2 years). Extended warranty options are also available for additional peace of mind. Regular maintenance is required to keep these warranties valid, and our maintenance plans are designed to ensure your system remains under warranty protection."
  }
];

export default function FaqSection({
  heading = 'Frequently asked questions',
  description = "Find answers to common questions about our products. Can't find what you're looking for? Contact our support team.",
  items = faqItems,
  supportHeading = 'Need more support?',
  supportDescription = 'Our dedicated support team is here to help you with any questions or concerns. Get in touch with us for personalized assistance.',
  supportButtonText = 'Contact Support',
  supportButtonUrl = 'https://mail.google.com/mail/?view=cm&fs=1&to=midwaycomforts@gmail.com&su=Support Request'
}) {
  return (
    <section className="py-16 px-5 mx-auto">
      <div className="space-y-16">
        <div className="mx-auto flex max-w-3xl flex-col text-left md:text-center">
          <h2 className="mb-3 text-2xl font-semibold md:mb-4 lg:mb-6 lg:text-4xl">{heading}</h2>
          <p className="text-muted-foreground">{description}</p>
        </div>
        <Accordion type="single" collapsible className="mx-auto w-full lg:max-w-3xl">
          {items.map((item) => (
            <AccordionItem key={item.id} value={item.id}>
              <AccordionTrigger className="transition-opacity duration-200 hover:no-underline hover:opacity-60">
                <div className="font-medium sm:py-1 lg:py-2 lg:text-lg">{item.question}</div>
              </AccordionTrigger>
              <AccordionContent className="sm:mb-1 lg:mb-2">
                <div className="text-muted-foreground lg:text-lg">{item.answer}</div>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
        <div className="mx-auto flex max-w-4xl flex-col items-center rounded-lg bg-card p-2 text-center md:rounded-xl md:p-4 lg:p-6">
          <div className="relative">
            <Avatar className="absolute mb-4 size-16 origin-bottom -translate-x-[60%] scale-[80%] border md:mb-5">
              <AvatarImage src="https://shadcnblocks.com/images/block/avatar-2.webp" />
              <AvatarFallback>SU</AvatarFallback>
            </Avatar>
            <Avatar className="absolute mb-4 size-16 origin-bottom translate-x-[60%] scale-[80%] border md:mb-5">
              <AvatarImage src="https://shadcnblocks.com/images/block/avatar-3.webp" />
              <AvatarFallback>SU</AvatarFallback>
            </Avatar>
            <Avatar className="mb-4 size-16 border md:mb-5">
              <AvatarImage src="https://shadcnblocks.com/images/block/avatar-1.webp" />
              <AvatarFallback>SU</AvatarFallback>
            </Avatar>
          </div>
          <h3 className="mb-2 max-w-3xl font-semibold lg:text-lg">{supportHeading}</h3>
          <p className="mb-8 max-w-3xl text-muted-foreground lg:text-lg">{supportDescription}</p>
          <div className="flex w-full flex-col justify-center gap-2 sm:flex-row">
            <Button className="text-white bg-blue-800 hover:bg-white hover:text-blue-700" asChild>
              <a href={supportButtonUrl} target="_blank" rel="noopener noreferrer">
                {supportButtonText}
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

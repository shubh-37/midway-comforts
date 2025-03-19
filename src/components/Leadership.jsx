import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { Card, CardContent } from '@/components/ui/card';
import maleAvatar from '@/assets/male.svg';
import femaleAvatar from '@/assets/female.svg';
import manish from '@/assets/manish.jpeg';
import aashish from '@/assets/aashish.jpeg';
import sattar from '@/assets/sattar.jpeg';
import { Button } from './ui/moving-border';

export default function LeadershipCarousel() {
  const teamMembers = [
    {
      id: 1,
      name: 'Mr. Manish Pandey',
      title: 'Director and Sales Head',
      image: manish
    },
    {
      id: 2,
      name: 'Mr. Sattar Khokhar',
      title: 'Director',
      image: sattar
    },
    {
      id: 3,
      name: 'Mr Tabjrej Khan',
      title: 'Project Sales',
      image: maleAvatar
    },
    {
      id: 4,
      name: 'Mrs Nilisha Pathare',
      title: 'Billing',
      image: femaleAvatar
    },
    {
      id: 5,
      name: 'Mr Raja Ram Yadav',
      title: 'Accounts',
      image: maleAvatar
    },
    {
      id: 6,
      name: 'Mr Ashish Pandya',
      title: 'Accounts and HR',
      image: aashish
    },
    {
      id: 7,
      name: 'Mr Rajendra Dalave',
      title: 'Design',
      image: maleAvatar
    },
    {
      id: 8,
      name: 'Mr Santosh Patil ',
      title: 'Service',
      image: maleAvatar
    },
    {
      id: 9,
      name: 'Mr Shabbir Khan',
      title: 'Projects Execution',
      image: maleAvatar
    },
    {
      id: 10,
      name: 'Mr Rajiv Sinha',
      title: 'Procurement',
      image: maleAvatar
    }
  ];

  return (
    <section className="py-10">
      <div className="px-4 mx-auto max-w-7xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight mb-4">Meet Our Leadership Team</h2>
          <p className="text-muted-foreground max-w-3xl mx-auto">
            Our success over the past 26 years has been driven by our dedicated team of HVAC professionals who bring
            decades of combined experience and passion to every project.
          </p>
        </div>
        <div className="px-4">
          <Carousel className="w-full">
            <CarouselContent>
              {teamMembers.map((member) => (
                <CarouselItem key={member.id} className="md:basis-1/2 lg:basis-1/4">
                  <Button
                    borderRadius="1.75rem"
                    className="bg-white dark:bg-slate-900 text-black dark:text-white border-neutral-200 dark:border-slate-800"
                  >
                    <Card className="h-full border-none shadow-sm hover:shadow-md transition-shadow duration-300">
                      <CardContent className="p-6 text-center">
                        <div className="flex justify-center mb-4">
                          <div className="relative w-24 h-24 rounded-full overflow-hidden bg-muted">
                            <img
                              src={member.image || maleAvatar}
                              alt={member.name}
                              className="w-full h-full object-contain"
                            />
                          </div>
                        </div>
                        <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                        <p className="text-primary font-medium mb-3">{member.title}</p>
                        {member.description && <p className="text-muted-foreground text-sm">{member.description}</p>}
                      </CardContent>
                    </Card>
                  </Button>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </div>
    </section>
  );
}

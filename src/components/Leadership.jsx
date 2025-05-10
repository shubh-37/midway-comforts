import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { Card, CardContent } from '@/components/ui/card';
import maleAvatar from '@/assets/male.svg';
import femaleAvatar from '@/assets/female.svg';
import manish from '@/assets/manish.jpeg';
import aashish from '@/assets/aashish.jpeg';
import sattar from '@/assets/sattar.jpeg';
import rajeev from '@/assets/rajeev.jpeg';
import tabrej from '@/assets/tabrej.jpeg';
import santosh from '@/assets/santosh.jpeg';
import rajaram from '@/assets/rajaram.jpeg';
import shabbir from '@/assets/shabbir.jpeg';
import nilisha from '@/assets/nilisha.jpeg';
import bonny from '@/assets/bonny.jpeg';
import { Button } from './ui/moving-border';
import { useEffect, useState } from 'react';

export default function LeadershipCarousel() {
  const [api, setApi] = useState(null);
  const [current, setCurrent] = useState(0);
  useEffect(() => {
    if (!api) return;

    const onChange = (status) => {
      setCurrent(status.selectedIndex);
    };

    api.on('select', onChange);
    return () => api.off('select', onChange);
  }, [api]);

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
      name: 'Mr. Tabrez Khan',
      title: 'Project Sales Head',
      image: tabrej
    },
    {
      id: 9,
      name: 'Mr. Shabbir Khan',
      title: 'Projects Execution Head',
      image: shabbir
    },
    {
      id: 7,
      name: 'Mr. Rajendra Dalave',
      title: 'Design Head',
      image: maleAvatar
    },
    {
      id: 8,
      name: 'Mr. Santosh Patil ',
      title: 'Service Head',
      image: santosh
    },
    {
      id: 10,
      name: 'Mr. Rajeev Sinha',
      title: 'Procurement Head',
      image: rajeev
    },
    {
      id: 11,
      name: 'Mr. Bonny Fernandes',
      title: 'Service Coordinator Head',
      image: bonny
    },
    {
      id: 4,
      name: 'Mrs. Nilisha Pathare',
      title: 'Projects Billing Head',
      image: nilisha
    },
    {
      id: 5,
      name: 'Mr. Raja Ram',
      title: 'Accounts Head',
      image: rajaram
    },
    {
      id: 6,
      name: 'Mr. Ashish Pandya',
      title: 'HR Head',
      image: aashish
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
        <div className="px-4 relative">
          <Carousel
            className="w-full"
            setApi={setApi}
            opts={{
              align: 'start',
              loop: true
            }}
          >
            <CarouselContent>
              {teamMembers.map((member) => (
                <CarouselItem key={member.id} className="md:basis-1/3 lg:basis-1/4 pl-4">
                  <div className="h-full flex items-center justify-center">
                    <Button
                      borderRadius="1.75rem"
                      className="bg-white dark:bg-slate-900 text-black dark:text-white border-neutral-200 dark:border-slate-800 w-[250px]"
                    >
                      <Card className="w-[250px] h-[250px] border-none shadow-sm hover:shadow-md transition-shadow duration-300">
                        <CardContent className="p-6 text-center flex flex-col justify-center h-full">
                          <div className="flex justify-center mb-4">
                            <div className="relative w-28 h-28 rounded-full overflow-hidden bg-muted">
                              <img
                                src={member.image || maleAvatar}
                                alt={member.name}
                                className="w-full h-full object-contain"
                              />
                            </div>
                          </div>
                          <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                          <p className="text-primary font-medium">{member.title}</p>
                        </CardContent>
                      </Card>
                    </Button>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2" />
            <CarouselNext className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2" />
          </Carousel>

          {/* Optional: Small indicators at the bottom */}
          <div className="flex justify-center gap-1 mt-4">
            {teamMembers.map((_, index) => (
              <span
                key={index}
                className={`block h-2 w-2 rounded-full transition-colors ${
                  current === index ? 'bg-primary' : 'bg-muted'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

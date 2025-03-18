import { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { cn } from '@/lib/utils';
import maleAvatar from '@/assets/male.svg';
import femaleAvatar from '@/assets/female.svg';

export default function LeadershipCarousel() {
  const teamMembers = [
    {
      id: 1,
      name: 'Robert Johnson',
      title: 'Founder & CEO',
      description: 'Founded the company in 1997 with a vision to deliver exceptional HVAC services to the community.',
      image: maleAvatar
    },
    {
      id: 2,
      name: 'Jennifer Martinez',
      title: 'Operations Director',
      description: '15+ years experience managing large-scale HVAC projects and ensuring operational excellence.',
      image: femaleAvatar
    },
    {
      id: 3,
      name: 'Michael Chen',
      title: 'Technical Director',
      description: 'Master technician with specialized expertise in advanced HVAC systems and smart home integration.',
      image: maleAvatar
    },
    {
      id: 4,
      name: 'Sarah Williams',
      title: 'Customer Relations',
      description: 'Dedicated to ensuring every client receives personalized service and complete satisfaction.',
      image: femaleAvatar
    },
    {
      id: 5,
      name: 'David Thompson',
      title: 'Lead Engineer',
      description:
        'Innovative problem-solver with 12+ years designing efficient HVAC solutions for commercial buildings.',
      image: maleAvatar
    },
    {
      id: 6,
      name: 'Lisa Rodriguez',
      title: 'Training Manager',
      description: 'Develops comprehensive training programs to keep our team at the cutting edge of HVAC technology.',
      image: femaleAvatar
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleCount, setVisibleCount] = useState(4);
  const containerRef = useRef(null);

  useEffect(() => {
    const updateVisibleCount = () => {
      if (window.innerWidth >= 1280) {
        setVisibleCount(4);
      } else if (window.innerWidth >= 1024) {
        setVisibleCount(3);
      } else if (window.innerWidth >= 768) {
        setVisibleCount(2);
      } else {
        setVisibleCount(1);
      }
    };

    updateVisibleCount();
    window.addEventListener('resize', updateVisibleCount);
    return () => window.removeEventListener('resize', updateVisibleCount);
  }, []);

  const maxIndex = Math.max(0, teamMembers.length - visibleCount);

  const handlePrev = () => {
    setCurrentIndex((prev) => Math.max(0, prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => Math.min(maxIndex, prev + 1));
  };

  return (
    <section className="py-16 bg-background">
      <div className="px-2 mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight mb-4">Meet Our Leadership Team</h2>
          <p className="text-muted-foreground max-w-3xl mx-auto">
            Our success over the past 26 years has been driven by our dedicated team of HVAC professionals who bring
            decades of combined experience and passion to every project.
          </p>
        </div>

        <div className="relative" ref={containerRef}>
          <div className="overflow-hidden px-4">
            <motion.div
              className="flex gap-6"
              initial={false}
              animate={{
                x: `calc(-${currentIndex * 100}% / ${visibleCount})`
              }}
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            >
              {teamMembers.map((member) => (
                <motion.div
                  key={member.id}
                  className={cn(
                    'flex-shrink-0',
                    visibleCount === 1
                      ? 'w-full'
                      : visibleCount === 2
                        ? 'w-1/2'
                        : visibleCount === 3
                          ? 'w-1/3'
                          : 'w-1/4'
                  )}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                >
                  <Card className="h-full border-none shadow-sm hover:shadow-md transition-shadow duration-300">
                    <CardContent className="p-6 text-center">
                      <div className="flex justify-center mb-4">
                        <div className="relative w-24 h-24 rounded-full overflow-hidden bg-muted">
                          <img
                            src={member.image || '/placeholder.svg'}
                            alt={member.name}
                            fill
                            className="object-cover"
                          />
                        </div>
                      </div>
                      <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                      <p className="text-primary font-medium mb-3">{member.title}</p>
                      <p className="text-muted-foreground text-sm">{member.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </div>

          <div className="flex justify-center mt-8 gap-2">
            <Button
              variant="outline"
              size="icon"
              onClick={handlePrev}
              disabled={currentIndex === 0}
              className="rounded-full"
              aria-label="Previous team members"
            >
              <ChevronLeft className="h-5 w-5" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              onClick={handleNext}
              disabled={currentIndex >= maxIndex}
              className="rounded-full"
              aria-label="Next team members"
            >
              <ChevronRight className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

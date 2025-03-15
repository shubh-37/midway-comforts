import { useEffect, useRef } from 'react';
import {
  Store,
  Building,
  Briefcase,
  Award,
  Leaf,
  Building2,
  Globe,
  ShoppingCart,
  Hotel,
  Shield,
  HeartHandshake
} from 'lucide-react';

export default function CompanyTimeline() {
  const timelineRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -100px 0px' }
    );

    const elements = document.querySelectorAll('.milestone-card');
    elements.forEach((el) => observer.observe(el));

    return () => {
      elements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  const milestones = [
    {
      year: '1999',
      title: 'The Beginning',
      description: (
        <>
          Founded Midway Comforts with the launch of our first showroom, <strong>"Comfort Point"</strong> in Prabhadevi,
          focusing on split and window ACs.
        </>
      ),
      icon: <Store className="h-8 w-8" />,
      color: 'bg-amber-500'
    },
    {
      year: '2002',
      title: 'Expanding Horizons',
      description:
        'Started catering to corporate clients, including educational institutions, banks, and developers, building long-term partnerships.',
      icon: <Building className="h-8 w-8" />,
      color: 'bg-blue-500'
    },
    {
      year: '2007',
      title: 'Project-Focused Approach',
      description: (
        <>
          Shifted our entire focus to <strong>large-scale HVAC projects</strong> and operations, refining our expertise
          in <strong>end-to-end solutions</strong>.
        </>
      ),
      icon: <Briefcase className="h-8 w-8" />,
      color: 'bg-emerald-500'
    },
    {
      year: '2009',
      title: 'Golden Era of Innovation',
      description:
        'Entered the VRF, chiller, and ventilation space, winning multiple industry awards between 2009 and 2014.',
      icon: <Award className="h-8 w-8" />,
      color: 'bg-purple-500'
    },
    {
      year: '2014',
      title: 'Sustainable Solutions',
      description:
        'Began focusing on energy-efficient systems and enhancing indoor air quality, contributing to a healthier environment.',
      icon: <Leaf className="h-8 w-8" />,
      color: 'bg-green-500'
    },
    {
      year: '2015',
      title: 'Business Expansion',
      description: (
        <>
          Took over all Mumbai showroom projects for major brands like{' '}
          <strong>Tanishq, Anytime Fitness, Talwalkars, HDFC Bank, and more.</strong> Diversified into the watch retail
          industry.
        </>
      ),
      icon: <Building2 className="h-8 w-8" />,
      color: 'bg-indigo-500'
    },
    {
      year: '2016',
      title: 'Nationwide Reach',
      description: (
        <>
          Secured <strong> All-India Distributorship </strong>for watches, expanding our retail presence across the
          country.
        </>
      ),
      icon: <Globe className="h-8 w-8" />,
      color: 'bg-cyan-500'
    },
    {
      year: '2017',
      title: 'Online Evolution',
      description: (
        <>
          Ventured into the <strong>e-commerce space</strong>, bringing our products and services to digital platforms.
        </>
      ),
      icon: <ShoppingCart className="h-8 w-8" />,
      color: 'bg-rose-500'
    },
    {
      year: '2018',
      title: 'Going Global',
      description: (
        <>
          Executed our first overseas HVAC project at <strong>Sheraton Colombo, Sri Lanka</strong>, marking our{' '}
          <strong>international presence</strong>.
        </>
      ),
      icon: <Hotel className="h-8 w-8" />,
      color: 'bg-orange-500'
    },
    {
      year: '2020',
      title: 'Unwavering Commitment',
      description: (
        <>
          Supported clients throughout the <strong>COVID-19 pandemic</strong>, ensuring{' '}
          <strong>continuous AC solutions</strong> without interruptions.
        </>
      ),
      icon: <Shield className="h-8 w-8" />,
      color: 'bg-red-500'
    },
    {
      year: '2025',
      title: 'Built to Last',
      description: (
        <>
          Proud to have <strong>retained every single client</strong> to date — a testament to our{' '}
          <strong>unwavering dedication</strong> and trust-driven relationships.
        </>
      ),
      icon: <HeartHandshake className="h-8 w-8" />,
      color: 'bg-teal-500'
    }
  ];

  return (
    <div className="relative bg-gradient-to-b from-background to-muted/30 py-10 overflow-x-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -left-16 top-1/4 h-64 w-64 rounded-full bg-primary/5 blur-3xl"></div>
        <div className="absolute -right-16 top-3/4 h-64 w-64 rounded-full bg-blue-500/5 blur-3xl"></div>
      </div>

      <div className="container relative mx-auto px-4">
        <div className="mb-16 text-center">
          <h1 className="mb-3 text-2xl text-gray-800 font-bold tracking-tight md:text-4xl">Our Journey</h1>
          <p className="mx-auto max-w-2xl text-xl text-muted-foreground">Milestones of Midway Comforts</p>
        </div>

        <div ref={timelineRef} className="relative">
          {/* Timeline center line - adjusted to be visible */}
          <div className="absolute hidden md:block left-1/2 top-0 h-full w-1 -translate-x-1/2 bg-gray-300"></div>

          <style jsx>{`
            .milestone-card {
              opacity: 0;
              transition:
                opacity 1s ease-out,
                transform 0.5s ease-out;
            }
            .milestone-card.visible {
              opacity: 1;
              transform: translateX(0) !important;
            }
          `}</style>

          {milestones.map((milestone, index) => (
            <div
              key={milestone.year}
              className={`milestone-card relative mb-24 ${
                index % 2 === 0 ? 'md:ml-auto md:mr-[52%] md:pr-12 md:text-right' : 'md:ml-[52%] md:pl-12'
              }`}
              style={{
                transitionDelay: `${index * 150}ms`,
                transform: index % 2 === 0 ? 'translateX(-50px)' : 'translateX(50px)'
              }}
            >
              <div
                className={`relative mt-20 overflow-hidden rounded-xl border bg-card p-6 shadow-lg transition-all md:mt-0 md:w-[90%] ${
                  index % 2 === 0 ? 'md:ml-auto' : ''
                }`}
              >
                <div className={`absolute -right-4 -top-4 h-16 w-16 rounded-full opacity-20 ${milestone.color}`}></div>

                <div className="flex flex-col items-center gap-4 md:flex-row">
                  <div
                    className={`flex h-16 w-16 flex-shrink-0 items-center justify-center rounded-full text-white ${milestone.color}`}
                  >
                    {milestone.icon}
                  </div>

                  <div className="flex-1">
                    <h3 className="mb-2 text-xl font-bold">{milestone.year}</h3>
                    <h4 className="mb-2 text-xl">{milestone.title}</h4>
                    <p className="text-muted-foreground">{milestone.description}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

import React from 'react';
import { useId } from 'react';
import { Building2, Home, Building, ShoppingBag, Globe, DollarSign } from 'lucide-react';

export function IndustriesSection() {
  return (
    <div className="max-w-7xl mx-auto">
      <h2 className="text-3xl font-bold text-center mb-12">Industries We Serve</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-10 md:gap-6">
        {industries.map((industry) => (
          <div
            key={industry.title}
            className="relative bg-gradient-to-b dark:from-neutral-900 from-neutral-100 dark:to-neutral-950 to-white p-6 rounded-3xl overflow-hidden"
          >
            <Grid size={20} />
            <div className="relative z-20 p-2 rounded-lg bg-blue-50 inline-flex mb-4">
              <industry.icon className="w-6 h-6 text-blue-500" />
            </div>
            <p className="text-base font-bold text-neutral-800 dark:text-white relative z-20">{industry.title}</p>
            <p className="text-neutral-600 dark:text-neutral-400 mt-4 text-base font-normal relative z-20">
              {industry.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

const industries = [
  {
    icon: Home,
    title: 'Residential & Commercial Spaces',
    description: 'Energy-efficient HVAC systems for homes and commercial spaces that ensure comfort and savings.'
  },
  {
    icon: Globe,
    title: 'Hospitality & Healthcare',
    description:
      'Specialized HVAC systems for hotels, restaurants, and medical facilities that prioritize guest comfort.'
  },
  {
    icon: ShoppingBag,
    title: 'Retail & Showrooms',
    description: 'HVAC systems designed to create comfortable shopping environments that enhance customer experience.'
  },
  {
    icon: DollarSign,
    title: 'Banking & Finance',
    description:
      'HVAC systems for banks and financial institutions that ensure optimal indoor air quality and comfort for employees.'
  },
  {
    icon: Building2,
    title: 'Educational Institutions',
    description: 'Custom HVAC solutions for schools, colleges, and universities that prioritize student comfort.'
  },
  {
    icon: Building,
    title: 'IT & Corporate Offices',
    description: 'Energy-efficient HVAC systems for IT and corporate offices that ensure optimal indoor air quality.'
  }
];

export const Grid = ({ pattern, size }) => {
  const p = pattern ?? [
    [Math.floor(Math.random() * 4) + 7, Math.floor(Math.random() * 6) + 1],
    [Math.floor(Math.random() * 4) + 7, Math.floor(Math.random() * 6) + 1],
    [Math.floor(Math.random() * 4) + 7, Math.floor(Math.random() * 6) + 1],
    [Math.floor(Math.random() * 4) + 7, Math.floor(Math.random() * 6) + 1],
    [Math.floor(Math.random() * 4) + 7, Math.floor(Math.random() * 6) + 1]
  ];
  return (
    <div className="pointer-events-none absolute left-1/2 top-0 -ml-20 -mt-2 h-full w-full [mask-image:linear-gradient(white,transparent)]">
      <div className="absolute inset-0 bg-gradient-to-r [mask-image:radial-gradient(farthest-side_at_top,white,transparent)] dark:from-zinc-900/30 from-zinc-100/30 to-zinc-300/30 dark:to-zinc-900/30 opacity-100">
        <GridPattern
          width={size ?? 20}
          height={size ?? 20}
          x="-12"
          y="4"
          squares={p}
          className="absolute inset-0 h-full w-full mix-blend-overlay dark:fill-white/10 dark:stroke-white/10 stroke-black/10 fill-black/10"
        />
      </div>
    </div>
  );
};

export function GridPattern({ width, height, x, y, squares, ...props }) {
  const patternId = useId();

  return (
    <svg aria-hidden="true" {...props}>
      <defs>
        <pattern id={patternId} width={width} height={height} patternUnits="userSpaceOnUse" x={x} y={y}>
          <path d={`M.5 ${height}V.5H${width}`} fill="none" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" strokeWidth={0} fill={`url(#${patternId})`} />
      {squares && (
        <svg x={x} y={y} className="overflow-visible">
          {squares.map(([x, y]) => (
            <rect
              strokeWidth="0"
              key={`${x}-${y}`}
              width={width + 1}
              height={height + 1}
              x={x * width}
              y={y * height}
            />
          ))}
        </svg>
      )}
    </svg>
  );
}

export default IndustriesSection;

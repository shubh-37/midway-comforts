import { useRef } from 'react';
import { motion } from 'framer-motion';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import tosh2006 from '@/assets/tosh-2006.jpeg';
import ductFree from '@/assets/carrier-wccd.jpeg';
import tosh2008 from '@/assets/tosh2008.jpeg';
import tosh2009 from '@/assets/tosh-2009.jpeg';
import toshNat from '@/assets/tosh-air-2009.jpeg';
import tosh2011 from '@/assets/tosh-high-2011.jpeg';
import car2011 from '@/assets/carrier-2011.jpeg';
import toshHigh2011 from '@/assets/tosh-2011.jpeg';
import car2012 from '@/assets/carrier-2012.jpeg';
import tosh2012 from '@/assets/tosh-2012.jpeg';
import toshLight2012 from '@/assets/tosh-light-2012.jpeg';
import carInst2013 from '@/assets/carrier-inst-2017.jpeg';
import tosh2013 from '@/assets/tosh-2013.jpeg';
import tosh2015 from '@/assets/tosh-2015.jpeg';
import tosh2016 from '@/assets/tosh-2016.jpeg';
import tosh2017 from '@/assets/tosh-2017.jpeg';
import car2023 from '@/assets/carrier-2023.jpeg';
import car2017 from '@/assets/carrier-2017.jpeg';
import toshBest from '@/assets/tosh-ins-2013.jpeg';
import carLight from '@/assets/car-light.jpeg';
import toshRlc from '@/assets/tosh-rlc.jpeg';

const awardsData = [
  {
    title: 'Residential & Light Commercial Products Highest Sales Revenue – Mumbai Branch',
    year: '2006',
    category: 'Sales Achievement',
    image: tosh2006
  },
  {
    title: 'Toshiba Duct Free Splits Highest Sales Revenue Nationally',
    year: '2007',
    category: 'Product Sales',
    image: carLight
  },
  {
    title: 'Toshiba Duct Free Splits Second Highest Sales Revenue Nationally',
    year: '2008',
    category: 'Product Sales',
    image: ductFree
  },
  {
    title: 'Residential & Light Commercial Products Second Highest Sales Revenue – Mumbai Branch',
    year: '2008',
    category: 'Sales Achievement',
    image: tosh2008
  },
  {
    title: 'Residential & Light Commercial Products Highest Sales Revenue – Mumbai Branch',
    year: '2009',
    category: 'Sales Achievement',
    image: tosh2009
  },
  {
    title: 'Residential & Light Commercial Products Highest Sales Revenue Nationally',
    year: '2009',
    category: 'Sales Achievement',
    image: toshNat
  },
  {
    title: 'Highest Sales Revenue Nationally, Light Commercial Range',
    year: '2011',
    category: 'Sales Achievement',
    image: tosh2011
  },
  {
    title: 'Highest Toshiba LC Sales All India',
    year: '2011',
    category: 'Product Sales',
    image: car2011
  },
  {
    title: 'Light Commercial Range Highest Sales Revenue',
    year: '2011',
    category: 'Sales Achievement',
    image: toshHigh2011
  },
  {
    title: 'Highest Sales Revenue Nationally Light Commercial Range',
    year: '2012',
    category: 'Sales Achievement',
    image: tosh2012
  },
  {
    title: 'Light Commercial Range Highest Sales Revenue - Mumbai Branch',
    year: '2012',
    category: 'Sales Achievement',
    image: toshLight2012
  },
  {
    title: 'Residential & Light Commercial Highest Sales Revenue – Mumbai Branch',
    year: '2012',
    category: 'Sales Achievement',
    image: carLight
  },
  {
    title: 'Highest Toshiba LC Sales All India',
    year: '2012',
    category: 'Product Sales',
    image: car2012
  },
  {
    title: 'Toshiba RLC Highest Sales Revenue Nationally',
    year: '2013',
    category: 'Product Sales',
    image: toshRlc
  },
  {
    title: 'Highest Light Commercial Sales Revenue Metro – West Region',
    year: '2013',
    category: 'Sales Achievement',
    image: carInst2013
  },
  {
    title: 'Best Installation West',
    year: '2013',
    category: 'Installation Excellence',
    image: toshBest
  },
  {
    title: 'VRF Range Second Highest Sales Revenue Mumbai Region',
    year: '2013',
    category: 'Product Sales',
    image: tosh2013
  },
  {
    title: 'Prestigious Win – Rustomjee Elements',
    year: '2015',
    category: 'Project Achievement',
    image: tosh2015
  },
  {
    title: 'VRF Range Highest Sales – Mumbai Branch',
    year: '2016',
    category: 'Product Sales',
    image: tosh2016
  },
  {
    title: 'WCCD Award Best Projects Installation All India',
    year: '2017',
    category: 'Installation Excellence',
    image: car2017
  },
  {
    title: 'Best Project Installation – West',
    year: '2017',
    category: 'Installation Excellence',
    image: tosh2017
  },
  {
    title: 'Best Project installation (Metro)',
    year: '2023',
    category: 'Installation Excellence',
    image: car2023
  }
];

export default function Awards() {
  const scrollContainerRef = useRef(null);

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -300, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 300, behavior: 'smooth' });
    }
  };

  // Group awards by year for better organization
  const awardsByYear = awardsData.reduce((acc, award) => {
    if (!acc[award.year]) {
      acc[award.year] = [];
    }
    acc[award.year].push(award);
    return acc;
  }, {});

  // Sort years in descending order
  const sortedYears = Object.keys(awardsByYear).sort((a, b) => Number.parseInt(b) - Number.parseInt(a));

  return (
    <div className="mx-auto py-8 px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-6"
      >
        <h2 className="text-3xl font-bold mb-2 text-blue-700">Our Achievements</h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          A showcase of our excellence and recognition in the industry over the years.
        </p>
      </motion.div>

      <div className="relative">
        {/* Navigation buttons */}
        <button
          onClick={scrollLeft}
          className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-blue-600 text-white rounded-full p-2 shadow-lg hidden md:block hover:bg-blue-700 transition-colors"
          aria-label="Scroll left"
        >
          <ChevronLeft className="h-6 w-6" />
        </button>

        <button
          onClick={scrollRight}
          className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-blue-600 text-white rounded-full p-2 shadow-lg hidden md:block hover:bg-blue-700 transition-colors"
          aria-label="Scroll right"
        >
          <ChevronRight className="h-6 w-6" />
        </button>

        {/* Scroll indicator for mobile */}
        <div className="flex justify-center mb-4 md:hidden">
          <div className="flex items-center gap-2 text-sm text-gray-500">
            <ChevronLeft className="h-4 w-4" />
            <span>Swipe to see more awards</span>
            <ChevronRight className="h-4 w-4" />
          </div>
        </div>

        {/* Horizontal scrolling container */}
        <div
          ref={scrollContainerRef}
          className="overflow-x-auto pb-6 hide-scrollbar"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          <div className="flex flex-nowrap gap-4 min-w-max">
            {sortedYears.map((year) => (
              <div key={year} className="flex-none w-[280px] md:w-[320px]">
                <div className="bg-gradient-to-r from-blue-800 to-blue-700 text-white py-2 px-4 rounded-t-lg flex items-center justify-between">
                  <h3 className="font-bold">{year}</h3>
                  <Badge className="bg-yellow-500 hover:bg-yellow-600">
                    {awardsByYear[year].length} Award{awardsByYear[year].length > 1 ? 's' : ''}
                  </Badge>
                </div>
                <div className="bg-blue-50 rounded-b-lg p-3 h-[400px] overflow-y-auto scrollbar-hide">
                  <div className="space-y-3">
                    {awardsByYear[year].map((award, index) => (
                      <motion.div
                        key={`${award.title}-${index}`}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3, delay: index * 0.05 }}
                      >
                        <Card className="overflow-hidden border-2 border-blue-100 hover:border-blue-300 transition-all duration-300 hover:shadow-md p-0">
                          <div className="relative h-32 overflow-hidden bg-blue-50">
                            <img src={award.image} alt={award.title} className="object-contain w-full h-full" />
                            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-blue-900/70 to-transparent p-2">
                              <Badge className="bg-yellow-500 hover:bg-yellow-600 text-xs">{award.category}</Badge>
                            </div>
                          </div>
                          <CardContent className="p-3">
                            <p className="text-sm font-medium line-clamp-3">{award.title}</p>
                          </CardContent>
                        </Card>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="mt-6 flex justify-center"
      >
        <div className="inline-flex items-center gap-6 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-lg p-4">
          <div className="flex items-center gap-2">
            <AwardIcon className="h-5 w-5 text-yellow-400" />
            <span className="text-sm font-medium">{awardsData.length} Total Awards</span>
          </div>
          <div className="h-8 w-px bg-blue-400"></div>
          <div className="text-sm font-medium">
            <span className="text-yellow-400">{new Date().getFullYear() - 1999}</span> Years of Excellence
          </div>
          <div className="h-8 w-px bg-blue-400 hidden md:block"></div>
          <div className="text-sm font-medium hidden md:block">
            From <span className="text-yellow-400">1999</span> to{' '}
            <span className="text-yellow-400">{new Date().getFullYear()}</span>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

import { AwardIcon } from 'lucide-react';

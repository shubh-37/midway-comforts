import { useState, useEffect } from 'react';
import { Award, Calendar, Trophy, Medal, Star, ChevronLeft, ChevronRight } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';

export function Awards() {
  const awardsData = [
    {
      title: 'Residential & Light Commercial Products Highest Sales Revenue – Mumbai Branch',
      year: '2006',
      category: 'Sales Achievement'
    },
    {
      title: 'Toshiba Duct Free Splits Highest Sales Revenue Nationally',
      year: '2007',
      category: 'Product Sales'
    },
    {
      title: 'Toshiba Duct Free Splits Second Highest Sales Revenue Nationally',
      year: '2008',
      category: 'Product Sales'
    },
    {
      title: 'Residential & Light Commercial Products Second Highest Sales Revenue – Mumbai Branch',
      year: '2008',
      category: 'Sales Achievement'
    },
    {
      title: 'Residential & Light Commercial Products Highest Sales Revenue – Mumbai Branch',
      year: '2009',
      category: 'Sales Achievement'
    },
    {
      title: 'Residential & Light Commercial Products Highest Sales Revenue Nationally',
      year: '2009',
      category: 'Sales Achievement'
    },
    {
      title: 'Highest Sales Revenue Nationally, Light Commercial Range',
      year: '2011',
      category: 'Sales Achievement'
    },
    {
      title: 'Highest Toshiba LC Sales All India',
      year: '2011',
      category: 'Product Sales'
    },
    {
      title: 'Light Commercial Range Highest Sales Revenue',
      year: '2011',
      category: 'Sales Achievement'
    },
    {
      title: 'Highest Sales Revenue Nationally Light Commercial Range',
      year: '2012',
      category: 'Sales Achievement'
    },
    {
      title: 'Light Commercial Range Highest Sales Revenue - Mumbai Branch',
      year: '2012',
      category: 'Sales Achievement'
    },
    {
      title: 'Residential & Light Commercial Highest Sales Revenue – Mumbai Branch',
      year: '2012',
      category: 'Sales Achievement'
    },
    {
      title: 'Highest Toshiba LC Sales All India',
      year: '2012',
      category: 'Product Sales'
    },
    {
      title: 'Toshiba RLC Highest Sales Revenue Nationally',
      year: '2013',
      category: 'Product Sales'
    },
    {
      title: 'Highest Light Commercial Sales Revenue Metro – West Region',
      year: '2013',
      category: 'Sales Achievement'
    },
    {
      title: 'Best Installation West',
      year: '2013',
      category: 'Installation Excellence'
    },
    {
      title: 'VRF Range Second Highest Sales Revenue Mumbai Region',
      year: '2013',
      category: 'Product Sales'
    },
    {
      title: 'Prestigious Win – Rustomjee Elements',
      year: '2015',
      category: 'Project Achievement'
    },
    {
      title: 'VRF Range Highest Sales – Mumbai Branch',
      year: '2016',
      category: 'Product Sales'
    },
    {
      title: 'WCCD Award Best Projects Installation All India',
      year: '2017',
      category: 'Installation Excellence'
    },
    {
      title: 'Best Project Installation – West',
      year: '2017',
      category: 'Installation Excellence'
    },
    {
      title: 'Best Project installation (Metro)',
      year: '2023',
      category: 'Installation Excellence'
    },
    {
      title: 'Long association Award – 25 Years',
      year: '2024',
      category: 'Milestone'
    }
  ];

  // Extract unique categories and years for filtering
  const categories = [...new Set(awardsData.map((award) => award.category))];
  const years = [...new Set(awardsData.map((award) => award.year))].sort(
    (a, b) => Number.parseInt(b) - Number.parseInt(a)
  );

  // Group awards by category
  const awardsByCategory = categories.reduce((acc, category) => {
    acc[category] = awardsData.filter((award) => award.category === category);
    return acc;
  }, {});

  // State for responsive design
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);

  // Effect to handle responsive design
  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth <= 640);
      setIsTablet(window.innerWidth > 640 && window.innerWidth <= 1024);
    };

    // Check screen size initially
    checkScreenSize();

    // Add event listener
    window.addEventListener('resize', checkScreenSize);

    // Clean up
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  const getCategoryIcon = (category, size = 5) => {
    const iconSize = `h-${size} w-${size}`;
    switch (category) {
      case 'Sales Achievement':
        return <Trophy className={`${iconSize} text-amber-500`} />;
      case 'Product Sales':
        return <Star className={`${iconSize} text-emerald-500`} />;
      case 'Installation Excellence':
        return <Medal className={`${iconSize} text-purple-500`} />;
      case 'Project Achievement':
        return <Award className={`${iconSize} text-cyan-500`} />;
      case 'Milestone':
        return <Calendar className={`${iconSize} text-rose-500`} />;
      default:
        return <Award className={`${iconSize} text-gray-500`} />;
    }
  };

  return (
    <section className="w-full py-8 sm:py-10">
      <div className="sm:px-4 mx-auto">
        <div className="text-center mb-5 sm:mb-6">
          <h2 className="text-2xl sm:text-3xl font-bold mb-1 sm:mb-2">Our Awards & Achievements</h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-xs sm:text-sm">
            Celebrating over 25 years of excellence and recognition in the industry
          </p>
        </div>

        <Tabs defaultValue="all" className="w-full">
          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-3 sm:mb-4 gap-2 sm:gap-0">
            <TabsList className="h-auto p-1 grid grid-cols-3 sm:grid-cols-6 w-full sm:w-auto gap-1">
              <TabsTrigger value="all" className="text-xs sm:text-sm py-1.5 sm:py-2">
                All
              </TabsTrigger>
              {categories.map((category) => (
                <TabsTrigger
                  key={category}
                  value={category}
                  className="flex items-center gap-1 text-xs sm:text-sm py-1.5 sm:py-2"
                >
                  {getCategoryIcon(category, isMobile ? 3 : 4)}
                  <span className="hidden sm:inline">{category.split(' ')[0]}</span>
                </TabsTrigger>
              ))}
            </TabsList>

            <Badge variant="outline" className="self-end sm:self-auto text-xs sm:text-sm border-gray-300">
              {awardsData.length} Awards • {years[years.length - 1]} - {years[0]}
            </Badge>
          </div>

          <TabsContent value="all" className="mt-0">
            <HorizontalTimeline awards={awardsData} />
          </TabsContent>

          {categories.map((category) => (
            <TabsContent key={category} value={category} className="mt-0">
              <HorizontalTimeline awards={awardsByCategory[category]} />
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
}

function HorizontalTimeline({ awards }) {
  // State for responsive design
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);

  // Effect to handle responsive design
  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth <= 640);
      setIsTablet(window.innerWidth > 640 && window.innerWidth <= 1024);
    };

    // Check screen size initially
    checkScreenSize();

    // Add event listener
    window.addEventListener('resize', checkScreenSize);

    // Clean up
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  // Group awards by year
  const awardsByYear = awards.reduce((acc, award) => {
    if (!acc[award.year]) {
      acc[award.year] = [];
    }
    acc[award.year].push(award);
    return acc;
  }, {});

  // Sort years in descending order
  const sortedYears = Object.keys(awardsByYear).sort((a, b) => Number(b) - Number(a));

  // Get icon based on category
  const getCategoryIcon = (category) => {
    switch (category) {
      case 'Sales Achievement':
        return <Trophy className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-amber-500 flex-shrink-0" />;
      case 'Product Sales':
        return <Star className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-emerald-500 flex-shrink-0" />;
      case 'Installation Excellence':
        return <Medal className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-purple-500 flex-shrink-0" />;
      case 'Project Achievement':
        return <Award className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-cyan-500 flex-shrink-0" />;
      case 'Milestone':
        return <Calendar className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-rose-500 flex-shrink-0" />;
      default:
        return <Award className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-gray-500 flex-shrink-0" />;
    }
  };

  // Get color based on category
  const getCategoryColor = (category) => {
    switch (category) {
      case 'Sales Achievement':
        return 'border-amber-200 bg-amber-50';
      case 'Product Sales':
        return 'border-emerald-200 bg-emerald-50';
      case 'Installation Excellence':
        return 'border-purple-200 bg-purple-50';
      case 'Project Achievement':
        return 'border-cyan-200 bg-cyan-50';
      case 'Milestone':
        return 'border-rose-200 bg-rose-50';
      default:
        return 'border-gray-200 bg-gray-50';
    }
  };

  // Calculate card width based on screen size
  const getCardWidth = () => {
    if (isMobile) return 'w-[85vw] max-w-[280px]';
    if (isTablet) return 'w-[45vw] max-w-[320px]';
    return 'w-[280px]';
  };

  return (
    <div>
      {/* <div className="absolute left-0 top-1/2 -translate-y-1/2 z-10">
        <Button
          variant="outline"
          size="icon"
          className="rounded-full bg-white/80 backdrop-blur-sm shadow-sm border-gray-200 hover:bg-white"
          onClick={scrollLeft}
        >
          <ChevronLeft className="h-4 w-4" />
          <span className="sr-only">Scroll left</span>
        </Button>
      </div>

      <div className="absolute right-0 top-1/2 -translate-y-1/2 z-10">
        <Button
          variant="outline"
          size="icon"
          className="rounded-full bg-white/80 backdrop-blur-sm shadow-sm border-gray-200 hover:bg-white"
          onClick={scrollRight}
        >
          <ChevronRight className="h-4 w-4" />
          <span className="sr-only">Scroll right</span>
        </Button>
      </div> */}

      <div className="overflow-x-auto scrollbar-hide py-2 px-8 -mx-8 touch-pan-x">
        <div className="flex gap-3 sm:gap-4 pb-1">
          {sortedYears.map((year) => (
            <div
              key={year}
              className={cn(
                'flex-shrink-0 border border-gray-300 rounded-lg p-2 sm:p-3 bg-white shadow-sm',
                getCardWidth()
              )}
            >
              <div className="flex items-center justify-between mb-2 sm:mb-3">
                <Badge variant="outline" className="font-semibold text-xs sm:text-sm border-gray-300">
                  {year}
                </Badge>
                <Badge variant="secondary" className="text-[10px] sm:text-xs">
                  {awardsByYear[year].length}
                </Badge>
              </div>
              <div className="space-y-2">
                {awardsByYear[year].map((award, idx) => (
                  <div
                    key={idx}
                    className={cn(
                      'p-1.5 sm:p-2 rounded-md border text-xs sm:text-sm flex items-start gap-1.5 sm:gap-2',
                      getCategoryColor(award.category)
                    )}
                  >
                    {getCategoryIcon(award.category)}
                    <span className="whitespace-normal leading-tight">{award.title}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

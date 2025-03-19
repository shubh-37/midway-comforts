import { InfiniteMovingAwards } from './ui/infinite-moving-cards';

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

  return (
    <div className="w-full py-10">
      <h2 className="text-3xl font-bold text-center mb-8">Our Awards and Achievements</h2>
      <InfiniteMovingAwards awards={awardsData} direction="right" />
    </div>
  );
}

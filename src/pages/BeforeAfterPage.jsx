import { useState } from 'react';
import ImageComparison from '@/components/ImageComparison';

const BeforeAfterGallery = () => {
  const [activeFilter, setActiveFilter] = useState('All Projects');

  // Project data
  const projects = [
    {
      id: 1,
      category: 'Residential',
      images: [
        {
          src: 'https://upload.wikimedia.org/wikipedia/commons/2/28/HDFC_Bank_Logo.svg',
          alt: 'Initial state'
        },
        {
          src: 'https://upload.wikimedia.org/wikipedia/commons/7/71/Tanishq_Logo.svg',
          alt: 'Demolition phase'
        },
        {
          src: 'https://upload.wikimedia.org/wikipedia/commons/7/76/Louis_Vuitton_logo_and_wordmark.svg',
          alt: 'Construction phase'
        },
        {
          src: 'https://upload.wikimedia.org/wikipedia/hi/9/99/Reliance_Industries_Logo.svg',
          alt: 'Completed project'
        }
      ],
      title: 'Modern HVAC System Upgrade',
      description:
        'Replacement of an outdated furnace and AC system with a high-efficiency heat pump system, improving energy efficiency by 40%.',
      location: 'Seattle, WA',
      completionDate: '2022'
    },
    {
      id: 2,
      category: 'Commercial',
      images: [
        {
          src: 'https://upload.wikimedia.org/wikipedia/commons/2/28/HDFC_Bank_Logo.svg',
          alt: 'Before renovation'
        },
        {
          src: 'https://upload.wikimedia.org/wikipedia/commons/7/71/Tanishq_Logo.svg',
          alt: 'Demolition phase'
        },
        {
          src: 'https://upload.wikimedia.org/wikipedia/commons/7/76/Louis_Vuitton_logo_and_wordmark.svg',
          alt: 'Installation phase'
        },
        {
          src: 'https://upload.wikimedia.org/wikipedia/hi/9/99/Reliance_Industries_Logo.svg',
          alt: 'Completed project'
        }
      ],
      title: 'Office Building HVAC Renovation',
      description:
        'Complete overhaul of an outdated rooftop unit system in a 10,000 sq. ft. office building, improving comfort and reducing operating costs.',
      location: 'Denver, CO',
      completionDate: '2021'
    },
    {
      id: 3,
      category: 'System Upgrades',
      images: [
        {
          src: 'https://upload.wikimedia.org/wikipedia/commons/2/28/HDFC_Bank_Logo.svg',
          alt: 'Old system'
        },
        {
          src: 'https://upload.wikimedia.org/wikipedia/commons/7/71/Tanishq_Logo.svg',
          alt: 'Removal phase'
        },
        {
          src: 'https://upload.wikimedia.org/wikipedia/commons/7/76/Louis_Vuitton_logo_and_wordmark.svg',
          alt: 'Installation phase'
        },
        {
          src: 'https://upload.wikimedia.org/wikipedia/hi/9/99/Reliance_Industries_Logo.svg',
          alt: 'New system'
        }
      ],
      title: 'Smart Thermostat Integration',
      description:
        'Upgrading from manual thermostats to a comprehensive smart climate control system, allowing for remote access and energy optimization.',
      location: 'Chicago, IL',
      completionDate: '2023'
    }
  ];

  // Filter options
  const filterOptions = ['All Projects', 'Residential', 'Commercial', 'System Upgrades'];

  // Filter projects based on active filter
  const filteredProjects =
    activeFilter === 'All Projects' ? projects : projects.filter((project) => project.category === activeFilter);

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-center mb-4">Before & After Gallery</h1>

      <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
        See the remarkable difference our HVAC solutions can make. Over our 26 years of experience, we've transformed
        thousands of homes and commercial spaces. Here's a glimpse of our work.
      </p>

      {/* Filter buttons */}
      <div className="flex flex-wrap justify-center gap-4 mb-12">
        {filterOptions.map((filter) => (
          <button
            key={filter}
            onClick={() => setActiveFilter(filter)}
            className={`px-6 py-2 rounded-md transition-colors ${
              activeFilter === filter ? 'bg-blue-600 text-white' : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
            }`}
          >
            {filter}
          </button>
        ))}
      </div>

      {/* Projects grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProjects.map((project) => (
          <div key={project.id} className="transition-all duration-300">
            <ImageComparison
              images={project.images}
              title={project.title}
              description={project.description}
              location={project.location}
              completionDate={project.completionDate}
              category={project.category}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default BeforeAfterGallery;

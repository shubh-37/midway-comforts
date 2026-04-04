export function OrganizationSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': ['Organization', 'LocalBusiness', 'HVACBusiness'],
    name: 'Midway Comforts',
    legalName: 'Midway Comforts',
    foundingDate: '1999',
    url: 'https://midwaycomforts.in',
    logo: 'https://midwaycomforts.in/logo.png',
    image: 'https://midwaycomforts.in/og-image.jpg',
    description:
      'Leading commercial HVAC contractor in India specializing in VRF systems, central AC, chillers, and ventilation for large-scale commercial and industrial projects since 1999.',
    telephone: ['+919930267231', '+919324775501'],
    email: ['projects@midwaycomforts.in', 'midwaycomforts@gmail.com'],
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Unit 11, Ground Floor, Universal Industrial Estate, Near Wadia School, J.P. Road',
      addressLocality: 'Andheri West',
      addressRegion: 'Maharashtra',
      postalCode: '400058',
      addressCountry: 'IN',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: '19.1364',
      longitude: '72.8296',
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
        opens: '09:30',
        closes: '19:00',
      },
    ],
    areaServed: {
      '@type': 'Country',
      name: 'India',
    },
    knowsAbout: [
      'VRF Systems',
      'Central Air Conditioning',
      'Commercial HVAC',
      'Chiller Installation',
      'Ventilation Systems',
      'AHU',
      'Building Management Systems',
      'HVAC Project Management',
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function ServiceSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: 'Commercial HVAC Installation and Maintenance',
    provider: {
      '@type': 'Organization',
      name: 'Midway Comforts',
      url: 'https://midwaycomforts.in',
    },
    areaServed: {
      '@type': 'Country',
      name: 'India',
    },
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'HVAC Services',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'VRF System Design and Installation',
            description:
              'Complete Variable Refrigerant Flow system design, supply, installation, and commissioning for commercial buildings.',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Central Air Conditioning',
            description:
              'Central AC and chiller-based systems for large commercial, industrial, and institutional buildings.',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'HVAC Project Management',
            description:
              'End-to-end HVAC project management including heat load calculation, system design, procurement, and site execution.',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Ventilation Systems',
            description:
              'Commercial ventilation design and installation including AHU, exhaust systems, and BMS integration.',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'AMC and Servicing',
            description:
              'Annual Maintenance Contracts and preventive servicing for commercial HVAC systems.',
          },
        },
      ],
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function FAQSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'How often should I service my commercial HVAC system?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'For optimal performance, commercial HVAC systems should be serviced at least twice a year — once before the cooling season and once before the heating season. High-use commercial environments may require quarterly servicing.',
        },
      },
      {
        '@type': 'Question',
        name: 'What is the difference between VRF and chiller-based AC systems for commercial buildings?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'VRF (Variable Refrigerant Flow) systems are ideal for medium-to-large commercial spaces requiring zone-by-zone control with lower installation cost. Chiller-based systems are suited for very large buildings like hospitals, malls, and hotels where centralized cooling loads exceed 100 TR.',
        },
      },
      {
        '@type': 'Question',
        name: 'Does Midway Comforts handle HVAC projects outside Mumbai?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes. Midway Comforts handles commercial HVAC projects across India and has also completed international projects, including a hotel installation in Colombo, Sri Lanka.',
        },
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

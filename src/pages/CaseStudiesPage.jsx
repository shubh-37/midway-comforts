import React from 'react';

const CaseStudiesPage = () => {
    // Sample case studies data
    const caseStudies = [
        {
            id: 1,
            title: 'Project Alpha',
            client: 'ABC Corporation',
            summary: 'Implemented a comprehensive solution that increased efficiency by 30%',
            imageUrl: '/images/case-study-1.jpg',
        },
        {
            id: 2,
            title: 'Beta Transformation',
            client: 'XYZ Industries',
            summary: 'Complete digital transformation resulting in 50% cost reduction',
            imageUrl: '/images/case-study-2.jpg',
        },
        {
            id: 3,
            title: 'Gamma Innovation',
            client: 'Global Enterprises',
            summary: 'Cutting-edge implementation of innovative technologies',
            imageUrl: '/images/case-study-3.jpg',
        },
    ];

    return (
        <div className="bg-gray-50 min-h-screen">
            {/* Hero Section */}
            <div className="bg-blue-600 text-white">
                <div className="container mx-auto px-4 py-16 md:py-24">
                    <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Case Studies</h1>
                    <p className="text-xl md:w-2/3">
                        Explore how we've helped businesses transform and achieve remarkable results through our solutions.
                    </p>
                </div>
            </div>

            {/* Case Studies List */}
            <div className="container mx-auto px-4 py-12 md:py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {caseStudies.map((study) => (
                        <div key={study.id} className="bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:scale-105">
                            <div className="h-48 overflow-hidden">
                                <img 
                                    src={study.imageUrl} 
                                    alt={study.title} 
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <div className="p-6">
                                <p className="text-sm text-gray-500 mb-2">{study.client}</p>
                                <h3 className="text-xl font-semibold mb-3">{study.title}</h3>
                                <p className="text-gray-600 mb-4">{study.summary}</p>
                                <button className="text-blue-600 font-medium hover:text-blue-800 flex items-center">
                                    View Case Study
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
                                        <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                                    </svg>
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Call to Action */}
            <div className="bg-gray-100 py-16">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-3xl font-bold mb-6">Ready to achieve similar results?</h2>
                    <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
                        Let's discuss how our solutions can help your business grow and overcome challenges.
                    </p>
                    <button className="bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors">
                        Contact Us Today
                    </button>
                </div>
            </div>
        </div>
    );
};

export default CaseStudiesPage;
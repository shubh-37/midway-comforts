import React from 'react';

const BeforeAfterPage = () => {
    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold text-center mb-8">Before & After</h1>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Before/After Item */}
                <div className="bg-white rounded-lg shadow-md overflow-hidden">
                    <h2 className="bg-gray-800 text-white text-xl font-semibold p-4">Before</h2>
                    <div className="p-4">
                        <img 
                            src="/placeholder-before.jpg" 
                            alt="Before" 
                            className="w-full h-64 object-cover rounded"
                        />
                        <p className="mt-4 text-gray-700">Description of the before state.</p>
                    </div>
                </div>
                
                <div className="bg-white rounded-lg shadow-md overflow-hidden">
                    <h2 className="bg-gray-800 text-white text-xl font-semibold p-4">After</h2>
                    <div className="p-4">
                        <img 
                            src="/placeholder-after.jpg" 
                            alt="After" 
                            className="w-full h-64 object-cover rounded"
                        />
                        <p className="mt-4 text-gray-700">Description of the after state.</p>
                    </div>
                </div>
            </div>
            
            {/* More Before/After items can be added here */}
            
            <div className="mt-12 text-center">
                <p className="text-lg text-gray-700 mb-6">
                    Interested in transforming your space? Contact us today!
                </p>
                <button className="bg-blue-600 text-white py-2 px-6 rounded-lg hover:bg-blue-700 transition-colors">
                    Contact Us
                </button>
            </div>
        </div>
    );
};

export default BeforeAfterPage;
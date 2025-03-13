

const Projects = () => {
    // Sample projects data - replace with your actual data or API call
    const projects = [
        {
            id: 1,
            title: "Project One",
            description: "Description of project one goes here.",
            imageUrl: "/images/project1.jpg",
            link: "/projects/1"
        },
        {
            id: 2,
            title: "Project Two",
            description: "Description of project two goes here.",
            imageUrl: "/images/project2.jpg",
            link: "/projects/2"
        },
        // Add more projects as needed
    ];

    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <h1 className="text-4xl font-bold text-center text-gray-800 mb-4">Our Projects</h1>
            <p className="text-lg text-gray-600 text-center mb-12 max-w-3xl mx-auto">
                Explore our portfolio of completed and ongoing projects.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {projects.map(project => (
                    <div className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform duration-300 hover:scale-105" key={project.id}>
                        <img 
                            src={project.imageUrl} 
                            alt={project.title} 
                            className="w-full h-64 object-cover"
                        />
                        <div className="p-6">
                            <h2 className="text-xl font-semibold text-gray-800 mb-2">{project.title}</h2>
                            <p className="text-gray-600 mb-4">{project.description}</p>
                            <a href={project.link} className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded transition duration-300">
                                View Details
                            </a>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )};


export default Projects;
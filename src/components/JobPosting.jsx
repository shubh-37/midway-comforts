import { useState } from 'react';
import { MapPin, Search } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Separator } from '@/components/ui/separator';

// Sample job data
const jobData = [
  {
    id: 'single-phase-tech',
    title: 'Single Phase Technicians',
    location: 'Mumbai',
    type: 'Full-Time',
    department: 'Projects, Service',
    shortDescription:
      'Should have knowledge of single phase air conditioners. Hands on experience in repairs and complaint attending. Fluent in communication and willing to travel in Mumbai.',
    aboutRole:
      'Will be responsible for attending complaints with proper resolution and should have hands on experience in repairs and preventive maintenance.',
    responsibilities: ['Repair and Maintenance', 'Training to his subordinates'],
    qualifications: ['ITI or Diploma in refrigeration and air conditioning'],
    salary: 'As per the work experience',
    benefits: ['Travel Allowance', 'Incentives', 'On-site project exposure', 'Internal training'],
    reportingTo: 'Service Head',
    positions: 3,
    applicationLink:
      'https://docs.google.com/forms/d/e/1FAIpQLSdKHZzTuP2b-xLB7Nn4OVNuW31tMrd2Y2ShxBoQwGiUR59EHQ/viewform?usp=header',
    experience: '2+ years'
  },
  {
    id: 'three-phase-tech',
    title: '3 Phase Technicians',
    location: 'Mumbai, Maharashtra',
    type: 'Full-time',
    department: 'Projects, Service',
    shortDescription:
      'Should have knowledge of single and three phase air conditioners. Hands on experience in repairs and complaint attending. Fluent in communication and willing to travel in Mumbai.',
    aboutRole:
      'Will be responsible for attending complaints with proper resolution and should have hands on experience in repairs and preventive maintenance of three phase air conditioners.',
    responsibilities: ['Repair and Maintenance of three phase air conditioners', 'Training to his subordinates'],
    qualifications: [
      'ITI or Diploma in refrigeration and air conditioning',
      '3+ years of experience with three phase systems'
    ],
    salary: 'As per the work experience',
    benefits: ['Travel Allowance', 'Incentives', 'On-site project exposure', 'Internal training'],
    reportingTo: 'Service Head',
    positions: 2,
    applicationLink:
      'https://docs.google.com/forms/d/e/1FAIpQLSdKHZzTuP2b-xLB7Nn4OVNuW31tMrd2Y2ShxBoQwGiUR59EHQ/viewform?usp=header',
    experience: '3+ years'
  },
  {
    id: 'autocad-engineer',
    title: 'AUTO CAD Engineer',
    location: 'Mumbai, Maharashtra',
    type: 'Full-time',
    department: 'Projects',
    shortDescription:
      'Should have knowledge of AutoCAD and willing to travel in Mumbai. Fluent in communication and willing to travel in Mumbai.',
    aboutRole:
      'Prepare detailed HVAC drawings using AutoCAD, Coordinate with engineering and site teams for drawing approvals, Create ducting, piping, and equipment layout plans, Ensure compliance with project and industry standards, Assist in BOQ preparation and material take-offs',
    responsibilities: ['Basic Designing', 'Training to his subordinates', 'Coordination with site supervisors'],
    qualifications: ['Diploma or Degree in Mechanical Engineering'],
    salary: 'As per the work experience',
    benefits: ['Travel Allowance', 'Incentives', 'On-site project exposure', 'Internal training'],
    reportingTo: 'Projects Head',
    positions: 1,
    applicationLink:
      'https://docs.google.com/forms/d/e/1FAIpQLSdKHZzTuP2b-xLB7Nn4OVNuW31tMrd2Y2ShxBoQwGiUR59EHQ/viewform?usp=header',
    experience: '3-5 years'
  }
];

export default function OpenPositions() {
  const [searchTerm, setSearchTerm] = useState('');
  const [open, setOpen] = useState(false);
  const [selectedJob, setSelectedJob] = useState(null);

  // Filter jobs based on search term
  const filteredJobs = jobData.filter((job) => {
    // If search is empty, return all jobs
    if (!searchTerm.trim()) {
      return true;
    }

    // Otherwise filter based on search criteria
    const term = searchTerm.toLowerCase();
    return (
      job.title.toLowerCase().includes(term) ||
      job.location.toLowerCase().includes(term) ||
      job.department.toLowerCase().includes(term)
    );
  });

  const openJobDetails = (job) => {
    setSelectedJob(job);
    setOpen(true);
  };

  return (
    <section id="open-positions" className="py-16 bg-white">
      <div className="mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12 text-blue-700">Open Positions</h2>

        <div className="max-w-3xl mx-auto mb-10">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search positions..."
              className="w-full pl-10 pr-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-blue-700"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>

        <div className="grid grid-cols-1 gap-6 max-w-4xl mx-auto">
          {filteredJobs.length > 0 ? (
            filteredJobs.map((job) => (
              <div key={job.id}>
                <Card className="border-2 hover:border-[#FFD700] transition-all">
                  <CardContent className="p-6">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                      <h3 className="text-xl font-bold text-blue-700">{job.title}</h3>
                      <div className="flex flex-wrap gap-2 mt-2 md:mt-0">
                        <Badge className="bg-blue-700 text-white">{job.type}</Badge>
                        <Badge variant="outline" className="text-blue-700 border-blue-700">
                          {job.experience}
                        </Badge>
                      </div>
                    </div>
                    <p className="text-gray-600 mb-4">{job.shortDescription}</p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center text-gray-500">
                        <MapPin className="h-4 w-4 mr-1" />
                        <span className="text-sm">{job.location}</span>
                      </div>
                      <Button
                        variant="outline"
                        className="border-blue-700 text-blue-700 hover:bg-blue-700 hover:text-white"
                        onClick={() => openJobDetails(job)}
                      >
                        View Details
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))
          ) : (
            <div className="text-center text-gray-500 py-8">
              No jobs match your search criteria. Please try a different search term.
            </div>
          )}
        </div>
      </div>

      {/* Job Details Modal */}
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto bg-white scrollbar-hide">
          {selectedJob && (
            <>
              <DialogHeader>
                <div className="flex justify-between items-center">
                  <DialogTitle className="text-2xl font-bold text-blue-700">{selectedJob.title}</DialogTitle>
                </div>
                <div className="flex flex-wrap gap-2 mt-2">
                  <Badge className="bg-blue-700 text-white">{selectedJob.type}</Badge>
                  <Badge variant="outline" className="text-blue-700 border-blue-700">
                    {selectedJob.department}
                  </Badge>
                  <div className="flex items-center text-gray-500 ml-2">
                    <MapPin className="h-4 w-4 mr-1" />
                    <span className="text-sm">{selectedJob.location}</span>
                  </div>
                </div>
              </DialogHeader>

              <div className="space-y-6 mt-4">
                <div>
                  <h3 className="text-lg font-semibold text-blue-700 mb-2">About the Role</h3>
                  <p className="text-gray-700">{selectedJob.aboutRole}</p>
                </div>

                <Separator />

                <div>
                  <h3 className="text-lg font-semibold text-blue-700 mb-2">Key Responsibilities</h3>
                  <ul className="list-disc pl-5 space-y-1">
                    {selectedJob.responsibilities.map((resp, index) => (
                      <li key={index} className="text-gray-700">
                        {resp}
                      </li>
                    ))}
                  </ul>
                </div>

                <Separator />

                <div>
                  <h3 className="text-lg font-semibold text-blue-700 mb-2">Required Qualifications</h3>
                  <ul className="list-disc pl-5 space-y-1">
                    {selectedJob.qualifications.map((qual, index) => (
                      <li key={index} className="text-gray-700">
                        {qual}
                      </li>
                    ))}
                  </ul>
                </div>

                <Separator />

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="text-lg font-semibold text-blue-700 mb-2">Salary Range</h3>
                    <p className="text-gray-700">{selectedJob.salary}</p>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-blue-700 mb-2">Reporting To</h3>
                    <p className="text-gray-700">{selectedJob.reportingTo}</p>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-blue-700 mb-2">Benefits & Perks</h3>
                  <ul className="list-disc pl-5 space-y-1">
                    {selectedJob.benefits.map((benefit, index) => (
                      <li key={index} className="text-gray-700">
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-blue-700 mb-2">Positions Available</h3>
                  <p className="text-gray-700">{selectedJob.positions} openings</p>
                </div>

                <Separator />

                <div className="flex justify-center">
                  <Button className="bg-blue-700 hover:bg-blue-800 text-white h-auto" asChild>
                    <a href={selectedJob.applicationLink} target="_blank" rel="noopener noreferrer">
                      Apply Now
                    </a>
                  </Button>
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
}

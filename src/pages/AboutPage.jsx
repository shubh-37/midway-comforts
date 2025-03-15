import AboutUsHeader from '@/components/AboutUsHeader';
import CompanyTimeline from '@/components/CompanyJourney';

function AboutPage() {
  return (
    <div className="container py-16 px-4 md:px-6">
      <AboutUsHeader />
      <CompanyTimeline />
    </div>
  );
}

export default AboutPage;

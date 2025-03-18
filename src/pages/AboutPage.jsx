import AboutUsHeader from '@/components/AboutUsHeader';
import CompanyTimeline from '@/components/CompanyJourney';
import IndustriesSection from '@/components/Industries';
import LeadershipCarousel from '@/components/Leadership';

function AboutPage() {
  return (
    <div className="py-16 px-4 md:px-6">
      <AboutUsHeader />
      <CompanyTimeline />
      <LeadershipCarousel />
      <IndustriesSection />
    </div>
  );
}

export default AboutPage;

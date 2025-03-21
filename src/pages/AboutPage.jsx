import AboutUsHeader from '@/components/AboutUsHeader';
import { Awards } from '@/components/Awards';
import CompanyTimeline from '@/components/CompanyJourney';

function AboutPage() {
  return (
    <div className="py-16 px-4 md:px-6">
      <AboutUsHeader />
      <CompanyTimeline />
      <Awards />
      {/* <IndustriesSection /> */}
    </div>
  );
}

export default AboutPage;

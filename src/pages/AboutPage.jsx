import AboutUsHeader from '@/components/AboutUsHeader';
import Awards from '@/components/Awards';
import CompanyTimeline from '@/components/CompanyJourney';
import SEO from '@/seo/SEO';
import { OrganizationSchema } from '@/seo/JsonLd';

function AboutPage() {
  return (
    <div className="py-16 px-4 md:px-6">
      <SEO page="about" />
      <OrganizationSchema />
      <AboutUsHeader />
      <CompanyTimeline />
      <Awards />
      {/* <IndustriesSection /> */}
    </div>
  );
}

export default AboutPage;

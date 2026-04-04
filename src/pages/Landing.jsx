import HeroSection from '@/components/HeroSection';
import HVACServicePage from '@/components/WhyChooseUsSec';
import PremiumHVACSolutions from '@/components/Solutions';
import BrandMarquee from '@/components/BrandsMarquee';
import FaqSection from '@/components/FaqSection';
import ContactUs from '@/components/ContactUs';
import PartnerBrands from '@/components/PartnerBrand';
import SEO from '@/seo/SEO';
import { OrganizationSchema, ServiceSchema, FAQSchema } from '@/seo/JsonLd';

export default function Landing() {
  return (
    <>
      <SEO page="home" />
      <OrganizationSchema />
      <ServiceSchema />
      <FAQSchema />
      <HeroSection />
      <PartnerBrands />
      <BrandMarquee />
      <PremiumHVACSolutions />
      <HVACServicePage />
      <FaqSection />
      <ContactUs />
    </>
  );
}

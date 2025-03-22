import HeroSection from '@/components/HeroSection';
import HVACServicePage from '@/components/WhyChooseUsSec';
import PremiumHVACSolutions from '@/components/Solutions';
import BrandMarquee from '@/components/BrandsMarquee';
import FaqSection from '@/components/FaqSection';
import ContactUs from '@/components/ContactUs';
import PartnerBrands from '@/components/PartnerBrand';

export default function Landing() {
  return (
    <>
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

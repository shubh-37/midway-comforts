import HeroSection from '@/components/HeroSection';
import HVACServicePage from '@/components/WhyChooseUsSec';
import PremiumHVACSolutions from '@/components/Solutions';
import BrandMarquee from '@/components/BrandsMarquee';
import FaqSection from '@/components/FaqSection';

export default function Landing() {
  return (
    <>
      <HeroSection />
      <BrandMarquee />
      <PremiumHVACSolutions />
      <HVACServicePage />
      <FaqSection />
    </>
  );
}

import HeroSection from '@/components/HeroSection';
import HVACServicePage from '@/components/Services';
import PremiumHVACSolutions from '@/components/Solutions';

export default function Landing() {
  return (
    <>
      <HeroSection />
      <PremiumHVACSolutions />
      <HVACServicePage />
    </>
  );
}

import { Layout } from "@/components/layout";
import {
  HeroSection,
  ServicesSection,
  WhyChooseUs,
  CTASection,
} from "@/components/home";
import EidImageModal from "@/components/EidImageModal";

const Index = () => {
  return (
    <Layout>
      {/* <EidImageModal /> ✅ ADD HERE */}
      <HeroSection />
      <ServicesSection />
      <WhyChooseUs />
      <CTASection />
    </Layout>
  );
};

export default Index;

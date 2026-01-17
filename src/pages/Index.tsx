import { Layout } from "@/components/layout";
import {
  HeroSection,
  ServicesSection,
  WhyChooseUs,
  CTASection,
} from "@/components/home";

const Index = () => {
  return (
    <Layout>
      <HeroSection />
      <ServicesSection />
      <WhyChooseUs />
      <CTASection />
    </Layout>
  );
};

export default Index;

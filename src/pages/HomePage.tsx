import React from "react";
import Hero from "../components/sections/Hero";
import ServicesSection from "../components/sections/ServicesSection";
import TagsSection from "../components/sections/TagsSection";
import ContactSection from "../components/sections/ContactSection";
import WhyUsSection from "../components/sections/WhyUsSection";
import ProvenProcessSection from "../components/sections/ProvenProcessSection";
import ComparisonSection from "../components/sections/ComparisonSection";
import TestimonialsSection from "../components/sections/TestimonialsSection";
import InsightsSection from "../components/sections/InsightsSection";
import FAQSection from "../components/sections/FAQSection";
// import ExpertsSection from '../components/sections/ExpertsSection';
import FooterSection from "../components/layout/FooterSection";

const HomePage = () => {
  return (
    <>
      <main className="pt-0">
        <Hero />
        <ServicesSection />
        <TagsSection />
        <ContactSection />
        <WhyUsSection />
        <ProvenProcessSection />
        <ComparisonSection />
        <TestimonialsSection />
        <InsightsSection />
        <FAQSection />
        {/* <ExpertsSection /> */}
      </main>
      <FooterSection />
    </>
  );
};

export default HomePage;

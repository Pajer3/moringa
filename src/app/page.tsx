"use client";

import React from "react";
import Hero from "../components/Hero";
import ProductOverview from "@/components/ProductOverview";
import ProductShowcase from "@/components/ProductShowcase";
import HowItWorks from "@/components/HowItWorks";
import Testimonials from "@/components/Testimonials"

const HomePage: React.FC = () => {
  return (
    <>
      <Hero />
      <ProductOverview />
      <ProductShowcase />
      <HowItWorks />
      <Testimonials />
      {/* <CallToAction /> */}
      {/* <FAQ /> */}
      {/* <Footer /> */}
    </>
  );
};

export default HomePage;

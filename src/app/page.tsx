"use client";

import React from "react";
import Hero from "../components/Hero";
import ProductOverview from "@/components/ProductOverview";
import ProductShowcase from "@/components/ProductShowcase";
import HowItWorks from "@/components/HowItWorks";
import Testimonials from "@/components/Testimonials"
import CallToAction from "@/components/CallToAction"
import FAQ from "@/components/FAQ"
import Footer from "@/components/Footer"

const HomePage: React.FC = () => {
  return (
    <>
      <Hero />
      <ProductOverview />
      <ProductShowcase />
      <HowItWorks />
      <Testimonials />
      <CallToAction />
      <FAQ />
    </>
  );
};

export default HomePage;

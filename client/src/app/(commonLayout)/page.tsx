import React from "react";
import Hero from "../components/sections/Hero";
import FeaturedOffers from "../components/sections/FeaturedOffers";
import FeaturedProducts from "../components/sections/FeaturedProducts";
import BestSellers from "../components/sections/bestSellers";
import HealthProducts from "../components/sections/HealthProducts";
import OfferBanner from "../components/sections/OfferBanner";

const CommonLayoutPage = () => {
  return (
    <div>
      <Hero />
      <FeaturedOffers />
      <FeaturedProducts />
      <HealthProducts />
      <BestSellers />
      <OfferBanner />
    </div>
  );
};

export default CommonLayoutPage;

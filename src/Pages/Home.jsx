import React from "react";
import Hero from "../Components/Layout/Hero";
import GenderCollectionSection from "../Components/Products/GenderCollectionSection";
import NewArrivals from "../Components/Products/NewArrivals";
import ProductDetail from "../Components/Products/ProductDetail";

const Home = () => {
  return (
    <div>
      <Hero />
      <GenderCollectionSection />
      <NewArrivals />
      <div className="flex justify-center">
        <h2 className="text-3xl font-bold text-center">Best Seller</h2>
      </div>
      <ProductDetail />
    </div>
  );
};

export default Home;

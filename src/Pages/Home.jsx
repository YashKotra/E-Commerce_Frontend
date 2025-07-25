import React from "react";
import Hero from "../Components/Layout/Hero";
import GenderCollectionSection from "../Components/Products/GenderCollectionSection";
import NewArrivals from "../Components/Products/NewArrivals";
import ProductDetail from "../Components/Products/ProductDetail";
import ProductGrid from "../Components/Products/ProductGrid";
import FeaturedCollection from "../Components/Products/FeaturedCollection";
const products = [
  {
    _id: 1,
    name: "Product 1",
    price: 1000,
    images: [
      {
        url: "https://images.unsplash.com/photo-1513094735237-8f2714d57c13?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      },
    ],
  },
  {
    _id: 2,
    name: "Product 2",
    price: 1200,
    images: [
      {
        url: "https://images.unsplash.com/photo-1618244972963-dbee1a7edc95?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      },
    ],
  },
  {
    _id: 3,
    name: "Product 3",
    price: 950,
    images: [
      {
        url: "https://images.unsplash.com/photo-1584998316204-3b1e3b1895ae?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      },
    ],
  },
  {
    _id: 4,
    name: "Product 4",
    price: 1100,
    images: [
      {
        url: "https://plus.unsplash.com/premium_photo-1661597265308-934005c78491?q=80&w=820&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      },
    ],
  },
];

const likeProducts = [
  {
    _id: 1,
    name: "Product 1",
    price: 1000,
    images: [
      {
        url: "https://images.unsplash.com/photo-1621184455862-c163dfb30e0f?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      },
    ],
  },
  {
    _id: 2,
    name: "Product 2",
    price: 1200,
    images: [
      {
        url: "https://images.unsplash.com/photo-1589212987511-4a924cb9d8ac?q=80&w=928&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      },
    ],
  },
  {
    _id: 3,
    name: "Product 3",
    price: 950,
    images: [
      {
        url: "https://images.unsplash.com/photo-1590330297626-d7aff25a0431?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      },
    ],
  },
  {
    _id: 4,
    name: "Product 4",
    price: 1100,
    images: [
      {
        url: "https://plus.unsplash.com/premium_photo-1689371957762-b5f8d601933e?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      },
    ],
  },
];
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
      <h2 className="text-3xl font-bold text-center" mb-4>
        You May Also Like
      </h2>
      <ProductGrid products={products} />

      <div className="container mx-auto">
        <h2 className="text-3xl text-center font-bold mb-4 mt-4">
          Top Gear for Womens
        </h2>
        <ProductGrid products={likeProducts} />
        <FeaturedCollection />
      </div>
    </div>
  );
};

export default Home;

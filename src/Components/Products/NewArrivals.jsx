import React, { useRef } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { Link } from "react-router-dom";

const NewArrivals = () => {
  const scrollRef = useRef(null);

  const handleScroll = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = 300;
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  const newArrivals = [
    {
      _id: "1",
      name: "Stylish Jacket",
      price: "1200",
      images: [
        {
          url: "https://picsum.photos/500/500?random=1",
          altText: "Stylish Jacket",
        },
      ],
    },
    {
      _id: "2",
      name: "Denim Shirt",
      price: "900",
      images: [
        {
          url: "https://picsum.photos/500/500?random=2",
          altText: "Denim Shirt",
        },
      ],
    },
    {
      _id: "3",
      name: "Casual Sneakers",
      price: "1500",
      images: [
        {
          url: "https://picsum.photos/500/500?random=3",
          altText: "Casual Sneakers",
        },
      ],
    },
    {
      _id: "4",
      name: "Leather Boots",
      price: "2500",
      images: [
        {
          url: "https://picsum.photos/500/500?random=4",
          altText: "Leather Boots",
        },
      ],
    },
    {
      _id: "5",
      name: "Graphic T-Shirt",
      price: "600",
      images: [
        {
          url: "https://picsum.photos/500/500?random=5",
          altText: "Graphic T-Shirt",
        },
      ],
    },
    {
      _id: "6",
      name: "Slim Fit Jeans",
      price: "1100",
      images: [
        {
          url: "https://picsum.photos/500/500?random=6",
          altText: "Slim Fit Jeans",
        },
      ],
    },
    {
      _id: "7",
      name: "Woolen Scarf",
      price: "500",
      images: [
        {
          url: "https://picsum.photos/500/500?random=7",
          altText: "Woolen Scarf",
        },
      ],
    },
    {
      _id: "8",
      name: "Classic Hoodie",
      price: "1300",
      images: [
        {
          url: "https://picsum.photos/500/500?random=8",
          altText: "Classic Hoodie",
        },
      ],
    },
  ];

  return (
    <div className="w-full py-10 bg-gray-50">
      <div className="container mx-auto text-center relative px-4">
        <h2 className="text-3xl font-bold mb-4">Explore New Arrivals</h2>
        <p className="text-lg text-gray-600 mb-8">
          Discover the latest styles straight off the runway, freshly added to
          keep your wardrobe on the cutting edge of fashion.
        </p>

        {/* Scroll Buttons */}
        <div className="absolute right-4 bottom-[-30px] flex space-x-2 z-10">
          <button
            onClick={() => handleScroll("left")}
            className="p-2 rounded border bg-white text-black shadow"
          >
            <FiChevronLeft className="text-2xl" />
          </button>
          <button
            onClick={() => handleScroll("right")}
            className="p-2 rounded border bg-white text-black shadow"
          >
            <FiChevronRight className="text-2xl" />
          </button>
        </div>
      </div>

      {/* Scrollable Content */}
      <div
        ref={scrollRef}
        className="flex overflow-x-scroll scroll-smooth space-x-6 px-4 hide-scroll-bar"
      >
        {newArrivals.map((product) => (
          <div
            key={product._id}
            className="relative min-w-[100%] sm:min-w-[50%] lg:min-w-[30%] relative"
          >
            <img
              src={product.images[0]?.url}
              alt={product.images[0]?.altText || product.name}
              className="w-full h-[500px] object-cover rounded-lg"
            />

            <div className="absolute bottom-0 left-0 right-0 bg-black/50 backdrop-blur-md text-white p-4 rounded-b-lg">
              <Link to={`/product/₹{product._id}`} className="block">
                <h4 className="font-medium">{product.name}</h4>
                <p className="mt-1">₹{product.price}</p>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NewArrivals;

import React, { useEffect, useState } from "react";
import { toast } from "sonner";
const selectedProduct = [
  {
    name: "Stylish Jacket",
    price: 1200,
    originalPrice: 1500,
    description: "Stylish Adidas Jacket For womens",
    brand: "Adidas",
    material: "leather",
    sizes: ["S", "M", "L", "XL"],
    colors: ["Red", "Black"],
    images: [
      {
        url: "https://images.pexels.com/photos/1926769/pexels-photo-1926769.jpeg",
        alt: "stylish jackets",
      },
      {
        url: "https://images.pexels.com/photos/1021693/pexels-photo-1021693.jpeg",
        alt: "stylish jackets",
      },
    ],
  },
  {
    name: "Casual Hoodie",
    price: 800,
    originalPrice: 1000,
    description: "",
    brand: "Nike",
    material: "cotton",
    sizes: ["M", "L", "XL"],
    colors: ["Gray", "Navy Blue"],
    images: [
      {
        url: "https://images.pexels.com/photos/6311396/pexels-photo-6311396.jpeg",
        alt: "casual hoodie",
      },
      {
        url: "https://images.pexels.com/photos/1032118/pexels-photo-1032118.jpeg",
        alt: "casual hoodie",
      },
    ],
  },
  {
    name: "Denim Jeans",
    price: 1500,
    originalPrice: 1800,
    description: "",
    brand: "Levi's",
    material: "denim",
    sizes: ["28", "30", "32", "34", "36"],
    colors: ["Blue", "Dark Blue"],
    images: [
      {
        url: "https://images.pexels.com/photos/2983464/pexels-photo-2983464.jpeg",
        alt: "denim jeans",
      },
      {
        url: "https://images.pexels.com/photos/2983465/pexels-photo-2983465.jpeg",
        alt: "denim jeans",
      },
    ],
  },
  {
    name: "Classic T-Shirt",
    price: 500,
    originalPrice: 700,
    description: "",
    brand: "H&M",
    material: "cotton",
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: ["White", "Black", "Green"],
    images: [
      {
        url: "https://images.pexels.com/photos/1002648/pexels-photo-1002648.jpeg",
        alt: "classic t-shirt",
      },
      {
        url: "https://images.pexels.com/photos/4041683/pexels-photo-4041683.jpeg",
        alt: "classic t-shirt",
      },
    ],
  },
];

const ProductDetail = () => {
  const product = selectedProduct[0];
  const [mainImg, setMainImg] = useState("");
  const [selectedSize, setSelectedSize] = useState("");
  const [selectedColor, setSelectedColor] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [isButtonDisabled, setButtonDisabled] = useState(false);
  const handleAddToCart = () => {
    if (!selectedSize || !selectedColor) {
      toast.error("Please select a size and color before adding to cart", {
        duration: 1000,
      });
      return;
    }
    setButtonDisabled(true);
    setTimeout(() => {
      toast.success("Product added to cart!", {
        duration: 1000,
      });
      setButtonDisabled(false);
    }, 500);
  };
  useEffect(() => {
    if (product?.images?.length > 0) {
      setMainImg(product.images[0].url);
    }
  }, [product]);

  const handleDecrement = () => {
    setQuantity((prev) => (prev > 1 ? prev - 1 : 1));
  };

  const handleIncrement = () => {
    setQuantity((prev) => prev + 1);
  };

  return (
    <div className="p-6 mt-3">
      <div className="max-w-6xl mx-auto bg-white p-8 rounded-lg">
        <div className="flex flex-col md:flex-row">
          {/* left thumbnail */}
          <div className="hidden md:flex flex-col space-y-4 mr-6 ">
            {product.images.map((image, idx) => (
              <img
                src={image.url}
                alt={image.alt}
                key={idx}
                className={`w-32 h-32 object-cover rounded-lg cursor-pointer border-2 ${
                  mainImg === image.url ? "border-black" : "border-gray-300"
                }`}
                onClick={() => setMainImg(image.url)}
              />
            ))}
          </div>
          {/* Main Image */}
          <div className="md:w-110">
            <div className="mb-4">
              <img
                src={mainImg}
                alt={product.images[0].alt}
                className="w-full h-auto object-cover rounded-lg"
              />
            </div>
          </div>
          {/* Mobile Tumbnail */}
          <div className="md:hidden flex overflow-x-scroll space-x-4 mb-4">
            {product.images.map((image, idx) => (
              <img
                src={image.url}
                alt={image.alt}
                key={idx}
                className={`w-32 h-32 object-cover rounded-lg cursor-pointer border-2 ${
                  mainImg === image.url ? "border-black" : "border-gray-300"
                }`}
                onClick={() => setMainImg(image.url)}
              />
            ))}
          </div>
          {/* Right side */}
          <div className="md:w-1/2 md:ml-10">
            <h1 className="text-2xl md:text-3xl font-semibold mb-2">
              {product.name}
            </h1>
            <p className="text-lg text-gray-600 mb-1 line-through text-red-800">
              ₹{product.originalPrice}
            </p>
            <p className="text-xl text-gray-500 mb-2 ml-2">₹{product.price}</p>
            <p className="text-xl text-gray-600 mb-4">{product.description}</p>

            <div className="mb-4">
              <p className="text-gray-700 ">Color:</p>
              <div className="flex gap-2 mt-2">
                {product.colors.map((color) => (
                  <button
                    key={color}
                    onClick={() => setSelectedColor(color)}
                    className={`w-8 h-8 rounded-full border ${
                      selectedColor === color
                        ? "ring-2 ring-offset-2 ring-black"
                        : "border-gray-300"
                    }`}
                    style={{
                      backgroundColor: color.toLocaleLowerCase(),
                      filter: "brightness(0.5)",
                    }}
                  ></button>
                ))}
              </div>
            </div>

            <div className="mb-4 ">
              <p className="text-gray-700">Sizes:</p>
              <div className="flex gap-2 mt-2">
                {product.sizes.map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`px-4 py-2 rounded border transition-all duration-150 ${
                      selectedSize === size
                        ? "bg-black text-white border-black"
                        : "hover:bg-gray-800 hover:text-white"
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>
            <div className="mb-6">
              <p className="text-gray-700">Quantity:</p>
              <div className="flex items-center space-x-4 mt-2">
                <button
                  onClick={handleDecrement}
                  className="px-2 py-1 bg-gray-200 rounded text-lg hover:bg-gray-800 hover:text-white"
                >
                  -
                </button>
                <span className="text-lg mt-1.5">{quantity}</span>
                <button
                  onClick={handleIncrement}
                  className="px-2 py-1 bg-gray-200 rounded text-lg hover:bg-gray-800 hover:text-white"
                >
                  +
                </button>
              </div>
            </div>
            <button
              onClick={handleAddToCart}
              disabled={isButtonDisabled}
              className={`bg-black text-white py-2 px-6 rounded w-full mb-4 ${
                isButtonDisabled
                  ? "cursor-not-allowed opacity-50"
                  : "hover:bg-gray-500"
              }`}
            >
              {isButtonDisabled ? "adding..." : "ADD TO CART"}
            </button>
            <div className="mt-10 text-gray-700">
              <h3 className="text-xl font-bold mb-4">Characteristics:</h3>
              <table className="w-full text-left text-sm text-gray-600">
                <tbody>
                  <tr>
                    <td className="py-1">Brand</td>
                    <td className="py-1">{product.brand}</td>
                  </tr>
                  <tr>
                    <td className="py-1">Material</td>
                    <td className="py-1">{product.material}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;

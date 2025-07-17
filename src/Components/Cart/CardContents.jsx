import React from "react";
import { RiDeleteBin3Line } from "react-icons/ri";

const CardContents = () => {
  const cartProducts = [
    {
      productId: 1,
      name: "T-shirt",
      size: "M",
      color: "Black",
      quantity: 1,
      price: 1050,
      image: "https://picsum.photos/200?random=1",
    },
    {
      productId: 2,
      name: "T-shirt",
      size: "L",
      color: "Red",
      quantity: 1,
      price: 1500,
      image: "https://picsum.photos/200?random=2",
    },
    {
      productId: 3,
      name: "T-shirt",
      size: "M",
      color: "Green",
      quantity: 1,
      price: 1599,
      image: "https://picsum.photos/200?random=3",
    },
  ];

  return (
    <div>
      {cartProducts.map((product, idx) => (
        <div
          key={idx}
          className="flex items-start justify-between py-4 border-b"
        >
          <div className="flex items-start">
            <img
              src={product.image}
              alt={product.name}
              className="w-20 h-24 object-cover mr-4 rounded"
            />
            <div>
              <h3 className="font-semibold">{product.name}</h3>
              <p className="text-sm text-gray-600">Size: {product.size}</p>
              <p className="text-sm text-gray-600">Color: {product.color}</p>
              <button className="border rounded px-2 py-1 text-xl font-medium">
                +
              </button>
              <span className="mx-4">{product.quantity}</span>
              <button className="border rounded px-2 py-1 text-xl font-medium">
                -
              </button>
            </div>
          </div>
          <div>
            <p className="text-sm font-medium">₹{product.price}</p>
            <button>
              <RiDeleteBin3Line className="h-6 w-6 mt-2 text-red-600" />
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CardContents;

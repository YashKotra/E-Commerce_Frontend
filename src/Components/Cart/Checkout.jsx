import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import RazorPayButton from "./RazorPayButton";

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

const Checkout = () => {
  const navigate = useNavigate();
  const subtotal = cartProducts.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const shippingCharge = subtotal > 1000 ? 0 : 50;
  const totalCharge = subtotal + shippingCharge;

  const [shippingAddress, setShippingAddress] = useState({
    firstName: "",
    lastName: "",
    address: "",
    city: "",
    pinCode: "",
    country: "",
    phone: "",
  });
  const [checkoutID, setCheckoutID] = useState();
  const handleCheckout = (e) => {
    e.preventDefault();
    setCheckoutID(123);
  };

  const handlePaymentSuccess = (details) => {
    console.log("Payment SuccessFull");
    navigate("/order-confirmation");
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-7xl mx-auto py-10 px-6 tracking-tighter">
      {/* left section */}
      <div className="bg-white rounded-lg p-6">
        <h2 className="text-2xl font-normal uppercase mb-6">Checkout</h2>
        <form onSubmit={handleCheckout}>
          <h3 className="text-lg mb-4">Contact Details</h3>
          <div className="mb-4">
            <label className="block text-gray-700" htmlFor="email">
              Email
            </label>
            <input
              type="text"
              id="email"
              placeholder="Enter your Email"
              className="w-full border p-2 rounded"
              disabled
              value="user@example.com"
            />
          </div>

          <h3 className="text-lg mb-4">Delivery</h3>
          <div className="mb-4 grid grid-cols-2 gap-4">
            <div>
              <label className="block text-gray-700" htmlFor="firstName">
                First Name
              </label>
              <input
                type="text"
                id="firstName"
                placeholder="Enter your First Name"
                value={shippingAddress.firstName}
                onChange={(e) =>
                  setShippingAddress({
                    ...shippingAddress,
                    firstName: e.target.value,
                  })
                }
                className="w-full border p-2 rounded"
                required
              />
            </div>
            <div>
              <label className="block text-gray-700" htmlFor="lastName">
                Last Name
              </label>
              <input
                type="text"
                id="lastName"
                placeholder="Enter your Last Name"
                value={shippingAddress.lastName}
                onChange={(e) =>
                  setShippingAddress({
                    ...shippingAddress,
                    lastName: e.target.value,
                  })
                }
                className="w-full border p-2 rounded"
                required
              />
            </div>
          </div>

          <div className="mb-4">
            <label className="block text-gray-700" htmlFor="address">
              Address
            </label>
            <input
              type="text"
              id="address"
              placeholder="Enter your Address"
              value={shippingAddress.address}
              onChange={(e) =>
                setShippingAddress({
                  ...shippingAddress,
                  address: e.target.value,
                })
              }
              className="w-full border p-2 rounded"
              required
            />
          </div>

          <div className="mb-4 grid grid-cols-2 gap-4">
            <div>
              <label className="block text-gray-700" htmlFor="city">
                City
              </label>
              <input
                type="text"
                id="city"
                placeholder="Enter your City"
                value={shippingAddress.city}
                onChange={(e) =>
                  setShippingAddress({
                    ...shippingAddress,
                    city: e.target.value,
                  })
                }
                className="w-full border p-2 rounded"
                required
              />
            </div>
            <div>
              <label className="block text-gray-700" htmlFor="pinCode">
                Pincode
              </label>
              <input
                type="text"
                id="pinCode"
                placeholder="Enter your Pincode"
                value={shippingAddress.pinCode}
                onChange={(e) =>
                  setShippingAddress({
                    ...shippingAddress,
                    pinCode: e.target.value,
                  })
                }
                className="w-full border p-2 rounded"
                required
              />
            </div>
          </div>

          <div className="mb-4">
            <label className="block text-gray-700" htmlFor="country">
              Country
            </label>
            <input
              type="text"
              id="country"
              placeholder="Enter your Country"
              value={shippingAddress.country}
              onChange={(e) =>
                setShippingAddress({
                  ...shippingAddress,
                  country: e.target.value,
                })
              }
              className="w-full border p-2 rounded"
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700" htmlFor="phone">
              Contact Number
            </label>
            <input
              type="text"
              id="phone"
              placeholder="Enter your Contact Number"
              value={shippingAddress.phone}
              onChange={(e) =>
                setShippingAddress({
                  ...shippingAddress,
                  phone: e.target.value,
                })
              }
              className="w-full border p-2 rounded"
              required
            />
          </div>
          <div className="mb-6">
            {!checkoutID ? (
              <button
                type="submit"
                className="w-full bg-black text-white px-6 py-2 rounded hover:bg-gray-800"
              >
                Continue to Payment
              </button>
            ) : (
              <div>
                <h2 className="text-lg mb-4">Pay with RazorPay</h2>
                {/*RazorPay*/}
                <RazorPayButton
                  amount={100}
                  onSuccess={handlePaymentSuccess}
                  onError={(err) => alert("Payment Failed. Try Again.")}
                />
              </div>
            )}
          </div>
        </form>
      </div>

      {/* Right Content */}
      <div className=" bg-gray-50 p-6 rponded-lg ">
        <h3 className="text-lg font-medium mb-4">Order Summary</h3>
        <div className="border-t py-4 mb-4">
          {cartProducts.map((product) => (
            <div
              className="flex items-start justify-between py-2 border-b"
              key={product.productId}
            >
              <div className="flex items-start">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-20 h-24 object-cover mr-4"
                />
                <div>
                  <h3 className="text-md  ">{product.name}</h3>
                  <p className="text-gray-500">Size: {product.size}</p>
                  <p className="text-gray-500">Color: {product.color}</p>
                </div>
              </div>
              <h2 className="text-lg font-medium">
                ₹{product.price.toLocaleString("en-IN")}
              </h2>
            </div>
          ))}
        </div>
        <div className="flex items-center justify-between py-2 text-lg font-medium mb-4">
          <p>Subtotal</p>
          <p>₹ {subtotal.toLocaleString("en-IN")}</p>
        </div>
        <div className="flex items-center justify-between py-2 text-lg font-medium mb-4">
          <p>Shipping</p>
          <p>{shippingCharge == 0 ? "FREE" : 50}</p>
        </div>

        <div className="border-t py-4 mb-4">
          <div className="flex items-center justify-between py-2 text-lg font-medium mb-4">
            <p>Total</p>
            <p>₹{totalCharge.toLocaleString("en-IN")}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;

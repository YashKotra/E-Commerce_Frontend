const checkOut = {
  _id: "12121",
  createdAt: new Date(),
  checkoutItems: [
    {
      productId: "p001",
      name: "Classic White T-Shirt",
      color: "White",
      size: "M",
      price: 19.99,
      quantity: 2,
      image: "https://picsum.photos/150?random=1",
    },
    {
      productId: "p002",
      name: "Blue Denim Jeans",
      color: "Blue",
      size: "32",
      price: 49.99,
      quantity: 1,
      image: "https://picsum.photos/150?random=2",
    },
  ],
  shippingAddress: {
    address: "123 Main Street",
    city: "New York",
    country: "USA",
  },
};

const OrderConfirmationPage = () => {
  const calculateEstimatedDelivery = (createdAt) => {
    const orderDate = new Date(createdAt);
    orderDate.setDate(orderDate.getDate() + 10);
    return orderDate.toLocaleDateString();
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white">
      <h1 className="text-4xl font-bold text-center text-emerald-700 mb-8">
        Thank You for Your Order!
      </h1>
      {checkOut && (
        <div className="p-6 rounded-lg border">
          <div className="flex justify-between mb-20">
            {/* Order ID and Date */}
            <div>
              <h2 className="text-xl font-semibold">
                Order Id: {checkOut._id}
              </h2>
              <p className="text-gray-700">
                Order Date: {new Date(checkOut.createdAt).toLocaleDateString()}
              </p>
            </div>
            {/* Estimated Delivery */}
            <div>
              <p className="text-emerald-700 text-sm">
                Estimated Delivery:{" "}
                {calculateEstimatedDelivery(checkOut.createdAt)}
              </p>
            </div>
          </div>
          {/* {Ordered Items} */}
          <div className="mb-20">
            {checkOut.checkoutItems.map((item) => (
              <div
                className="flex items-center justify-between mb-4"
                key={item.productId}
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-20 h-24 object-cover rounded-md mr-4"
                />
                <div>
                  <h3 className="text-md font-semibold  ">{item.name}</h3>
                  <p className="text-gray-500">Size: {item.size}</p>
                  <p className="text-gray-500">Color: {item.color}</p>
                </div>
                <div className="ml-auto text-right ">
                  <p className="text-md">
                    ₹{item.price.toLocaleString("en-IN")}
                  </p>
                  <p className="text-md">Quantity: {item.quantity}</p>
                </div>
              </div>
            ))}
          </div>
          {/* Payment and delivery Info */}
          <div className="grid grid-cols-2 gap-8">
            <div>
              <h2 className="text-lg font-semibold mb-2">Payment</h2>
              <p className="text-gray-600">RazorPay</p>
            </div>
            {/* Delivery Info */}
            <div>
              <h4 className="text-lg font-semibold mb-2">Delivery</h4>
              <p className="text-gray-600">
                {checkOut.shippingAddress.address}
              </p>
              <p className="text-gray-600">
                {checkOut.shippingAddress.city},{" "}
                {checkOut.shippingAddress.country}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default OrderConfirmationPage;

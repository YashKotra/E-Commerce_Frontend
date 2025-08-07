// RazorPayButton.jsx
import React from "react";

const RazorPayButton = ({ amount, onSuccess, onError }) => {
  const loadRazorpayScript = () => {
    return new Promise((resolve) => {
      const script = document.createElement("script");
      script.src = "https://checkout.razorpay.com/v1/checkout.js";
      script.onload = () => resolve(true);
      script.onerror = () => resolve(false);
      document.body.appendChild(script);
    });
  };

  const handleRazorpay = async () => {
    const res = await loadRazorpayScript();

    if (!res) {
      alert("Razorpay SDK failed to load. Are you online?");
      return;
    }

    // Simulated hardcoded order response (normally from backend)
    const order = {
      id: "order_LvY6vXpB1o1aAa", // fake order_id from Razorpay
      amount: amount * 100, // Razorpay expects amount in paisa
      currency: "INR",
    };

    const options = {
      key: "rzp_test_YourTestKeyHere", // Replace with your Razorpay Test Key
      amount: order.amount,
      currency: order.currency,
      name: "Demo Company Pvt. Ltd.",
      description: "Test Payment",
      order_id: order.id,
      handler: function (response) {
        console.log("Payment Success:", response);
        onSuccess(response);
      },
      prefill: {
        name: "John Doe",
        email: "john@example.com",
        contact: "9876543210",
      },
      notes: {
        address: "123 Test Street, India",
      },
      theme: {
        color: "#3399cc",
      },
    };

    const rzp = new window.Razorpay(options);
    rzp.on("payment.failed", function (response) {
      console.error("Payment Failed:", response.error);
      onError(response);
    });
    rzp.open();
  };

  return (
    <button
      onClick={handleRazorpay}
      className="w-full bg-emerald-600 text-white px-6 py-2 rounded hover:bg-emerald-700"
    >
      Pay ₹{amount}
    </button>
  );
};

// Test simulation component
const TestRazorPayComponent = () => {
  const handlePaymentSuccess = (response) => {
    alert("Payment Successful!");
    console.log("Razorpay Success Response:", response);
  };

  const handlePaymentFailure = (response) => {
    alert("Payment Failed.");
    console.log("Razorpay Failure Response:", response);
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-4 border rounded shadow">
      <h1 className="text-2xl font-semibold mb-4">
        Simulated Razorpay Checkout
      </h1>
      <RazorPayButton
        amount={500} // ₹500
        onSuccess={handlePaymentSuccess}
        onError={handlePaymentFailure}
      />
    </div>
  );
};

export default TestRazorPayComponent;

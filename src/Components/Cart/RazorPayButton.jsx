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

    const order = await fetch("http://localhost:5000/api/create-order", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ amount: amount * 100 }),
    }).then((res) => res.json());

    const options = {
      key: "YOUR_RAZORPAY_KEY",
      amount: order.amount,
      currency: "INR",
      name: "Your Company Name",
      description: "Test Transaction",
      order_id: order.id,
      handler: function (response) {
        onSuccess(response);
      },
      prefill: {
        name: "John Doe",
        email: "john@example.com",
        contact: "9999999999",
      },
      notes: {
        address: "Your company address",
      },
      theme: {
        color: "#000000",
      },
    };

    const rzp = new window.Razorpay(options);
    rzp.on("payment.failed", function (response) {
      onError(response);
    });
    rzp.open();
  };

  return (
    <button
      onClick={handleRazorpay}
      className="w-full bg-emerald-600 text-white px-6 py-2 rounded hover:bg-emerald-700"
    >
      Pay Now
    </button>
  );
};

export default RazorPayButton;

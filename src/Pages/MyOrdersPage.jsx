import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
const MyOrdersPage = () => {
  const navigate = useNavigate();

  const handleRowClick = (orderId) => {
    navigate(`/order/${orderId}`);
  };
  const [orders, setOrders] = useState([
    {
      img: "https://picsum.photos/400/300?random=1",
      id: "ORD3412",
      date: "2025-07-21",
      address: "123 Main St, Springfield, IL",
      items: 2,
      total: "$78.45",
      status: "Delivered",
    },
    {
      img: "https://picsum.photos/400/300?random=2",
      id: "ORD3413",
      date: "2025-07-18",
      address: "456 Oak Ave, Brooklyn, NY",
      items: 4,
      total: "$145.99",
      status: "Shipped",
    },
    {
      img: "https://picsum.photos/400/300?random=3",
      id: "ORD3414",
      date: "2025-07-16",
      address: "789 Pine St, Austin, TX",
      items: 1,
      total: "$39.90",
      status: "Processing",
    },
    {
      img: "https://picsum.photos/400/300?random=4",
      id: "ORD3415",
      date: "2025-07-10",
      address: "102 Maple Dr, Seattle, WA",
      items: 3,
      total: "$92.75",
      status: "Cancelled",
    },
    {
      img: "https://picsum.photos/400/300?random=5",
      id: "ORD3416",
      date: "2025-07-09",
      address: "55 Elm Rd, Miami, FL",
      items: 5,
      total: "$159.20",
      status: "Delivered",
    },
  ]);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 ">
      <h3 className=" ml-2 text-xl font-semibold mb-4">My Orders</h3>
      <div>
        <table className="min-w-full rounded-lg">
          <thead className="bg-gray-50">
            <tr>
              {[
                "Image",
                "Order ID",
                "Created",
                "Shipping Address",
                "Items",
                "Total",
                "Status",
              ].map((col) => (
                <th
                  key={col}
                  className="px-4 py-2 text-left text-sm font-medium text-gray-700"
                >
                  {col}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {orders.map((order) => (
              <tr
                key={order.id}
                onClick={() => handleRowClick(order.id)}
                className="border-b hover:border-gray-50 cursor-pointer"
              >
                <td className="px-4 py-2 text-sm">
                  <img
                    src={order.img}
                    alt="order"
                    className="w-24 h-20 object-cover rounded-md"
                  />
                </td>
                <td className="px-4 py-2 text-sm">{order.id}</td>
                <td className="px-4 py-2 text-sm">{order.date}</td>
                <td className="px-4 py-2 text-sm">{order.address}</td>
                <td className="px-4 py-2 text-sm">{order.items}</td>
                <td className="px-4 py-2 text-sm">{order.total}</td>
                <td className="px-4 py-2 text-sm">
                  <span
                    className={`inline-block px-2 py-1 rounded-full text-xs font-semibold ${
                      order.status === "Delivered"
                        ? "bg-green-100 text-green-800"
                        : order.status === "Shipped"
                        ? "bg-blue-100 text-blue-800"
                        : "bg-yellow-100 text-yellow-800"
                    }`}
                  >
                    {order.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyOrdersPage;

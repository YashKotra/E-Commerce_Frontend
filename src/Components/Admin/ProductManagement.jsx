import { useState } from "react";
import { Link } from "react-router-dom";

const ProductManagement = () => {
  const [products, setProducts] = useState([
    {
      _id: "101",
      name: "Classic White T-Shirt",
      description: "100% cotton comfortable white t-shirt.",
      price: 19.99,
      category: "T-Shirts",
      stock: 50,
    },
    {
      _id: "102",
      name: "Blue Denim Jeans",
      description: "Slim fit blue denim jeans with stretch fabric.",
      price: 49.99,
      category: "Jeans",
      stock: 30,
    },
    {
      _id: "103",
      name: "Black Leather Jacket",
      description: "Stylish black leather jacket with zipper.",
      price: 149.99,
      category: "Jackets",
      stock: 15,
    },
    {
      _id: "104",
      name: "Red Hoodie",
      description: "Warm red hoodie with front pockets.",
      price: 39.99,
      category: "Hoodies",
      stock: 40,
    },
    {
      _id: "105",
      name: "Running Sneakers",
      description: "Lightweight running sneakers for daily workouts.",
      price: 89.99,
      category: "Footwear",
      stock: 20,
    },
  ]);

  const handleDelete = (id) => {
    if (window.confirm("Are you sure want to delete the Product")) {
      console.log("Delete Product with id", id);
    }
    setProducts((prev) => prev.filter((product) => product._id !== id));
  };

  return (
    <div className="flex-1 p-6 overflow-y-auto h-screen">
      <h1 className="text-3xl font-bold mb-6">Product Management</h1>

      <div className="bg-white p-6 rounded-lg overflow-x-auto">
        <h2 className="text-2xl font-bold mb-4">Products</h2>
        <table className="min-w-full text-left text-sm">
          <thead className="bg-gray-100 text-xs uppercase">
            <tr>
              <th className="py-3 px-4">Name</th>
              <th className="py-3 px-4">Price</th>
              <th className="py-3 px-4">Stock</th>
              <th className="py-3 px-4">Actions</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => (
              <tr
                key={product._id}
                className="border-b hover:bg-gray-50 transition"
              >
                <td className="py-3 px-4">{product.name}</td>
                <td className="py-3 px-4">${product.price.toFixed(2)}</td>
                <td className="py-3 px-4">{product.stock}</td>
                <td className="py-3 px-4 space-x-2">
                  <Link
                    to={`/admin/products/${product._id}/edit`}
                    className="bg-yellow-500 text-white px-2 py-1 rounded hover:bg-yellow-300"
                  >
                    Edit
                  </Link>
                  <button
                    onClick={() => handleDelete(product._id)}
                    className="bg-red-600 text-white px-2 py-1 rounded hover:bg-red-400"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
            {products.length === 0 && (
              <tr>
                <td colSpan="4" className="text-center py-6 text-gray-500">
                  No products found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ProductManagement;

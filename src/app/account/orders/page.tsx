"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { FiPackage, FiChevronDown, FiChevronUp } from 'react-icons/fi';

const OrderHistory: React.FC = () => {
  // Example order history data; in a real app, this would be fetched from an API
  const [orders, setOrders] = useState([
    {
      id: 1,
      orderNumber: "123456",
      date: "2024-08-15",
      status: "Delivered",
      total: "$54.99",
      items: [
        { name: "Moringa Powder", quantity: 2, price: "$19.99" },
        { name: "Moringa Tea", quantity: 1, price: "$14.99" },
      ],
    },
    {
      id: 2,
      orderNumber: "123457",
      date: "2024-07-10",
      status: "Shipped",
      total: "$29.99",
      items: [
        { name: "Moringa Capsules", quantity: 1, price: "$24.99" },
        { name: "Moringa Oil", quantity: 1, price: "$29.99" },
      ],
    },
  ]);

  const [expandedOrderId, setExpandedOrderId] = useState<number | null>(null);

  const toggleOrderDetails = (id: number) => {
    setExpandedOrderId(expandedOrderId === id ? null : id);
  };

  return (
    <section className="py-16 bg-gray-100 text-gray-800">
      <div className="container mx-auto px-4">
        {/* Title */}
        <h2 className="text-4xl font-bold text-green-800 mb-8 text-center">Your Order History</h2>

        {/* Order List */}
        {orders.length > 0 ? (
          <div className="space-y-6">
            {orders.map((order) => (
              <div key={order.id} className="bg-white p-6 rounded-lg shadow-lg">
                <div className="flex justify-between items-center">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800">Order #{order.orderNumber}</h3>
                    <p className="text-gray-600">Date: {order.date}</p>
                    <p className="text-gray-600">Status: <span className={`font-semibold ${order.status === 'Delivered' ? 'text-green-600' : 'text-yellow-600'}`}>{order.status}</span></p>
                    <p className="text-gray-600">Total: {order.total}</p>
                  </div>
                  <button
                    onClick={() => toggleOrderDetails(order.id)}
                    className="flex items-center text-green-600 hover:text-green-800 focus:outline-none"
                  >
                    {expandedOrderId === order.id ? (
                      <>
                        <FiChevronUp className="mr-2" />
                        Hide Details
                      </>
                    ) : (
                      <>
                        <FiChevronDown className="mr-2" />
                        View Details
                      </>
                    )}
                  </button>
                </div>
                {expandedOrderId === order.id && (
                  <div className="mt-6 border-t pt-4">
                    <h4 className="text-lg font-semibold text-gray-800 mb-4">Items in this Order:</h4>
                    <ul className="space-y-2">
                      {order.items.map((item, index) => (
                        <li key={index} className="flex justify-between">
                          <span className="text-gray-700">{item.name} (x{item.quantity})</span>
                          <span className="text-gray-700">{item.price}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <FiPackage className="w-16 h-16 text-gray-300 mx-auto mb-4" />
            <h3 className="text-2xl font-semibold text-gray-800">No orders yet</h3>
            <p className="text-gray-600 mt-2">You haven&apos;t placed any orders yet. Start shopping now!</p>
            <Link href="/shop" className="mt-4 inline-block px-6 py-3 bg-green-600 text-white font-medium rounded-lg shadow-md hover:bg-green-700 transition duration-200">
              Browse Products
            </Link>
          </div>
        )}
      </div>
    </section>
  );
};

export default OrderHistory;

"use client";

import { useState } from "react";
import OrderDisplay from "./OrderDisplay";

const TrackOrder = () => {
  const [trackingId, setTrackingId] = useState("");
  const [isOrderFound, setIsOrderFound] = useState(false);

  const handleTrackOrder = async () => {
    setIsOrderFound(!!trackingId);
    try {
      const response = await fetch("api/order-status", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({}),
      });

      if (response.status === 201) {
        console.log("Product created successfully");
      } else {
        console.error("Failed to create a product");
      }
    } catch (error) {
      console.error("An error occurred while creating a product:", error);
    }
  };
  return (
    <>
      <div className="flex flex-col items-center justify-center">
        <h2 className="text-2xl font-bold mb-4 font-montserrat">Track Order</h2>
        <div className="mb-4 w-62">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="trackingId"
          >
            Tracking ID:
          </label>
          <input
            type="text"
            id="trackingId"
            value={trackingId}
            onChange={(e) => setTrackingId(e.target.value)}
            className="w-full border rounded-md p-2"
          />
        </div>
        <button
          onClick={handleTrackOrder}
          className="bg-blue-400 text-black px-4 py-2 rounded-md hover:bg-blue-600"
        >
          Track Orders
        </button>
        {isOrderFound ? (
          <OrderDisplay />
        ) : (
          <p className="mt-4 text-red-500">
            No record found. Note: ... (your note text)
          </p>
        )}
      </div>
    </>
  );
};

export default TrackOrder;

import React, { useState } from "react";
import Link from "next/link";
import { useCart } from "/CartContext"; 
import { useRouter } from "next/router";

export default function Payment() {
  const { cartItems, clearCart } = useCart(); // Access clearCart from the CartContext
  const [paymentMethod, setPaymentMethod] = useState("Gcash");
  const router = useRouter(); // To redirect after successful purchase

  const total = cartItems.reduce((sum, item) => sum + (item.price * item.quantity || 0), 0);

  const handlePurchase = () => {
    // Clear the cart on successful purchase
    clearCart();

    // Redirect to confirmation page or show success message
    router.push("/confirmation"); // Or any confirmation route
  };

  return (
    <div className="min-h-screen bg-[#F8C794] px-10 py-10">
      <div className="w-full max-w-xl mx-auto">
        <h1 className="text-2xl font-bold mb-6">Payment</h1>
        <div className="bg-[#F8E2B0] rounded-xl p-6 shadow-lg">
          {/* Delivery Address */}
          <div className="mb-4">
            <h2 className="text-lg font-bold">Delivery Address</h2>
            <p>Askia Bernales</p>
            <p>Salindatu St. Jerome Ext. Rafael Castillo, Davao City</p>
            <p>(+63)09******43</p>
          </div>

          {/* Orders Total */}
          <div className="mb-6">
            <h2 className="text-lg font-bold">Orders Total</h2>
            <ul>
              {cartItems.map((item) => (
                <li key={item.id} className="flex justify-between">
                  <span>{item.name} x{item.quantity}</span>
                  <span>₱{item.price * item.quantity}</span>
                </li>
              ))}
            </ul>
            <div className="mt-4 text-lg font-bold">Total: ₱{total.toFixed(2)}</div>
          </div>

          {/* Payment Method */}
          <div className="mb-6">
            <h2 className="text-lg font-bold">Payment Method</h2>
            <div className="flex items-center">
              <input
                type="radio"
                id="cod"
                name="paymentMethod"
                value="COD"
                checked={paymentMethod === "COD"}
                onChange={() => setPaymentMethod("COD")}
                className="mr-2"
              />
              <label htmlFor="cod">Cash on Delivery</label>
            </div>
            <div className="flex items-center mt-2">
              <input
                type="radio"
                id="gcash"
                name="paymentMethod"
                value="Gcash"
                checked={paymentMethod === "Gcash"}
                onChange={() => setPaymentMethod("Gcash")}
                className="mr-2"
              />
              <label htmlFor="gcash">Gcash</label>
            </div>
          </div>

          {/* Purchase Button */}
          <button
            onClick={handlePurchase} // Call the handlePurchase function on click
            className="w-full bg-red-500 text-white py-3 rounded-full shadow-md"
          >
            Purchase
          </button>
        </div>
      </div>
    </div>
  );
}
  
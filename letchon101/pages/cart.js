import React from "react";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import { MdDelete } from "react-icons/md";
import { useCart } from "/CartContext"; 

export default function Cart() {
  const { cartItems, removeFromCart } = useCart();

  const handleDelete = (itemId) => {
    removeFromCart(itemId);
  };

  const total = cartItems.reduce((sum, item) => sum + (item.price * item.quantity || 0), 0);

  const handleCheckout = () => {
    if (cartItems.length === 0) {
      alert("Your cart is empty. Please add items before checking out.");
    } else {
      // Proceed to checkout
    }
  };

  return (
    <div>
      <Head>
        <title>Cart</title>
      </Head>

      <div className="w-full max-w-1xl mx-auto flex items-center justify-between border-b-2 px-2 py-7 h-16 bg-black shadow-md">
        <Link href="/homepage">
          <button className="flex items-center space-x-8">
            <Image src="/Vector.png" alt="Letchon Logo" width={40} height={35} className="object-contain" />
          </button>
        </Link>
      </div>

      <div className="flex flex-col items-start justify-start bg-[#F8C794] min-h-screen px-10 py-10">
        <div className="flex justify-between w-full mb-6">
          <div className="text-2xl font-bold">
            My Orders
            <p className="text-sm text-gray-700">{cartItems.length} items in your cart</p>
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-6 w-full">
          <div className="bg-[#F8E2B0] rounded-xl shadow-lg p-4 w-full md:w-2/3">
            {cartItems.length === 0 ? (
              <p className="text-center text-lg font-bold">Your cart is empty.</p>
            ) : (
              cartItems.map((item) => (
                <div key={item.id} className="flex justify-between items-center border-b pb-4 mb-4">
                  <div className="flex items-center space-x-4">
                    <Image
                      src={item.imageSrc || '/default-image.png'} 
                      alt={item.name}
                      width={80}
                      height={80}
                      className="rounded-lg"
                    />
                    <div>
                      <h3 className="text-lg font-semibold">{item.name}</h3>
                      <p>x{item.quantity}</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <p className="font-bold">₱{item.price * item.quantity}</p>
                    <button className="text-red-500 hover:text-red-700" onClick={() => handleDelete(item.id)}>
                      <MdDelete className="text-2xl" />
                    </button>
                  </div>
                </div>
              ))
            )}

            <div className="flex justify-end mt-4">
              <p className="text-lg font-bold">Total: ₱{total.toFixed(2)}</p>
            </div>
          </div>

          <div className="bg-[#3A3125] text-white p-4 rounded-xl shadow-lg w-full md:w-1/3">
            <h3 className="text-xl font-bold mb-4">Summary</h3>
            <div className="space-y-2">
              {cartItems.map((item) => (
                <div key={item.id} className="flex justify-between">
                  <p>{item.name} x{item.quantity}</p>
                  <p>₱{item.price * item.quantity}</p>
                </div>
              ))}
              <div className="border-t border-gray-500 mt-4"></div>
              <div className="flex justify-between text-xl font-bold mt-2">
                <p>Total:</p>
                <p>₱{total.toFixed(2)}</p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-end mt-6 w-full ">
          <button 
            className="bg-[#3A3125] text-2xl font-bold px-8 py-4 bg-white text-black rounded-full shadow-md hover:bg-gray-300"
            onClick={handleCheckout}
          >
            Check out
          </button>
        </div>
      </div>
    </div>
  );
}

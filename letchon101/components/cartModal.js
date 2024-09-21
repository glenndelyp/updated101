// components/Modal.js
import React from 'react';
import Image from 'next/image';

const Modal = ({ showModal, selectedViand, closeModal, addToCart }) => {
  if (!showModal || !selectedViand) return null;

  console.log("Selected Viand:", selectedViand); 


  const handleAddToCart = () => {
    addToCart(selectedViand);
    alert("Added to cart!");
    closeModal();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-[#FFE8C2] p-6 rounded-lg shadow-lg max-w-md w-full relative flex flex-col min-h-screen overflow-y-auto">
        <button
          className="absolute top-2 right-2 text-gray-600 hover:text-gray-900 text-2xl font-bold"
          onClick={closeModal}
        >
          &times;
        </button>

        <div className="rounded-xl bg-[#FFE8C2] p-4 shadow-lg w-full">
          <Image
            src={selectedViand.imageSrc}
            alt={selectedViand.name}
            width={300}
            height={200}
            className="object-cover rounded-lg"
          />
          <h2 className="text-2xl font-bold mt-4">{selectedViand.name}</h2>
          <p className="text-md text-gray-600 mt-2">{selectedViand.description}</p>
          <div className="flex justify-between items-center mt-4">
            <p className="text-lg font-bold text-black">₱{selectedViand.price}</p>
            <button
              className="px-6 py-2 bg-orange-500 text-white rounded-full font-semibold hover:bg-orange-600 transition"
              onClick={handleAddToCart}
            >
              Add to cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;

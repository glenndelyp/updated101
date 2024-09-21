import React from "react";
import Image from "next/image";

const MenuModal = ({ isVisible, onClose, selectedMenu, addToCart }) => {
  if (!isVisible || !selectedMenu) return null; // Only render if visible and selectedMenu exists

  const handleClose = (e) => {
    if (e.target.id === "wrapper") {
      onClose(); // Close the modal when clicking outside
    }
  };

  // Define the handleAddToCart function
  const handleAddToCart = () => {
    addToCart(selectedMenu); // Call addToCart passed as prop with selected menu
    onClose(); // Optionally close the modal after adding to cart
  };

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 backdrop-blur-sm"
      id="wrapper"
      onClick={handleClose}
    >
      <div className="bg-[#d1b38f] rounded-lg p-6 w-11/12 md:w-3/4 lg:w-2/3 xl:w-1/2 shadow-lg relative flex flex-col md:flex-row">
        {/* Close Button */}
        <button
          className="absolute top-4 right-4 text-black text-2xl font-bold"
          onClick={onClose}
        >
          X
        </button>

        {/* Modal Content */}
        <div className="md:w-1/2 flex justify-center items-center">
          <Image
            src={selectedMenu.imageSrc}
            alt={selectedMenu.name}
            width={300}
            height={300}
            className="object-cover rounded-lg"
          />
        </div>

        <div className="md:w-1/2 p-4">
          <h2 className="text-3xl font-bold mb-4">{selectedMenu.name}</h2>

          <h3 className="text-1xl font-semibold mb-2">Inclusions:</h3>

          {/* Description as bullet points */}
          <ul className="text-lg text-black mb-4 space-y-2 list-disc list-inside">
            {selectedMenu.details?.map((detail, index) => (
              <li key={index} className="text-base text-gray-800">
                {detail}
              </li>
            ))}
          </ul>

          {/* Price and Add to Cart */}
          <div className="flex items-center justify-between mt-6 ">
            <div className="flex items-center bg-white rounded-lg border-2 border-black px-4 py-2 ">
              <p className="text-xl font-bold text-black">₱{selectedMenu.price}</p>
            </div>
            <button
              className="bg-[#ff6d00] text-black py-2 px-6 rounded-lg hover:bg-[#ff9a3c] font-bold text-lg transition duration-200"
              onClick={handleAddToCart} // Use the handleAddToCart function
            >
              Add to cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MenuModal;

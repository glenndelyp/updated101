
import React, { useState } from "react";
import Image from "next/image";
import Head from "next/head";
import Link from "next/link";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
import { useCart } from "/CartContext"; 
import Modal from "../components/cartModal"; 

const Viands = () => {
  const [selectedViand, setSelectedViand] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const { addToCart } = useCart();

  const handleViandClick = (viand) => {
    setSelectedViand(viand);
    setShowModal(true);
  };

  const openModal = (viand) => {
    setSelectedViand(viand);
    setShowModal(true);
  };
  

  const closeModal = () => {
    setShowModal(false);
    setSelectedViand(null);
  };

  return (
    <div>
      <Head>
        <title>Viands Page</title>
      </Head>
      <div className="w-full max-w-1xl mx-auto flex items-center justify-between border-b-2 px-2 py-7 h-16 bg-black shadow-md">
        <div className="flex items-center space-x-8">
          <Image src="/Vector.png" alt="Letchon Logo" width={40} height={35} className="object-contain" />
        </div>
        <div className="flex-grow flex justify-center">
          <div className="flex space-x-6">
            <Link href="/homepage"><button className="text-white hover:text-orange-500">Home</button></Link>
            <Link href="/letchon"><button className="text-white hover:text-orange-500">Lechon</button></Link>
            <Link href="/viands"><button className="text-white hover:text-orange-500">Viands</button></Link>
            <Link href="/menu"><button className="text-white hover:text-orange-500">Menu</button></Link>
            <Link href="/aboutus"><button className="text-white hover:text-orange-500">About Us</button></Link>
          </div>
        </div>
        <div className="flex items-center space-x-8">
          <Link href="/profile"><button className="flex items-center justify-center p-2"><Image src="/profile.png" alt="Profile" width={24} height={24} /></button></Link>
          <Link href="/cart"><button className="flex items-center justify-center p-2"><Image src="/cart.png" alt="Cart" width={24} height={24} /></button></Link>
        </div>
      </div>

      <div className="flex flex-col items-center justify-center py-10" style={{ backgroundColor: '#F8C794' }}>
        <main className="flex flex-col justify-center items-center w-full flex-1 px-20 text-center">
          <h1 className="text-4xl font-bold mb-6 text-orange-700">Viands</h1>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
            {viandsData.map((viand, index) => (
              <div
                key={index}
                className="bg-white shadow-lg rounded-lg p-4 cursor-pointer"
                onClick={() => handleViandClick(viand)}
              >
                <Image src={viand.imageSrc} alt={viand.name} width={300} height={200} className="object-cover rounded-lg" />
                <h3 className="text-lg font-semibold mt-4">{viand.name}</h3>
                <p className="text-lg font-bold text-gray-800">₱{viand.price}</p>
              </div>
            ))}
          </div>
        </main>
      </div>

      <Modal 
        showModal={showModal} 
        selectedViand={selectedViand} 
        closeModal={closeModal} 
        addToCart={addToCart} 
      />
    </div>
  );
};

const viandsData = [
  {
    id:1,
    name: "Lumpiang Shanghai",
    price: 300,
    imageSrc: "/lumpia.png",
    description: "Crispy spring rolls filled with a mix of ground pork and vegetables.",
  },
  {
    id:2,
    name: "Fried Chicken",
    price: 600,
    imageSrc: "/wings.png",
    description: "Golden fried chicken wings, seasoned to perfection.",
  },
  {
    id:3,
    name: "Sweet & Sour Fish",
    price: 500,
    imageSrc: "/sweet.png",
    description: "Tender fish fillets served in a sweet and tangy sauce.",
  },
  {
    id:4,
    name: "Chicken Curry",
    price: 800,
    imageSrc: "/chicken-curry.png",
    description: "Rich and creamy chicken curry with a hint of spice.",
  },
  {
    id:5,
    name: "Pork Adobo",
    price: 800,
    imageSrc: "/pork.png",
    description: "Chicken adobo, also known as adobong manok, is a quintessential filipino braised chicken, marinated and stewed with vinegar, soy sauce, garlic, bay leaves, black peppercorns.",
  },
  {
    id:6,
    name: "Buttered Shrimp",
    price: 500,
    imageSrc: "/shrimp.png",
    description: "Succulent shrimp sautéed in butter and garlic.",
  },
  {
    id:7,
    name: "Pork Afritada",
    price: 600,
    imageSrc: "/afritada.png",
    description: "Pork stew cooked with tomatoes, potatoes, and carrots.",
  },
  {
    id:8,
    name: "Pancit Guisado",
    price: 400,
    imageSrc: "/pancit.png",
    description: "Stir-fried noodles with vegetables, pork, and shrimp.",
  },
];

export default Viands;

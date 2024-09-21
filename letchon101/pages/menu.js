import Image from "next/image";
import Head from "next/head";
import Link from "next/link";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
import { Fragment, useState } from "react";
import MenuModal from "../components/menuModal";
import { useCart } from "/CartContext"; 


const Menu = () => {
  const { addToCart } = useCart(); // Get addToCart function from context
  const [showModal, setShowModal] = useState(false);
  const [selectedMenu, setSelectedMenu] = useState(null);

  const openModal = (menu) => {
    setSelectedMenu(menu);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setSelectedMenu(null);
  };

  const handleAddToCart = () => {
    addToCart({
        id: item.id,       // unique identifier for the item
        name: item.name,   // name of the item (e.g., "Lechon Belly")
        price: item.price, // price of the item
        quantity: 1,       // default quantity, you can add logic to let the user select this
        imageSrc: item.imageSrc // optional, if you want to pass an image
      }); // Add the selected menu item to the cart
    onClose(); // Optionally close the modal after adding to the cart
  };

  return (
    <Fragment>
      <div>
        <Head>
          <title>Menu Page</title>
        </Head>

        {/* Navbar Section */}
        <div className="w-full max-w-1xl mx-auto flex items-center justify-between border-b-2 px-2 py-7 h-16 bg-black shadow-md">
          <div className="flex items-center space-x-8">
            <Image
              src="/Vector.png"
              alt="Letchon Logo"
              width={40}
              height={35}
              className="object-contain"
            />
          </div>
          <div className="flex-grow flex justify-center">
            <div className="flex space-x-6">
              <Link href="/homepage">
                <button className="text-white hover:text-orange-500 transition bg-transparent border-none cursor-pointer">
                  Home
                </button>
              </Link>
              <Link href="/letchon">
                <button className="text-white hover:text-orange-500 transition bg-transparent border-none cursor-pointer">
                  Lechon
                </button>
              </Link>
              <Link href="/viands">
                <button className="text-white hover:text-orange-500 transition bg-transparent border-none cursor-pointer">
                  Viands
                </button>
              </Link>
              <Link href="/menu">
                <button className="text-white hover:text-orange-500 transition bg-transparent border-none cursor-pointer">
                  Menu
                </button>
              </Link>
              <Link href="/aboutus">
                <button className="text-white hover:text-orange-500 transition bg-transparent border-none cursor-pointer">
                  About Us
                </button>
              </Link>
            </div>
          </div>

          <div className="flex items-center space-x-8">
            <Link href="/profile">
              <button className="flex items-center justify-center p-2 bg-transparent hover:bg-gray-800 rounded">
                <Image
                  src="/profile.png"
                  alt="Profile"
                  width={24}
                  height={24}
                  className="cursor-pointer"
                />
              </button>
            </Link>
            <Link href="/cart">
              <button className="flex items-center justify-center p-2 bg-transparent hover:bg-gray-800 rounded">
                <Image
                  src="/cart.png"
                  alt="Cart"
                  width={24}
                  height={24}
                  className="cursor-pointer"
                />
              </button>
            </Link>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex flex-col items-center justify-center py-10" style={{ backgroundColor: "#F8C794" }}>
          <div className="flex flex-col items-center justify-center py-10 bg-gray-100">
            <main className="flex flex-col justify-center items-center w-full flex-1 px-20 text-center">
              <h1 className="text-4xl font-bold mb-6 text-orange-700">Menu</h1>

              {/* Menu Items Section */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {menuData.map((menu, index) => (
                  <div key={index} className="bg-[#F8C794] shadow-lg rounded-lg p-4">
                    <button onClick={() => openModal(menu)}>
                      <Image
                        src={menu.imageSrc}
                        alt={menu.name}
                        width={300}
                        height={200}
                        className="object-cover rounded-lg"
                      />
                    </button>
                    <h3 className="text-lg font-semibold mt-4">{menu.name}</h3>
                    <p className="text-lg font-bold text-gray-800">₱{menu.price}</p>
                    <p className="text-sm text-gray-600">{menu.description}</p>
                  </div>
                ))}
              </div>
            </main>
          </div>
        </div>

        {/* Modal for selected menu */}
        <MenuModal
        isVisible={showModal}
        onClose={closeModal}
        selectedMenu={selectedMenu}
        addToCart={addToCart} // Pass addToCart function here
      />
    

        {/* Footer */}
        <footer className="bg-black text-white py-6">
          <div className="container mx-auto flex justify-center space-x-8">
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:bg-gray-900 p-2 rounded-md group cursor-pointer hover:shadow-lg"
            >
              <FaTwitter className="text-2xl text-gray-600 group-hover:text-white" />
              <span className="ml-2 text-gray-600 group-hover:text-white">Twitter</span>
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:bg-gray-900 p-2 rounded-md group cursor-pointer hover:shadow-lg"
            >
              <FaFacebook className="text-2xl text-gray-600 group-hover:text-white" />
              <span className="ml-2 text-gray-600 group-hover:text-white">Facebook</span>
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:bg-gray-900 p-2 rounded-md group cursor-pointer hover:shadow-lg"
            >
              <FaInstagram className="text-2xl text-gray-600 group-hover:text-white" />
              <span className="ml-2 text-gray-600 group-hover:text-white">Instagram</span>
            </a>
          </div>
        </footer>
      </div>
    </Fragment>
  );
};

// Menu data
const menuData = [
  {
    id:1,
    name: "TRIO SET",
    price: 2900,
    description: "Fried Chicken, Buttered Shrimp, Mix Fresh Fruits, with 1.5L Coke",
    imageSrc: "/1.png",
    details: [
      "3kg Lechon Belly",
      "Fried Chicken",
      "Buttered Shrimp",
      "Mix Fresh Fruits",
      "with 1.5L Coke",
    ],

  },
  {
    id:2,
    name: "Viand Set - VIANDS Package",
    price: 2900,
    description: "Fried Chicken, Buttered Shrimp, Canton Guisado, Lumpiang Shanghai, Seafood Chopseuy",
    imageSrc: "/2.png",
    details: [
      "Lumpiang Shanghai",
      "Seafood Chopseuy",
      "Fried Chicken",
      "Buttered Shrimp",
      "Canton Guisado",
    
    ],

  },
  {
    id:3,
    name: "Set A - Lechon Belly Package",
    price: 3500,
    description: "3kg Lechon Belly, Fried Chicken, Lumpiang Shanghai, Pork Humba, Canton Guisado",
    imageSrc: "/3.png",
    details: [
      "3kg Lechon belly",
      "Lumpiang Shanghai",
      "Fried Chicken",
      "Canton Guisado",
      "Buttered Shrimp",
      "WITH FREE 1 BOX PIZZA"
    
    ],
  },
  {
    id:4,
    name: "Set B - Lechon Belly Package",
    price: 4200,
    description: "3kg Lechon Belly, Seafood Chopseuy, Fried Chicken, Pork Humba, Canton Guisado, Buttered Shrimp",
    imageSrc: "/4.png",
    details: [
      "3kg Lechon belly",
      "Buttered Shrimp",
      "Fried Chicken",
      "Pork Humba",
      "Seafood Chopseuy",
      "Canton Guisado",
      "WITH FREE 1 BOX PIZZA"

    ],
  },
  {
    id:5,
    name: "Set C - Lechon Belly Package",
    price: 4600,
    description: "4kg Lechon Belly, Lumpia Shanghai, Beef Caldereta, Pork Humba, Buttered Shrimp, Canton Guisado, Chicken Curry",
    imageSrc: "/5.png",
    details: [
      "4kg Lechon belly",
      "Buttered Shrimp",
      "Lumpia Shanghai",
      "Pork Humba",
      "Canton Guisado",
      "Beef Caldereta",
      "Chicken Curry",
      "WITH FREE 1 BOX PIZZA"

    ],
  },
  {
    id:6,
    name: "10 Viand Tray",
    price: 3700,
    description: "Choose 4 from a variety of viands in Menu #1 and choose other 4 viands from Menu #2 such as Pork Afritada, Chicken Curry, Buttered Shrimp, Fried Chicken, Lumpiang Shanghai, and more.",
    imageSrc: "/6.png",
  },
  {
    id:7,
    name: "4 Viand Tray",
    price: 6000,
    description: "Choose 6 from Menu #1 and Choose 4 from Menu #2",
    imageSrc: "/7.png",
  },
];

export default Menu;

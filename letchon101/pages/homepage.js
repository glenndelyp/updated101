import Image from "next/image";
import { Inter } from "next/font/google";
import Head from "next/head";
import Link from "next/link";
import React from "react";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";



export default function Homepage() {
  return (
    <div>
      <Head>
        <title>Home Page</title>
      </Head>

      <div className="w-full max-w-1xl mx-auto flex items-center justify-between border-b-2 px-2 py-7 h-16 bg-black shadow-md">
        <div className="flex items-center space-x-8">
          <Image
            src="/Vector.png"
            alt="Lechon Logo"
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

      <div className="relative w-full h-[50vh] md:h-[70vh] bg-cover bg-center" style={{ backgroundImage: "url('/belly.jpg')" }}>
        <div className="absolute inset-0 bg-black bg-opacity-30"></div>
        <div className="absolute inset-0 flex flex-col justify-center items-center">
          <h1 className="text-white text-4xl md:text-6xl font-bold mb-4">Ruby Belly & Lechon</h1>
          <Link href="/viands">
          <button className="bg-red-600 text-white px-6 py-3 text-lg font-semibold rounded-md hover:bg-red-500 transition">
            Order Now
          </button>
          </Link>
        </div>
      </div>

      <div className="bg-yellow-100 py-10">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-4 px-4">
          <div className="bg-white p-4 shadow-lg">
            <Image src="/lumpia.png" alt="Lumpia" width={400} height={300} className="w-full h-auto" />
            <p className="text-2xl font-bold">Lumpia</p>
          </div>
          <div className="bg-white p-4 shadow-lg">
            <Image src="/chick.png" alt="Chicken" width={400} height={300} className="w-full h-auto" />
            <p className="text-2xl font-bold">Chicken Wings</p>
          </div>
          <div className="bg-white p-4 shadow-lg">
            <Image src="/belly.png" alt="Lechon Belly" width={400} height={300} className="w-full h-auto" />
            <p className="text-2xl font-bold">Letchon Belly</p>
          </div>
        </div>
      </div>

    
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
  );
}

import Image from "next/image";
import { Inter } from "next/font/google";
import Head from "next/head";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div>
      <Head>
        <title>Home Page</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>


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
        Letchon
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
      <div className="flex flex-col items-center justify-center min-h-screen py-10 bg-gray-100">
        <main className="flex flex-col justify-center items-center w-full flex-1 px-20 text-center">
          <h1 className="text-4xl font-bold mb-6 text-orange-700">Welcome to the IMPYERNOOOO!!!</h1>
          <p className="text-lg text-gray-700 mb-4">
            KAPOYA ANING IM OI LETCHEEEEEE
          </p>
        </main>
      </div>
    </div>
  );
}

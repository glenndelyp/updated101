import Image from "next/image";
import React from "react";
import { Inter } from "next/font/google";
import Head from "next/head";
import Link from "next/link";



export default function Login() {
  return (
    
      <div
        className="flex flex-col items-center justify-center min-h-screen py-2 bg-gray-100"
        style={{
          backgroundImage: 'url(/Login.png)', 
          backgroundSize: 'cover', 
          backgroundPosition: 'center', 
          backgroundRepeat: 'no-repeat', 
          backgroundAttachment: 'fixed', 
        }}
      >
      <Head>
        <title>Letchonan</title>
        <link rel="icon" href="../public/favicon.ico" />
      </Head>

      <main className="flex flex-col justify-center items-center w-full flex-1 px-20 text-center">
        <div className="bg-orange-900 text-white rounded-2xl shadow-2xl border-2 border-black flex justify-end items-center w-full max-w-4xl h-[30rem] relative">
          <div className="bg-orange-700 w-1/3 h-3/4 rounded-2xl shadow-md p-10 m-10">
          <div className="py-2">
            <h2 className="text-2xl font-bold text-white mb-2">Login</h2>
            <div className="border-2 w-10 border-white inline-block mb-2"></div>
          </div>
          <form className="flex flex-col space-y-2">
        <label htmlFor="email" className="text-white text-left">Email Address</label>
        <input 
          type="email" 
          id="email" 
          name="email" 
          className="p-2 rounded border border-gray-300 text-black"
          placeholder="Enter your email"
        />
        <label htmlFor="password" className="text-white text-left">Password</label>
        <input 
          type="password" 
          id="password" 
          name="password" 
          className="p-2 rounded border border-gray-300 text-black"
          placeholder="Enter your password"
        />
        <button 
          type="submit" 
          className="bg-white text-orange-700 font-semibold rounded-full px-4 py-2 hover:bg-orange-500  hover:text-white transition">
              Submit
             </button>
             </form>
    
          </div>

        
          <div className="absolute left-1/4 top-0 transform -translate-x-1/2 px-12 mt-4">
          <Link href="/profile">
            <button className="flex items-left justify-center p-4 bg-transparent hover:bg-gray-800 rounded">
              <Image
                src="/Vector.png"
                alt="Profile"
                width={24}
                height={24}
                className="cursor-pointer"
              />
            </button>
          </Link>
            <h2 className="text-5xl font-bold mb-5">WELCOME!</h2>
            <div className="border-2 w-10 border-white inline-block mb-20"></div>
            <p className="mb-2">New Here?</p>
            <Link href="/signup">
            <button className="border-2 border-white rounded-full px-12 py-2 inline-block font-semibold hover:bg-white hover:text-red-500">
            Sign Up
            </button>
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}

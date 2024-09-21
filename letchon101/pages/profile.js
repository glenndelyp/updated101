import React from "react";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from 'next/router';
import SideNavbar from '../components/sidenavbar'; // Import Sidebar component

const Profile = () => {
  return (
    <div className="flex min-h-screen">
    {/* Sidebar */}
    <SideNavbar />
    <div className="ml-64 p-10 flex justify-center items-start flex-col bg-gray-100 min-h-screen">
      {/* Profile Header */}
      <div className="flex items-center mb-8 space-x-6">
        <img 
          src="/prof.png" 
          alt="Profile" 
          className="w-20 h-20 rounded-full border-4 border-white shadow-lg"
        />
        <div>
          <h1 className="text-2xl font-bold text-gray-800">Askia Bernales</h1>
          <button className="mt-2 bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded shadow-md transition duration-200">
            Edit Profile
          </button>
        </div>
      </div>

      {/* Contact Details Section */}
      <div className="w-full bg-white p-6 rounded-lg shadow-lg">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">Contact Information</h2>
        <div className="space-y-2 text-gray-700">
          <p><strong>Phone:</strong> 09475390943</p>
          <p><strong>Email:</strong> askiajay.bernales@hcdc.edu.ph</p>
          <p><strong>Address:</strong> Salindatu St. Jerome Ext. Brgy. Vicente</p>
        </div>
        <button className="mt-6 bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded shadow-md transition duration-200">
          Edit Details
        </button>
      </div>
    </div>
    </div>
  );
};

export default Profile;

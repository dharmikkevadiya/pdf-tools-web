'use client';
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { BiMenu } from 'react-icons/bi';
import Image from 'next/image';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

const Navbar = () => {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState('/'); // Set the default active tab

  useEffect(() => {
    // Update the active tab whenever the route changes
    setActiveTab(router.pathname);
  }, [router.pathname]);

  const menuItems = [
    { path: '/', label: 'Home' },
    { path: '/merge', label: 'Merge Pdf' },
    { path: '/jpgToPdf', label: 'Convert Pdf' },
    { path: '/unlock', label: 'Unlock Pdf' },
    { path: '/compress', label: 'Compress Pdf' },
  ];

  return (
    <nav className="bg-white dark:bg-gray-900 fixed w-full z-20 top-0 left-0 border-b mb-[80px] border-gray-200 dark:border-gray-600 ">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <div style={{ flex: 1 }} className="flex">
          <Link href="/" className="flex items-center">
            <Image
              src="\assests\Frame 10.svg"
              alt="Example SVG"
              width={40}
              height={42}
            />
            <Image
              src="assests\All Document Editor.svg"
              alt="Example SVG"
              width={100}
              height={200}
              className="mx-2"
            />
          </Link>
        </div>
        <div
          style={{ flex: 2 }}
          className="navigation"
          onClick={() => {
            // Your existing toggleMenu logic
          }}
        >
          <div className="menu flex justify-between items-center">
            <div
              className="items-center justify-between  w-full md:flex md:w-auto"
              id="navbar-sticky"
            >
              <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                {menuItems.map((item) => (
                  <li key={item.path}>
                    <Link
                      href={item.path}
                      style={{
                        backgroundColor:
                          activeTab === item.path ? '#3B82F6' : 'transparent',
                        color: activeTab === item.path ? 'white' : '#ccc',
                        padding: '8px', // Adjust padding as needed
                        borderRadius: '4px', // Adjust border-radius as needed
                      }}
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex justify-center items-center">
              <button
                type="button"
                className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
              >
                Log In
              </button>
              <button
                type="button"
                className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
              >
                Sign up
              </button>
            </div>
          </div>
        </div>
        <span
          className="md:hidden"
          onClick={() => {
            // Your existing toggleMenu logic for mobile
          }}
        >
          <BiMenu className="w-6 h-6 cursor-pointer" />
        </span>
      </div>
    </nav>
  );
};

export default Navbar;

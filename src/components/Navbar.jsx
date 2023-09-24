import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <header className="text-gray-600 body-font sticky top-0 bg-white border-black border-b-2 border-opacity-20">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
          <img
            src="https://images.myloapp.in/NestJsUploads/1682404377508-myloLogo.svg"
            alt=""
            className="mx-2 w-20"
          />
        </a>
        <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
          <Link href="/" className="mr-5 hover:text-gray-900">
            Home
          </Link>
          <Link href="/about" className="mr-5 hover:text-gray-900">
            About
          </Link>
          <Link href="/products" className="mr-5 hover:text-gray-900">
            Products
          </Link>
          <Link href="/contact" className="mr-5 hover:text-gray-900">
            Contact Us
          </Link>
        </nav>
        <button className="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">
          Login
        </button>
      </div>
    </header>
  );
};

export default Navbar;

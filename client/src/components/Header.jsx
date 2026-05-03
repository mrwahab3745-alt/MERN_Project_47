import React from "react";
import { Link } from "react-router-dom";
import { FaSearch } from "react-icons/fa";


export default function Header() {
  return (
    <header className="bg-slate-200 shadow-md">
      <div className="flex justify-between items-center gap-4 p-2 max-w-6xl mx-auto">
        <Link to="/" className="text-2xl font-bold text-black">
          <h1 className="text-sm sm:text-xl font-bold flex">
          <span className="text-slate-500 ">Plotify</span>
        </h1>
        </Link>
        <form className="bg-slate-100 rounded-2xl flex items-center gap-2 px-4 py-1">
          <input
            type="search"
            placeholder="Search Here"
            className="bg-transparent focus:outline-none w-24 sm:w-48"
          /><FaSearch className="text-slate-500" />
        </form>
        <ul className="flex flex-wrap gap-5">
          <li className="hidden sm:inline text-black hover:underline">
            <a href="/">Home</a>
          </li>
          <li className="hidden sm:inline text-black hover:underline">
            <a href="/about">About</a>
          </li>
          <li className="hidden sm:inline text-black hover:underline">
            <a href="/Contact">Contact</a>
          </li>
          <li className="sm:inline text-black hover:underline">
            <a href="/signin">Sign In</a>
          </li>
          <li className="sm:inline text-black hover:underline">
            <a href="/signup">Sign Up</a>
          </li>
        </ul>
      </div>
    </header>
  );
}

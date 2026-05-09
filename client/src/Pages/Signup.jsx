import React from "react";
import Header from "../components/Header";
import { Link } from "react-router-dom";

const Signup = () => {
  return (
    <div className="p-3 max-w-6xl mx-auto">
      <h1 className="text-3xl font-bold text-center mt-20">Signup</h1>
      <form className="flex flex-col gap-4">
        <div className="flex flex-col items-center gap-4 mt-10">
          <input
            type="text"
            placeholder="Username"
            className="border border-gray-300 rounded-md px-4 py-2 w-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="email"
            placeholder="Email"
            className="border border-gray-300 rounded-md px-4 py-2 w-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="password"
            placeholder="Password"
            className="border border-gray-300 rounded-md px-4 py-2 w-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            type="submit"
            className="bg-slate-500 text-white rounded-lg p-3 hover:bg-blue-600 uppercase disabled:opacity-20"
          >
            Sign Up
          </button>
        </div>
      </form>
      <div>
        <p className="text-center mt-4 text-sm text-gray-600">
          Already have an account?{" "}
          <Link to={"/signin"} className="text-blue-500 hover:underline">
            Sign In
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Signup;

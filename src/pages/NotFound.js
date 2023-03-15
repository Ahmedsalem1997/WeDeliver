import React from "react";
import { useNavigate } from "react-router-dom";
import Footer from "../layout/Footer";
import Navbar from "../layout/Navbar";

const NotFound = () => {
  const navigate = useNavigate();
  return (
    <>
      <Navbar />
      <div className="grid h-screen px-4 bg-white place-content-center">
        <div className="text-center">
          <h1 className="font-black text-gray-200 text-9xl">404</h1>
          <p className="text-2xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Uh-oh!
          </p>
          <p className="mt-4 text-gray-500">We can't find that page.</p>
          <button
            onClick={() => navigate("/")}
            className="btn-main w-56"
          >
            Go Back Home
          </button>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default NotFound;

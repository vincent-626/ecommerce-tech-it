import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="max-w-[1640px] mt-20">
      {/* Subscription */}
      <div className="bg-gray-200 max-w-[1640px] mx-auto py-20">
        <h1 className="font-bold text-center text-4xl mx-3">
          Subscribe to our newsletter
        </h1>
        <div className="text-center mt-10 mx-1">
          <form
            id="subscribe-form"
            className="flex flex-wrap justify-center gap-1"
          >
            <input
              id="subscribe-email"
              className="border rounded-xl px-5 py-1"
              type="email"
              placeholder="Enter your email"
            />
            <button
              type="submit"
              className="text-white bg-black"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      {/* Links */}
      <div className="bg-black max-w-[1640px] mx-auto p-5 text-gray-200 py-14 flex flex-row flex-wrap justify-center gap-20">
        <div className="flex flex-col justify-start">
          <h2 className="font-bold text-xl mb-4">About Us</h2>
          <Link
            to="/"
            className="hover:underline"
          >
            Our Story
          </Link>
          <Link
            to="/"
            className="hover:underline"
          >
            Our Mission
          </Link>
          <Link
            to="/"
            className="hover:underline"
          >
            Our People
          </Link>
        </div>
        <div className="flex flex-col justify-start">
          <h2 className="font-bold text-xl mb-4">Support</h2>
          <Link
            to="/"
            className="hover:underline"
          >
            Contact Us
          </Link>
          <Link
            to="/"
            className="hover:underline"
          >
            Store Locator
          </Link>
          <Link
            to="/"
            className="hover:underline"
          >
            FAQ
          </Link>
        </div>
        <div className="flex flex-col justify-start">
          <h2 className="font-bold text-xl mb-4">Careers</h2>
          <Link
            to="/"
            className="hover:underline"
          >
            Join Us
          </Link>
          <Link
            to="/"
            className="hover:underline"
          >
            Work at Tech It
          </Link>
          <Link
            to="/"
            className="hover:underline"
          >
            Life at Tech It
          </Link>
        </div>
        <div className="flex flex-col justify-start">
          <h2 className="font-bold text-xl mb-4">Follow Us</h2>
          <div className="flex flex-row justify-start">
            <Link
              to="/"
              className="hover:text-gray-400"
            >
              <i className="fab fa-facebook-f mr-3" />
            </Link>
            <Link
              to="/"
              className="hover:text-gray-400"
            >
              <i className="fab fa-instagram mr-3" />
            </Link>
            <Link
              to="/"
              className="hover:text-gray-400"
            >
              <i className="fab fa-twitter mr-3" />
            </Link>
            <Link
              to="/"
              className="hover:text-gray-400"
            >
              <i className="fab fa-youtube mr-3" />
            </Link>
            <Link
              to="/"
              className="hover:text-gray-400"
            >
              <i className="fab fa-linkedin mr-3" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

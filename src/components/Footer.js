import React from "react";

export default function Navbar() {
  return (
    <footer className="bg-gray-800 md:sticky top-0 z-10">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <a className="title-font font-medium text-white mb-4 md:mb-0">
          <a href="#socials" className="ml-3 text-xl">
            Socials
          </a>
        </a>
        <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-700	flex flex-wrap items-center text-base justify-center">
          <a href="https://tinyurl.com/jt6f9ftn" target="_blank" className="mr-5 hover:text-white">
            Github
          </a>
          <a href="https://tinyurl.com/yc4hu38r" target="_blank" className="mr-5 hover:text-white">
            LinkedIn
          </a>

        </nav>
        <a
          href="#contact"
          className="inline-flex items-center bg-gray-800 border-0 py-1 px-3 focus:outline-none hover:bg-gray-700 rounded text-base mt-4 md:mt-0">
          SOME SORT OF ICON
        </a>
      </div>
    </footer>
  );
}
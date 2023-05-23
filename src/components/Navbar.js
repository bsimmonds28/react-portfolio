import React from "react";

export default function Navbar() {
  return (
    <header className="bg-zinc-400 md:sticky top-0 z-10">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <button className="title-font font-medium text-white ml-3 text-xl mb-4 md:mb-0">
          Bethany Simmonds
        </button>
        <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-white flex flex-wrap items-center text-base justify-center">
          <button className="mr-5 hover:text-white" onClick={() => window.location.href = '#about'}>
            About Me
          </button>
          <button className="mr-5 hover:text-white" onClick={() => window.location.href = '#projects'}>
            Projects
          </button>
          <button className="mr-5 hover:text-white" onClick={() => window.location.href = '#resume'}>
            Resume
          </button>
          <button className="mr-5 hover:text-white" onClick={() => window.location.href = '#contact'}>
            Contact
          </button>
        </nav>
      </div>
    </header>
  );
}

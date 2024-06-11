import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-scroll";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const links = [
    { id: 1, link: "Home" },
    { id: 2, link: "About" },
    { id: 3, link: "Skills" },
    { id: 4, link: "Projects" },
    { id: 5, link: "Contact" },
  ];

  return (
    <div className="flex justify-between items-center shadow-lg bg-white p-5 fixed w-full z-50">
      <h1 className="font-signature text-2xl text-gray-800 font-bold hover:text-blue-500">
        <Link to="Home" smooth duration={500}>
          SUDARSHANA
        </Link>
      </h1>

      <ul className="gap-5 hidden md:flex">
        {links.map(({ link, id }) => (
          <li
            key={id}
            className="text-gray-800 cursor-pointer font-bold hover:text-blue-500"
          >
            <Link to={link} smooth duration={500}>
              {link}
            </Link>
          </li>
        ))}
      </ul>

      <div
        onClick={() => setNav(!nav)}
        className="text-2xl cursor-pointer z-10 md:hidden"
      >
        {nav ? (
          <FaTimes className="text-slate-200 hover:text-blue-500" />
        ) : (
          <FaBars className="text-gray-800 hover:text-blue-500" />
        )}
      </div>

      {nav && (
        <ul className="flex flex-col justify-center items-center gap-3 text-xl absolute top-0 left-0 w-full h-screen bg-black text-slate-200 opacity-80">
          {links.map(({ link, id }) => (
            <li
              key={id}
              className="cursor-pointer font-medium hover:text-blue-500"
            >
              <Link
                onClick={() => setNav(!nav)}
                to={link}
                smooth
                duration={500}
              >
                {link}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Navbar;

import React, { useState, useEffect } from 'react';
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-scroll";
import title from "../assets/sj1.png";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [scrolling, setScrolling] = useState(true);
  const [lastScrollTop, setLastScrollTop] = useState(0);

  const links = [
    { id: 1, link: "home" },
    { id: 2, link: "about" },
    { id: 3, link: "project" },
    { id: 4, link: "skills" },
    { id: 5, link: "contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollTop = window.pageYOffset;
      setScrolling(currentScrollTop < lastScrollTop || currentScrollTop <= 0);
      setLastScrollTop(currentScrollTop);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollTop]);

  useEffect(() => {
    let timer;
    if (scrolling) {
      timer = setTimeout(() => setScrolling(true), 200);
    } else {
      setScrolling(false);
    }
    return () => clearTimeout(timer);
  }, [scrolling]);

  return (
    <div className={`fixed w-full h-24 pr-20 text-white bg-[#222] ${scrolling ? 'top-0' : '-top-24'} transition-all duration-300`}>
      <div className='flex justify-between items-center h-full'>
        <Link to="home" smooth duration={500} className='pl-20 pt-6'>
          <img src={title} alt='name' className='w-24 h-auto cursor-pointer' />
        </Link>
        <ul className="hidden md:flex">
          {links.map(({ id, link }) => (
            <li key={id} className="nav-links px-6 cursor-pointer capitalize font-medium text-lg text-gray-400 hover:scale-105 hover:text-white duration-200 link-underline">
              <Link to={link} smooth duration={500}>{link}</Link>
            </li>
          ))}
        </ul>
        <div onClick={() => setNav(!nav)} className="cursor-pointer pr-4 z-10 text-gray-500 md:hidden">
          {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
        </div>
        {nav && (
          <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-800 text-gray-500">
            {links.map(({ id, link }) => (
              <li key={id} className="px-4 cursor-pointer capitalize py-6 text-4xl">
                <Link onClick={() => setNav(false)} to={link} smooth duration={500}>
                  {link}
                </Link>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

export default Navbar;

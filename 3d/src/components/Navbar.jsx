import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaUserCircle } from "react-icons/fa";
import { LoginModal, RegisterModal } from "./loginregister";

import { styles } from "../styles";
import { navLinks } from "../constants";
import { logo, menu, close } from "../assets";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  const [showRegister, setShowRegister] = useState(false);

  const handleProfileClick = () => {
    setIsDropdownOpen((prev) => !prev);

  };

  useEffect(() => {
    const handleClickOutside = (e) => {
        if (!e.target.closest('.profile-dropdown') && !e.target.closest('.user-icon')) {
            setIsDropdownOpen(false);
        }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
        document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <nav
      className={`${
        styles.paddingX
      } w-full flex items-center py-5 fixed top-0 z-20 ${
        scrolled ? "bg-primary" : "bg-transparent"
      }`}
    >
      <div className='w-full flex justify-between items-center max-w-7xl mx-auto'>
        <Link
          to='/'
          className='flex items-center gap-2'
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >

          <div
                className="flex items-center cursor-pointer"
                onClick={() => navigate('/')}
            >
                <div className="flex flex-col leading-none">
                <div 
                    className="font-bold text-3xl italic text-white tracking-wide drop-shadow-lg mr-2" 
                    style={{ fontFamily: "'Playfair Display', serif" }}
                >
                    GearPoint
                </div>
                <div
                    className="text-xs text-gray-400 pl-1"
                    style={{ fontFamily: "'Roboto', sans-serif" }}
                >
                    where every ride begins
                </div>
            </div>
          </div>
          <img src={logo} alt='logo' className='w-9 h-9 object-contain' />
        </Link>

        <ul className='list-none hidden sm:flex flex-row gap-10'>
          {navLinks.map((nav) => (
            <li
              key={nav.id}
              className={`${
                active === nav.title ? "text-white" : "text-secondary"
              } hover:text-white text-[18px] font-medium cursor-pointer`}
              onClick={() => setActive(nav.path)}
            >
              <a href={`${nav.id}`}>{nav.title}</a>
            </li>
          ))}
        </ul>

        <div className='sm:hidden flex flex-1 justify-end items-center'>
          <img
            src={toggle ? close : menu}
            alt='menu'
            className='w-[28px] h-[28px] object-contain'
            onClick={() => setToggle(!toggle)}
          />

          <div
            className={`${
              !toggle ? "hidden" : "flex"
            } p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}
          >
            <ul className='list-none flex justify-end items-start flex-1 flex-col gap-4'>
              {navLinks.map((nav) => (
                <li
                  key={nav.id}
                  className={`font-poppins font-medium cursor-pointer text-[16px] ${
                    active === nav.title ? "text-white" : "text-secondary"
                  }`}
                  onClick={() => {
                    setToggle(!toggle);
                    setActive(nav.title);
                  }}
                >
                  <a href={`${nav.id}`}>{nav.title}</a>
                </li>
              ))}
            </ul>
          </div>
          
        </div>
        <div className="relative flex items-center">
                <button
                    className="user-icon text-white hover:text-yellow-400 transition duration-200"
                    onClick={handleProfileClick}
                >
                    <FaUserCircle size={28} />
                </button>
                {isDropdownOpen && (
                    <div className="profile-dropdown absolute top-16 right-0 bg-gray-800 text-white shadow-lg rounded-md w-48 py-2">
                        <button
                            className="block w-full text-left px-4 py-2 hover:bg-gray-700"
                            onClick={() => {
                                setShowRegister(true);
                                setIsDropdownOpen(false);
                            }}
                        >
                            Register
                        </button>
                        
                        <button
                            className="block w-full text-left px-4 py-2 hover:bg-gray-700"
                            onClick={() => {
                                setShowLogin(true);
                                setIsDropdownOpen(false);
                            }}
                        >
                            Login
                        </button>
                        
                    </div>
                )}
            </div>
      </div>
    </nav>
    {showLogin && <LoginModal onClose={() => setShowLogin(false)} />}
    {showRegister && <RegisterModal onClose={() => setShowRegister(false)} />}
  
    </>);
};

export default Navbar;
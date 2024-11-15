import React, { useState, useEffect, useRef } from 'react';
import { NavLink } from "react-router-dom";
import { FaUserCircle } from 'react-icons/fa';
import { Login, Register } from "../api/api";
import {Bike} from "lucide-react";
import { TbMotorbike } from "react-icons/tb";

const Navbar = () => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [showLogin, setShowLogin] = useState(false);
    const [showRegister, setShowRegister] = useState(false);
    const [loginError, setLoginError] = useState('');
    const [registerError, setRegisterError] = useState('');
    const emailRef = useRef('');
    const passwordRef = useRef('');
    const nameRef = useRef('');
    const phoneRef = useRef('');

    const Linksdata = [
        { title: 'Home', path: '/' },
        { title: 'Products', path: '/products' },
        { title: 'Contact', path: '/contact' }
    ];

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

    const handleLogin = async (e) => {
        e.preventDefault();
        setLoginError('');
        const credentials = {
            email: emailRef.current.value,
            password: passwordRef.current.value
        };
        const result = await Login(credentials);
        if (result.success) {
            setShowLogin(false);
            setIsDropdownOpen(false);
        } else {
            setLoginError(result.message);
        }
    };

    const handleRegister = async (e) => {
        e.preventDefault();
        setRegisterError('');
        const credentials = {
            name: nameRef.current.value,
            phone: phoneRef.current.value,
            email: emailRef.current.value,
            password: passwordRef.current.value
        };
        const result = await Register(credentials);
        if (result.success) {
            setShowRegister(false);
            setShowLogin(true);
        } else {
            setRegisterError(result.message);
        }
    };

    const switchAuth = () => {
        setShowLogin(!showLogin);
        setShowRegister(!showRegister);
        setLoginError('');
        setRegisterError('');
    };

    return (
        <nav className="w-screen h-16 bg-gradient-to-r from-purple-700 via-pink-600 to-red-500 shadow-lg flex items-center justify-between px-4">
            <div className="flex flex-row items-center justify-between px-4 opacity-90">
                <div className="font-bold text-3xl italic text-white tracking-wide drop-shadow-lg mr-2" style={{ fontFamily: "'Playfair Display', serif" }}>
                    ShopEase
                </div>
                {/* <Bike size={35} style={{ color: 'white', opacity: 0.9 }} />
                <TbMotorbike size={35}/> */}
                <svg xmlns="http://www.w3.org/2000/svg" color='white' width="3.5rem" height="3.5rem" viewBox="0 0 48 48"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"><path d="M16.003 19.964c2.088 1.128 3.955 2.2 3.897 3.326m-.437-15.53c.384-.8.774-1.695 1.166-1.948c.997-.053 2.185.087 3.016.597c.502.306.964.67 1.276 1.25c1.117.604 1.187 1.311 2.414 1.808l-2.588-.742l.04.45"></path><path d="M24.551 9.074c-.238.814-.614 1.655-1.276 2.37c.168.26.394.401.443.909c-.537-.091-.71.029-.72.505m-4.855 16.097l-1.396 2.28l-.201 1.158c.462.56.787 1.825 1.142 2.936c1.163.298 2.75 1.127.846 1.204l-3.653-1.615c-.185-.332-.224-.87.353-1.559a54 54 0 0 1 1.246-7.564c-1.384-1.367-3.063-2.622-4.885-3.462c-.295-.84-.93-1.12-1.49-1.524c-.608-.514-1.015-1.356-1.3-2.468c.123-1.19.372-1.522.587-2.085c.692-1.167 1.485-1.715 1.872-2.608c.864-.465 1.354-1.265 2.259-2.049a58 58 0 0 0 2.61-1.51c1.11-.635 2.297-.22 2.583-.72c.274.066.54-.084.672-.297l-.016-.664l-.397-.469"></path><path d="M20.878 30.938c-.55.21-1.131.38-1.73.48l-1.005-2.463m1.355-.62c.143.451.345.772.52 1.152c.322.01.654-.002.982-.025m1.632-16.152c-.401-.56-.59-1.047-.505-1.538c-.643-.196-1.188-.252-1.997.1c.076 1.26-.382 2.252-1.01 2.994c.98-.094 1.937-.355 2.963-.151l2.205.043c.584.491.853 1.048 1.272 1.573l-1.282.022c-.515-.413-1.023-.833-1.675-1.074c-1.35.11.159.319-2.186.41c-.441.448-.804.47-1.852.425l.144.826l.681.363l1.454 1.034c.548.1 1.06.168 1.671.32l.909-.08l.492.96l-.407.079c-.233-.105-.104-.397-.699-.315c-.743-.313-1.487-.331-2.231-.257l-3.59-1.125c.209-.32-.12-1.487-.18-2.068c-.675.304-1.563.537-2.509.75l.346.81c2.066.57 3.7 1.117 5.448 2.146c.562.549.695 1.16.69 2.188l-.794 1.177l-.163 1.024"></path></g><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"><path d="M31.79 23.997a7.33 7.33 0 1 1-2.95 5.878c0-1.179.278-2.291.771-3.277M16.92 37.472a6.31 6.31 0 1 1-4.209-7.601"></path><path d="M37.923 29.69a1.671 1.671 0 1 1-1.672-1.672h0c.924 0 1.672.748 1.672 1.671m-25.777 6.269c0 .8-.649 1.449-1.449 1.449h0c-.8 0-1.449-.65-1.449-1.45h0c0-.8.649-1.448 1.45-1.448h0c.8 0 1.448.649 1.448 1.449"></path><path d="m34.621 29.345l-8.992-9.74l-6.125 6.648"></path><path d="m26.514 20.564l-1.994 2.681l-2.555 8.265l-.924 1.344m6.886-11.379l.521.436m.682 3.027l1.584.053m-9.526 8.935c0 .577-.468 1.045-1.045 1.045h0a1.045 1.045 0 0 1-1.046-1.045h0c0-.577.468-1.045 1.046-1.045h0c.577 0 1.045.468 1.045 1.045m-7.323 1.946a39 39 0 0 1-1.73.257m1.27-12.41l2.638 4.049M10.8 24.227l2.757-.802m1.581 5.373l-3.586 5.991"></path><path d="M12.217 35.852c.125 1.204.098 2.03-.287 3.044c1.012.199 3.116-.187 4.573-.71m.582-4.724l.845-.278m-6.003 1.972l1.536-.504m5.755.286l-1.021 2.15m6.081-18.825l1.52 1.55M24.774 15.7l.444 2.114l-1.328 1.137l-1.257.04"></path></g></svg>

            </div>



            <div className="flex items-center gap-8">
                {Linksdata.map((link, index) => (
                    <NavLink
                        to={link.path}
                        key={index}
                        className={({ isActive }) =>
                            `px-4 py-2 rounded-full transition-transform duration-200 ${isActive ? 'bg-white text-purple-700 scale-105 shadow-lg' : 'text-white hover:bg-white/20 hover:text-yellow-200'}`
                        }
                    >
                        {link.title}
                    </NavLink>
                ))}

                <button className="user-icon text-white hover:text-yellow-200 transition duration-200 relative" onClick={handleProfileClick}>
                    <FaUserCircle size={24} />
                </button>

                {isDropdownOpen && (
                    <div className="profile-dropdown absolute top-16 right-4 bg-white shadow-lg rounded-md w-56 py-2 text-gray-700">
                        <button
                            className="block w-full text-left px-4 py-2 hover:bg-purple-100"
                            onClick={() => {
                                setShowLogin(true);
                                setIsDropdownOpen(false);
                            }}
                        >
                            Login
                        </button>
                        <button
                            className="block w-full text-left px-4 py-2 hover:bg-purple-100"
                            onClick={() => {
                                setShowRegister(true);
                                setIsDropdownOpen(false);
                            }}
                        >
                            Register
                        </button>
                        <button className="block w-full text-left px-4 py-2 hover:bg-purple-100">
                            Logout
                        </button>
                    </div>
                )}
            </div>

            {showLogin && (
                <div className="fixed top-0 left-0 z-50 h-screen w-screen flex justify-center items-center bg-black/40">
                    <div className="bg-white p-6 rounded-md shadow-lg w-96">
                        <div className="flex justify-between items-center mb-4">
                            <h1 className="text-xl font-bold text-purple-500">Login</h1>
                            <button onClick={() => setShowLogin(false)} className="text-red-500 hover:text-white hover:bg-red-500 rounded-full p-2">
                                &times;
                            </button>
                        </div>
                        <form onSubmit={handleLogin}>
                            <input ref={emailRef} type="email" placeholder="Email" className="w-full p-2 mb-3 border-b-2 focus:border-purple-400" required />
                            <input ref={passwordRef} type="password" placeholder="Password" className="w-full p-2 mb-3 border-b-2 focus:border-purple-400" required />
                            {loginError && <p className="text-red-500 mb-2">{loginError}</p>}
                            <button type="submit" className="w-full p-3 bg-purple-500 text-white rounded-md">Login</button>
                        </form>
                        <p className="mt-4 text-purple-500 cursor-pointer" onClick={switchAuth}>Register?</p>
                    </div>
                </div>
            )}

            {showRegister && (
                <div className="fixed top-0 left-0 z-50 h-screen w-screen flex justify-center items-center bg-black/40">
                    <div className="bg-white p-6 rounded-md shadow-lg w-96">
                        <div className="flex justify-between items-center mb-4">
                            <h1 className="text-xl font-bold text-purple-500">Register</h1>
                            <button onClick={() => setShowRegister(false)} className="text-red-500 hover:text-white hover:bg-red-500 rounded-full p-2">
                                &times;
                            </button>
                        </div>
                        <form onSubmit={handleRegister}>
                            <input ref={nameRef} type="text" placeholder="Name" className="w-full p-2 mb-3 border-b-2 focus:border-purple-400" required />
                            <input ref={emailRef} type="email" placeholder="Email" className="w-full p-2 mb-3 border-b-2 focus:border-purple-400" required />
                            <input ref={passwordRef} type="password" placeholder="Password" className="w-full p-2 mb-3 border-b-2 focus:border-purple-400" required />
                            <input ref={phoneRef} type="tel" placeholder="Phone" className="w-full p-2 mb-3 border-b-2 focus:border-purple-400" required />
                            {registerError && <p className="text-red-500 mb-2">{registerError}</p>}
                            <button type="submit" className="w-full p-3 bg-purple-500 text-white rounded-md">Register</button>
                        </form>
                        <p className="mt-4 text-purple-500 cursor-pointer" onClick={switchAuth}>Login?</p>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;

import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';


const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    useEffect(() => {
        const menus = document.getElementById('Menu_list');
        const btn = document.getElementById('the_btn');
        btn.addEventListener('click', () => {
            menus.classList.toggle('hidden');
            menus.classList.toggle('block');
        })
    }, [])

    useEffect(() => {
        window.addEventListener('scroll', () => {
            if (window.scrollY >= 80) {
                setScrolled(true)
            } else {
                setScrolled(false)
            }
        })
        return () => {
            setScrolled()
        };
    }, [])
    return (
        <div className={scrolled ? "px-10 sm:px-16 lg:px-24 py-4 bg-cs-black sticky top-0 z-50 transition duration-500 ease-in-out" : "px-10 sm:px-16 lg:px-24 py-4 sticky top-0 z-50"}>
            <nav className="block md:flex items-center">
                {/* Navbrand and toggle menubar */}
                <div className="flex items-center">
                    <h1 className={scrolled ? "font-Damion font-bold text-3xl text-white transition duration-500" : "font-Damion font-bold text-3xl text-black"}><Link to="/">TechTop<span className="text-red-600">.</span></Link></h1>
                    <div className="flex flex-1 justify-end md:hidden">
                        <FontAwesomeIcon id="the_btn" className={scrolled ? "text-white text-xl cursor-pointer" : "text-black text-xl cursor-pointer"} icon={faBars} />
                    </div>
                </div>
                {/* Navbar menus */}
                <ul id="Menu_list" className={scrolled ? "hidden md:flex md:flex-1 gap-8 md:justify-end items-center text-center text-white uppercase font-Signika transition duration-500" : "hidden md:flex md:flex-1 gap-8 md:justify-end items-center text-center text-black uppercase font-Signika"}>
                    <li className=" mt-7 md:mt-0"><a href="/#">home</a></li>
                    <li className=" mt-4 md:mt-0"><a href="/#">about</a></li>
                    <li className=" mt-4 md:mt-0"><a href="/#">services</a></li>
                    <li className=" mt-4 md:mt-0"><a href="/#">contact</a></li>
                    <li className="mt-4 md:mt-0"><Link to="/login"><button className={scrolled ? "bg-white px-5 py-2 text-black hover:text-white rounded-md hover:bg-indigo-400 transition duration-300 ease-in-out" : "bg-black px-5 py-2 text-white rounded-md hover:bg-cs-ebony transition duration-300 ease-in-out"}>LOGIN</button></Link></li>
                </ul>
            </nav>
        </div>
    );
};

export default Navbar;
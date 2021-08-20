import React, { useContext, useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faSignOutAlt } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';
import { UserContext } from '../App'
import { Link as Scroll } from 'react-scroll'




const Navbar = () => {
    // User context api
    const [user] = useContext(UserContext)
    const [scrolled, setScrolled] = useState(false);
    // toggle navbar menu
    useEffect(() => {
        const menus = document.getElementById('Menu_list');
        const btn = document.getElementById('the_btn');
        btn.addEventListener('click', () => {
            menus.classList.toggle('hidden');
            menus.classList.toggle('block');
        })
        const profilePic = document.getElementById('profile_pic');
        if (profilePic) {
            const profileCard = document.getElementById('profile_card');
            profilePic.addEventListener('click', () => {
                profileCard.classList.toggle('hidden');
                profileCard.classList.toggle('block');
            })
        }
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
    // Handle logout
    const logout = () => {
        sessionStorage.clear();
        window.location.href = '/';
    }
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
                    <li className=" mt-7 md:mt-0"><Link to="/">home</Link></li>
                    <li className=" mt-4 md:mt-0"><Scroll className="cursor-pointer" to="about" smooth={true}>about</Scroll></li>
                    <li className=" mt-4 md:mt-0"><Scroll className="cursor-pointer" to="services" smooth={true}>services</Scroll></li>
                    <li className=" mt-4 md:mt-0"><Scroll className="cursor-pointer" to="support" smooth={true}>support</Scroll></li>
                    {JSON.parse(sessionStorage.getItem('token')) ?
                        <li className="mt-4 md:mt-0 relative text-center">
                            <button id="profile_pic" className={scrolled ? "flex justify-center h-10 w-10 bg-white text-black text-base font-RobotoSlab rounded-full p-1.5 mx-auto border-2 border-gray-400 hover:border-opacity-0 ring-indigo-400 hover:ring-4 transition duration-300" : "flex justify-center h-10 w-10 bg-black text-white text-base font-RobotoSlab rounded-full p-1.5 mx-auto border-2 border-gray-400 hover:border-opacity-0 ring-indigo-400 hover:ring-4 transition duration-300"}>{user.avatar}</button>
                            <ul id="profile_card" className="hidden absolute right-1/2 md:right-0 -mr-16 md:-mr-0 mt-3 bg-white border shadow-lg rounded-lg text-black p-3 w-52 md:w-60">
                                <div className="cursor-pointer flex justify-center items-center h-16 w-16 md:h-20 md:w-20 bg-black text-white font-RobotoSlab rounded-full p-1.5 mx-auto"><span className="text-3xl md:text-4xl">{user.avatar}</span></div>
                                <li><h1 className="text-lg font-bold font-RobotoSlab text-center">{user.name}</h1></li>
                                <li><Link to="/profile/dashboard"><button className="px-4 py-2 mt-4 bg-cs-black text-white text-lg rounded-lg focus:ring-4 ring-gray-600 hover:bg-cs-ebony transition duration-300">Dashboard</button></Link></li>
                                <li className="mt-4 cursor-pointer text-left"><p onClick={logout} className="normal-case hover:text-blue-700"><FontAwesomeIcon icon={faSignOutAlt} /> Logout</p></li>
                            </ul>
                        </li>
                        : <li className="mt-4 md:mt-0"><Link to="/login"><button className={scrolled ? "bg-white px-5 py-2 text-black hover:text-white rounded-md hover:bg-indigo-400 transition duration-300 ease-in-out" : "bg-black px-5 py-2 text-white rounded-md hover:bg-cs-ebony transition duration-300 ease-in-out"}>LOGIN</button></Link></li>
                    }
                </ul>
            </nav>
        </div>
    );
};

export default Navbar;
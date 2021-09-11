import React, { useContext, useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faCheckSquare, faSignOutAlt } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';
import { UserContext } from '../App'
import { Link as Scroll } from 'react-scroll'
import { Scrollbars } from 'react-custom-scrollbars';





const Navbar = () => {
    // User context api
    const [user] = useContext(UserContext)
    const [scrolled, setScrolled] = useState(false);
    // toggle navbar menu
    useEffect(() => {
        const menus = document.getElementById('Menu_list');
        const btn = document.getElementById('the_btn');
        btn.addEventListener('click', (e) => {
            menus.classList.toggle('hidden');
            menus.classList.toggle('block');
        })
        const profilePic = document.getElementById('profile_pic');
        const profileCard = document.getElementById('profile_card');
        if (profilePic) {
            profilePic.addEventListener('click', (e) => {
                e.stopPropagation();
                profileCard.classList.toggle('hidden');
                profileCard.classList.toggle('block');
                NotificationCard.classList.remove('block');
                NotificationCard.classList.add('hidden');
            })
        }
        const NotificationIcon = document.getElementById('notificationIcon');
        const NotificationCard = document.getElementById('notification');
        NotificationIcon.addEventListener('click', () => {
            NotificationCard.classList.toggle('hidden');
            NotificationCard.classList.toggle('block');
            profileCard.classList.remove('block');
            profileCard.classList.add('hidden');
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
                    <li className="mt-7 md:mt-0"><Link to="/">home</Link></li>
                    <li className="mt-4 md:mt-0"><Scroll className="cursor-pointer" to="about" smooth={true}>about</Scroll></li>
                    <li className="mt-4 md:mt-0"><Scroll className="cursor-pointer" to="services" smooth={true}>services</Scroll></li>
                    {/* <li className=" mt-4 md:mt-0"><Scroll className="cursor-pointer" to="support" smooth={true}>support</Scroll></li> */}
                    {/* ------Notification------ */}
                    {JSON.parse(sessionStorage.getItem('token')) &&
                        <li className="mt-4 md:mt-0 relative text-center">
                            <span id="notificationIcon" className="cursor-pointer text-xl">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                                </svg>
                                <span className="h-3 w-3 absolute top-0">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-300 opacity-75"></span>
                                    <span className="relative inline-flex -top-2 rounded-full h-3 w-3 bg-indigo-400"></span>
                                </span>
                            </span>
                            {/* Notification card */}
                            <div id="notification" className="hidden absolute px-1 h-20 w-64 md:w-80 top-8 md:top-11 right-1/4 -mr-20 xxs:-mr-10 xss:-mr-0 md:-right-3 bg-white border rounded-lg shadow-md text-black z-30">
                                <Scrollbars style={{ width: '100%', height: '100%' }}>
                                    <div className="flex gap-4 md:gap-5 border-0 py-3 justify-center items-center">
                                        <div className="text-4xl md:text-5xl flex justify-center items-center text-green-500">
                                            <FontAwesomeIcon icon={faCheckSquare} />
                                        </div>
                                        <div className="flex flex-col justify-center items-center">
                                            <p className="text-lg md:text-xl capitalize font-RobotoSlab text-left">No Notification</p>
                                            <p className="text-sm md:text-base lowercase font-Signika">You have no notification for now</p>
                                        </div>
                                    </div>
                                </Scrollbars>
                            </div>
                        </li>
                    }
                    {/* -----User Profile----- */}
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
        </div >
    );
};

export default Navbar;
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faColumns, faShoppingBasket, faPencilAlt, faHome } from '@fortawesome/free-solid-svg-icons';
import { UserContext } from '../App'

const Sidebar = () => {
    const [user] = useContext(UserContext);

    // Link click event
    const dashboardClick = () => {
        document.getElementById('dashboard').classList.add('bg-cs-black', 'text-white');
        document.getElementById('purchase').classList.remove('bg-cs-black', 'text-white');
        document.getElementById('review').classList.remove('bg-cs-black', 'text-white');
        document.getElementById('home').classList.remove('bg-cs-black', 'text-white');
    }
    const purchaseClick = () => {
        document.getElementById('purchase').classList.add('bg-cs-black', 'text-white');
        document.getElementById('dashboard').classList.remove('bg-cs-black', 'text-white');
        document.getElementById('review').classList.remove('bg-cs-black', 'text-white');
        document.getElementById('home').classList.remove('bg-cs-black', 'text-white');
    }
    const reviewClick = () => {
        document.getElementById('review').classList.add('bg-cs-black', 'text-white');
        document.getElementById('dashboard').classList.remove('bg-cs-black', 'text-white');
        document.getElementById('purchase').classList.remove('bg-cs-black', 'text-white');
        document.getElementById('home').classList.remove('bg-cs-black', 'text-white');
    }
    const homeClick = () => {
        document.getElementById('home').classList.add('bg-cs-black', 'text-white');
        document.getElementById('dashboard').classList.remove('bg-cs-black', 'text-white');
        document.getElementById('purchase').classList.remove('bg-cs-black', 'text-white');
        document.getElementById('review').classList.remove('bg-cs-black', 'text-white');
    }
    return (
        <div className="flex flex-col w-full md:w-52 lg:w-60 xl:w-64 h-full md:h-screen py-8 bg-white shadow-md border">
            <div className="flex flex-col items-center mt-6 -mx-2">
                <div className="cursor-pointer flex justify-center items-center h-16 w-16 md:h-20 md:w-20 bg-black text-white font-RobotoSlab rounded-full p-1.5 mx-auto"><span className="text-3xl md:text-4xl">{user.avatar}</span></div>
                <h4 className="mx-2 mt-2 font-bold text-center md:text-lg text-gray-800 font-RobotoSlab uppercase">{user.name}</h4>
                <p className="mx-2 mt-1 text-sm font-medium text-center text-gray-700 font-RobotoSlab">{user.email}</p>
            </div>

            <div className="flex flex-col justify-between flex-1 mt-6">
                <nav>
                    <Link id="dashboard" onClick={dashboardClick} className="flex items-center text-lg font-Signika px-6 py-2 bg-cs-black text-white" to="/dashboard">
                        <FontAwesomeIcon icon={faColumns} />
                        <span className="mx-4 font-medium">Dashboard</span>
                    </Link>

                    <Link id="purchase" onClick={purchaseClick} className="flex items-center text-lg font-Signika px-6 py-2 mt-2" to="/dashboard">
                        <FontAwesomeIcon icon={faShoppingBasket} />
                        <span className="mx-4 font-medium">Purchases</span>
                    </Link>

                    <Link id="review" onClick={reviewClick} className="flex items-center text-lg font-Signika px-6 py-2 mt-2" to="/dashboard">
                        <FontAwesomeIcon icon={faPencilAlt} />
                        <span className="mx-4 font-medium">Review</span>
                    </Link>

                    <Link id="home" onClick={homeClick} className="flex items-center text-lg font-Signika px-6 py-2 mt-2" to="/">
                        <FontAwesomeIcon icon={faHome} />
                        <span className="mx-4 font-medium">Home</span>
                    </Link>
                </nav>
            </div>
        </div>
    );
};

export default Sidebar;
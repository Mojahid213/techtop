import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faColumns, faShoppingBasket, faPencilAlt, faHome } from '@fortawesome/free-solid-svg-icons';
import { UserContext } from '../../../App';
import PurchaseItems from './PurchaseItems'

const Purchases = () => {
    const [user] = useContext(UserContext);

    return (
        <div className="2xl:container">
            <div className="flex flex-col md:flex-row gap-y-10">
                <div className="p-5 md:p-0">
                    <div className="flex flex-col w-full md:w-52 lg:w-60 xl:w-64 h-full md:h-screen py-8 bg-white shadow-md border">
                        <div className="flex flex-col items-center mt-5 -mx-2">
                            <div className="cursor-pointer flex justify-center items-center h-16 w-16 md:h-20 md:w-20 bg-black text-white font-RobotoSlab rounded-full p-1.5 mx-auto"><span className="text-3xl md:text-4xl">{user.avatar}</span></div>
                            <h4 className="mx-2 mt-2 font-bold text-center md:text-lg text-gray-800 font-RobotoSlab uppercase">{user.name}</h4>
                            <p className="mx-2 mt-1 text-sm font-medium text-center text-gray-700 font-Signika">{user.email}</p>
                        </div>

                        <div className="flex flex-col justify-between flex-1 mt-6">
                            <nav>
                                <Link id="dashboard" className="flex items-center text-lg font-Signika px-6 py-2" to="/profile/dashboard">
                                    <FontAwesomeIcon icon={faColumns} />
                                    <span className="mx-4 font-medium">Dashboard</span>
                                </Link>

                                <Link id="purchase" className="flex items-center text-lg font-Signika px-6 py-2 mt-2 bg-cs-black text-white" to="/profile/purchases">
                                    <FontAwesomeIcon icon={faShoppingBasket} />
                                    <span className="mx-4 font-medium">Purchases</span>
                                </Link>

                                <Link id="review" className="flex items-center text-lg font-Signika px-6 py-2 mt-2" to="/dashboard">
                                    <FontAwesomeIcon icon={faPencilAlt} />
                                    <span className="mx-4 font-medium">Review</span>
                                </Link>

                                <Link id="home" className="flex items-center text-lg font-Signika px-6 py-2 mt-2" to="/">
                                    <FontAwesomeIcon icon={faHome} />
                                    <span className="mx-4 font-medium">Home</span>
                                </Link>
                            </nav>
                        </div>
                    </div>
                </div>
                <div className="flex-1 px-5 md:px-10 md:mt-5">
                    <h1 className="text-3xl font-Ubuntu font-bold text-center mb-1">My Purchases</h1>
                    <hr className="mb-8" />
                    <PurchaseItems></PurchaseItems>
                </div>
            </div>
        </div>
    );
};

export default Purchases;
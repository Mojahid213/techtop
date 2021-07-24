import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

const ServicePlanCard = ({ details, category }) => {
    return (
        <div className="flex flex-col flex-1 justify-center items-center border-2 border-black py-5 px-4 h-full">
            <h1 className="text-center text-l font-bold font-RobotoSlab mb-2">{details.title}</h1>
            <div className="text-center text-white w-full py-5 mb-5 bg-cs-black rounded-xl">
                <h1 className="text-4xl font-bold font-Ubuntu mb-1">${details.price}</h1>
                <p className="font-Ubuntu mb-2">{details.type}</p>
                <button className="px-5 py-3 bg-white hover:bg-transparent border-2 hover:border-white focus:border-white transition duration-300 text-l text-cs-black hover:text-white font-Ubuntu font-bold rounded-lg">Buy now</button>
            </div>
            {/*--------- For Web Development ---------*/}
            {category === "web-developments" &&
                <div className="w-full text-left h-full text-xl font-Signika">
                    {/* For Basic Service */}
                    {details.title === "BASIC" &&
                        <div>
                            <p> <FontAwesomeIcon className="text-green-500" icon={faCheckCircle} /> 5 Pages Website</p>
                            <p> <FontAwesomeIcon className="text-green-500" icon={faCheckCircle} /> Fully Custom Coded</p>
                            <p> <FontAwesomeIcon className="text-green-500" icon={faCheckCircle} /> Free 1 year Domain and Hosting</p>
                        </div>}
                    {/* For Standard Service */}
                    {details.title === "STANDARD" &&
                        <div>
                            <p> <FontAwesomeIcon className="text-green-500" icon={faCheckCircle} /> 10 Pages Website</p>
                            <p> <FontAwesomeIcon className="text-green-500" icon={faCheckCircle} /> Fully Custom Coded</p>
                            <p> <FontAwesomeIcon className="text-green-500" icon={faCheckCircle} /> Free 1 year Domain and Hosting</p>
                            <p> <FontAwesomeIcon className="text-green-500" icon={faCheckCircle} /> Unlimited Support</p>
                            <p> <FontAwesomeIcon className="text-green-500" icon={faCheckCircle} /> Domain Sosting Support</p>
                        </div>
                    }
                    {/* For Enterprise Service */}
                    {details.title === "ENTERPRISE" &&
                        < div >
                            <p> <FontAwesomeIcon className="text-green-500" icon={faCheckCircle} /> Custom Pages Website</p>
                            <p> <FontAwesomeIcon className="text-green-500" icon={faCheckCircle} /> Fully Custom Coded</p>
                            <p> <FontAwesomeIcon className="text-green-500" icon={faCheckCircle} /> Free 1 year Domain and Hosting</p>
                            <p> <FontAwesomeIcon className="text-green-500" icon={faCheckCircle} /> Unlimited Support</p>
                            <p> <FontAwesomeIcon className="text-green-500" icon={faCheckCircle} /> Domain Hosting Support</p>
                            <p> <FontAwesomeIcon className="text-green-500" icon={faCheckCircle} /> C-panel</p>
                            <p> <FontAwesomeIcon className="text-green-500" icon={faCheckCircle} /> Speed optimization</p>
                        </div>
                    }
                </div>
            }
            {/*-------- For Digital Marketing ---------*/}
            {
                category === "digital-marketings" &&
                <div className="w-full text-left h-full text-xl font-Signika">
                    {/* For Basic Service */}
                    {details.title === "BASIC" &&
                        <div>
                            <p> <FontAwesomeIcon className="text-green-500" icon={faCheckCircle} /> Facebook and Youtube Marketing</p>
                            <p> <FontAwesomeIcon className="text-green-500" icon={faCheckCircle} /> Email Marketing</p>
                            <p> <FontAwesomeIcon className="text-green-500" icon={faCheckCircle} /> Basic SEO</p>
                        </div>}
                    {/* For Standard Service */}
                    {details.title === "STANDARD" &&
                        <div>
                            <p> <FontAwesomeIcon className="text-green-500" icon={faCheckCircle} /> All Social Media Marketing</p>
                            <p> <FontAwesomeIcon className="text-green-500" icon={faCheckCircle} /> Email Marketing</p>
                            <p> <FontAwesomeIcon className="text-green-500" icon={faCheckCircle} /> Advanced SEO for all Websites</p>
                            <p> <FontAwesomeIcon className="text-green-500" icon={faCheckCircle} /> 24x7 days support</p>
                            <p> <FontAwesomeIcon className="text-green-500" icon={faCheckCircle} /> Content Marketing</p>
                        </div>
                    }
                    {/* For Enterprise Service */}
                    {details.title === "ENTERPRISE" &&
                        < div >
                            <p> <FontAwesomeIcon className="text-green-500" icon={faCheckCircle} /> All Social Media Marketing</p>
                            <p> <FontAwesomeIcon className="text-green-500" icon={faCheckCircle} /> Email Marketing</p>
                            <p> <FontAwesomeIcon className="text-green-500" icon={faCheckCircle} /> Advanced SEO for all Websites</p>
                            <p> <FontAwesomeIcon className="text-green-500" icon={faCheckCircle} /> 24x7 days support</p>
                            <p> <FontAwesomeIcon className="text-green-500" icon={faCheckCircle} /> Content Marketing</p>
                            <p> <FontAwesomeIcon className="text-green-500" icon={faCheckCircle} /> Mobile Marketing</p>
                            <p> <FontAwesomeIcon className="text-green-500" icon={faCheckCircle} /> Marketing Analytics</p>
                        </div>
                    }
                </div>
            }
            {/*-------- For Graphic Design --------*/}
            {
                category === "graphic-designs" &&
                <div className="w-full text-left h-full text-xl font-Signika">
                    {/* For Basic Service */}
                    {details.title === "BASIC" &&
                        <div>
                            <p> <FontAwesomeIcon className="text-green-500" icon={faCheckCircle} /> Logo and Banner Design</p>
                            <p> <FontAwesomeIcon className="text-green-500" icon={faCheckCircle} /> Packaging Design</p>
                            <p> <FontAwesomeIcon className="text-green-500" icon={faCheckCircle} /> 5 Times Revision</p>
                        </div>}
                    {/* For Standard Service */}
                    {details.title === "STANDARD" &&
                        <div>
                            <p> <FontAwesomeIcon className="text-green-500" icon={faCheckCircle} /> Logo and Banner Eesign</p>
                            <p> <FontAwesomeIcon className="text-green-500" icon={faCheckCircle} /> Packaging Design</p>
                            <p> <FontAwesomeIcon className="text-green-500" icon={faCheckCircle} /> 10 Times Revision</p>
                            <p> <FontAwesomeIcon className="text-green-500" icon={faCheckCircle} /> Labeling and Cover Design</p>
                            <p> <FontAwesomeIcon className="text-green-500" icon={faCheckCircle} /> 3D Graphic Design</p>
                        </div>
                    }
                    {/* For Enterprise Service */}
                    {details.title === "ENTERPRISE" &&
                        < div >
                            <p> <FontAwesomeIcon className="text-green-500" icon={faCheckCircle} /> Logo and Banner Design</p>
                            <p> <FontAwesomeIcon className="text-green-500" icon={faCheckCircle} /> Packaging Design</p>
                            <p> <FontAwesomeIcon className="text-green-500" icon={faCheckCircle} /> Unlimited revisions</p>
                            <p> <FontAwesomeIcon className="text-green-500" icon={faCheckCircle} /> Labeling and Cover Design</p>
                            <p> <FontAwesomeIcon className="text-green-500" icon={faCheckCircle} /> 3D Graphic Design</p>
                            <p> <FontAwesomeIcon className="text-green-500" icon={faCheckCircle} /> Vector and Illustration Design</p>
                            <p> <FontAwesomeIcon className="text-green-500" icon={faCheckCircle} /> Motion Graphic Design</p>
                        </div>
                    }
                </div>
            }
        </div >
    );
};

export default ServicePlanCard;
import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';


const BuyItem = () => {
    const [service] = useState(JSON.parse(sessionStorage.getItem("service")));
    // Heading service name state
    const [name, setName] = useState('');
    useEffect(() => {
        if (service.category === 'web-developments') {
            setName('WEB DEVELOPMENT')
        }
        if (service.category === 'digital-marketings') {
            setName('DIGITAL MARKETING')
        }
        if (service.category === 'graphic-designs') {
            setName('GRAPHIC DESIGN')
        }
    }, [service.category])
    return (
        <div className="flex flex-col flex-1 justify-center items-center border-2 border-black shadow-lg py-5 px-4 h-full max-w-sm w-full">
            <h1 className="text-xl font-RobotoSlab font-bold text-center mb-1">{name}</h1>
            <h1 className="text-center text-l font-bold font-RobotoSlab mb-2">{service.details.title}</h1>
            <div className="text-center text-white w-full py-5 mb-5 bg-cs-black rounded-xl">
                <h1 className="text-4xl font-bold font-Ubuntu mb-1">${service.details.price}</h1>
                <p className="font-Ubuntu mb-2">{service.details.type}</p>
            </div>
            {/*--------- For Web Development ---------*/}
            {service.category === "web-developments" &&
                <div className="w-full text-left h-full text-xl font-Signika">
                    {/* For Basic Service */}
                    {service.details.title === "BASIC" &&
                        <div>
                            <p> <FontAwesomeIcon className="text-green-500" icon={faCheckCircle} /> 5 Pages Website</p>
                            <p> <FontAwesomeIcon className="text-green-500" icon={faCheckCircle} /> Fully Custom Coded</p>
                            <p> <FontAwesomeIcon className="text-green-500" icon={faCheckCircle} /> Free 1 year Domain and Hosting</p>
                        </div>}
                    {/* For Standard Service */}
                    {service.details.title === "STANDARD" &&
                        <div>
                            <p> <FontAwesomeIcon className="text-green-500" icon={faCheckCircle} /> 10 Pages Website</p>
                            <p> <FontAwesomeIcon className="text-green-500" icon={faCheckCircle} /> Fully Custom Coded</p>
                            <p> <FontAwesomeIcon className="text-green-500" icon={faCheckCircle} /> Free 1 year Domain and Hosting</p>
                            <p> <FontAwesomeIcon className="text-green-500" icon={faCheckCircle} /> Unlimited Support</p>
                            <p> <FontAwesomeIcon className="text-green-500" icon={faCheckCircle} /> Domain Sosting Support</p>
                        </div>
                    }
                    {/* For Enterprise Service */}
                    {service.details.title === "ENTERPRISE" &&
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
                service.category === "digital-marketings" &&
                <div className="w-full text-left h-full text-xl font-Signika">
                    {/* For Basic Service */}
                    {service.details.title === "BASIC" &&
                        <div>
                            <p> <FontAwesomeIcon className="text-green-500" icon={faCheckCircle} /> Facebook and Youtube Marketing</p>
                            <p> <FontAwesomeIcon className="text-green-500" icon={faCheckCircle} /> Email Marketing</p>
                            <p> <FontAwesomeIcon className="text-green-500" icon={faCheckCircle} /> Basic SEO</p>
                        </div>}
                    {/* For Standard Service */}
                    {service.details.title === "STANDARD" &&
                        <div>
                            <p> <FontAwesomeIcon className="text-green-500" icon={faCheckCircle} /> All Social Media Marketing</p>
                            <p> <FontAwesomeIcon className="text-green-500" icon={faCheckCircle} /> Email Marketing</p>
                            <p> <FontAwesomeIcon className="text-green-500" icon={faCheckCircle} /> Advanced SEO for all Websites</p>
                            <p> <FontAwesomeIcon className="text-green-500" icon={faCheckCircle} /> 24x7 days support</p>
                            <p> <FontAwesomeIcon className="text-green-500" icon={faCheckCircle} /> Content Marketing</p>
                        </div>
                    }
                    {/* For Enterprise Service */}
                    {service.details.title === "ENTERPRISE" &&
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
                service.category === "graphic-designs" &&
                <div className="w-full text-left h-full text-xl font-Signika">
                    {/* For Basic Service */}
                    {service.details.title === "BASIC" &&
                        <div>
                            <p> <FontAwesomeIcon className="text-green-500" icon={faCheckCircle} /> Logo and Banner Design</p>
                            <p> <FontAwesomeIcon className="text-green-500" icon={faCheckCircle} /> Packaging Design</p>
                            <p> <FontAwesomeIcon className="text-green-500" icon={faCheckCircle} /> 5 Times Revision</p>
                        </div>}
                    {/* For Standard Service */}
                    {service.details.title === "STANDARD" &&
                        <div>
                            <p> <FontAwesomeIcon className="text-green-500" icon={faCheckCircle} /> Logo and Banner Design</p>
                            <p> <FontAwesomeIcon className="text-green-500" icon={faCheckCircle} /> Packaging Design</p>
                            <p> <FontAwesomeIcon className="text-green-500" icon={faCheckCircle} /> 10 Times Revision</p>
                            <p> <FontAwesomeIcon className="text-green-500" icon={faCheckCircle} /> Labeling and Cover Design</p>
                            <p> <FontAwesomeIcon className="text-green-500" icon={faCheckCircle} /> 3D Graphic Design</p>
                        </div>
                    }
                    {/* For Enterprise Service */}
                    {service.details.title === "ENTERPRISE" &&
                        < div >
                            <p> <FontAwesomeIcon className="text-green-500" icon={faCheckCircle} /> Logo and Banner Design</p>
                            <p> <FontAwesomeIcon className="text-green-500" icon={faCheckCircle} /> Packaging Design</p>
                            <p> <FontAwesomeIcon className="text-green-500" icon={faCheckCircle} /> 20 Times Revision</p>
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

export default BuyItem;
import React, { useState } from 'react'

const Item = ({ title, children }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="border border-gray-500 rounded shadow-sm">
            <button
                type="button"
                aria-label="Open item"
                title="Open item"
                className="flex items-center justify-between w-full p-4 focus:outline-none"
                onClick={() => setIsOpen(!isOpen)}
            >
                <p className="text-lg font-semibold">{title}</p>
                <div className="flex items-center justify-center w-8 h-8 border rounded-full">
                    <svg
                        viewBox="0 0 24 24"
                        className={`w-3 text-gray-600 transition-transform duration-200 ${isOpen ? 'transform rotate-180' : ''
                            }`}
                    >
                        <polyline
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeMiterlimit="10"
                            points="2,7 12,17 22,7"
                            strokeLinejoin="round"
                        />
                    </svg>
                </div>
            </button>
            {isOpen && (
                <div className="p-4 pt-0">
                    <p className="text-gray-700">{children}</p>
                </div>
            )}
        </div>
    );
};

export const Faq = () => {
    return (
        <div className="px-4 py-12 sm:py-14 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
            <div className="mb-12 text-center font-Signika font-extrabold text-4xl px-5">
                <h1 className="uppercase">Frequently <span className="font-Signika text-indigo-800">asked</span></h1>
            </div>
            <div className="max-w-xl sm:mx-auto md:max-w-2xl lg:max-w-3xl">
                <div className="space-y-4">
                    <Item title="Where is TechTop's office?">
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Autem saepe deleniti odio, est officia harum? Odio at iusto nihil consequatur earum, veritatis praesentium cupiditate vel soluta suscipit, pariatur deleniti nam!
                    </Item>
                    <Item title="What is the refund policy?">
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Autem saepe deleniti odio, est officia harum? Odio at iusto nihil consequatur earum, veritatis praesentium cupiditate vel soluta suscipit, pariatur deleniti nam!
                    </Item>
                    <Item title="Do you guys have any promo code?">
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Autem saepe deleniti odio, est officia harum? Odio at iusto nihil consequatur earum, veritatis praesentium cupiditate vel soluta suscipit, pariatur deleniti nam!
                    </Item>
                    <Item title="Is there any custom service plan?">
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Autem saepe deleniti odio, est officia harum? Odio at iusto nihil consequatur earum, veritatis praesentium cupiditate vel soluta suscipit, pariatur deleniti nam!
                    </Item>
                </div>
            </div>
        </div>
    );
};
export default Faq;
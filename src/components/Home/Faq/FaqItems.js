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
                <p className="md:text-lg font-RobotoSlab">{title}</p>
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
                    <p className="text-gray-700 text-sm md:text-base font-Ubuntu">{children}</p>
                </div>
            )}
        </div>
    );
};

export const FaqItems = () => {
    return (
        <div className="w-full">
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
    );
};
export default FaqItems;
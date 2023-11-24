import React, { useState } from "react";
import { useMoney } from './money';

interface CardProps {
    image: string;
    price: number;
}

const Card: React.FC<CardProps> = ({ image, price }) => {
    const [bought, setBought] = useState(0);
    const { money, spendMoney, earnMoney } = useMoney();

    const handleSell = () => {
        if (bought > 0) {
            setBought(bought - 1);
            earnMoney(price);
        }
    };

    const handleBuy = () => {
        if (money >= price) {
            setBought(bought + 1);
            spendMoney(price);
        } else {
            alert('Not enough money');
        }
    };

    return (
        <div className="w-64 h-80 rounded overflow-hidden shadow-lg m-4">
            <img className="w-full h-48 object-cover" src={image} alt="product" />
            <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">${price}</div>
            </div>
            <div className="px-6 py-4 flex justify-between">
                <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded" onClick={handleSell}>
                    -
                </button>
                <div className="flex items-center justify-center">
                    <div className="mx-4">{bought}</div>
                </div>
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={handleBuy}>
                    +
                </button>
            </div>
        </div>
    );
};

export default Card;

import React from 'react';
import { Link } from 'react-router-dom';
import { FaLeaf, FaExternalLinkAlt } from "react-icons/fa";

const AdventureCard = ({ place }) => {
    return (
        <div className="p-2 w-full shadow-md rounded-lg bg-white"
            data-aos="zoom-in"
            data-aos-duration="800"
        >
            <img className="w-full h-[260px] rounded-lg" src={place.Image}
            />
            <div className='pl-1 flex flex-col gap-1 mt-1'>
                <h3 className="font-bold text-2xl text-gray-800">{place.AdventureTitle}</h3>
                <div className="flex items-center space-x-2">
                    <FaLeaf className="text-green-500" />
                    <span className="font-semibold text-gray-600">Eco-Friendly Features:</span>
                </div>
                <ul className="list-disc list-inside text-gray-700 ml-6">
                    {place.EcoFriendlyFeatures.map((feature, idx) => (
                        <li key={idx}>{feature}</li>
                    ))}
                </ul>
                <Link
                    to={`/adventure/${place.ID}`}
                    className="w-fit btn bg-indigo-500 text-white hover:bg-indigo-600 mt-1 flex items-center px-4 py-2 rounded-md"
                >
                    <span>Explore Now</span>
                    <FaExternalLinkAlt className="ml-2" />
                </Link>
            </div>

        </div>
    );
};

export default AdventureCard;
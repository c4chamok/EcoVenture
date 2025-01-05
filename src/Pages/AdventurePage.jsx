import React, { useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import { FaMapMarkerAlt, FaClock, FaTree, FaUsers } from "react-icons/fa";
import { AiOutlineClockCircle } from 'react-icons/ai';

const AdventurePage = () => {
    const data = useLoaderData();
    const param = useParams();
    const [showConsultTime, setShowConsultTime] = useState(false)
    const placeData = data.find(place => place.ID === param.id);
    document.title = `Ecoventure | ${placeData.AdventureTitle}`;

    const talkWithExpert = () => {
        const currentTime = new Date()
        const startTime = new Date().setHours(10, 0, 0, 0)
        const endTime = new Date().setHours(20, 0, 0, 0)

        if (currentTime >= startTime && currentTime <= endTime) {
            window.open('https://meet.google.com/', '_blank');
        } else {

            setShowConsultTime(true)
        }
    }

    return (
        <div className='flex flex-col items-center'>
            {
                showConsultTime &&
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                    <div className="bg-white rounded-lg shadow-lg max-w-[35%] w-full flex flex-col items-center p-6 relative">
                        <div className="text-blue-500 text-5xl mr-4">
                            <AiOutlineClockCircle />
                        </div>
                        <div className='flex flex-col items-center'>
                            <h3 className="text-2xl font-semibold text-gray-800">Consultation Hours</h3>
                            <p className="text-gray-600 mt-2">Available from:</p>
                            <p className="text-gray-800 text-xl mt-2 font-medium">10:00 AM - 8:00 PM</p>
                        </div>
                        <button onClick={() => setShowConsultTime(false)} className="btn px-5 mt-3 border border-gray-400">Close</button>
                    </div>
                </div>
            }

            <div className="w-10/12 mx-auto my-8 p-6 border rounded-lg shadow-lg bg-white">
                <img src={placeData.Image} className="w-full h-[450px] rounded-lg mb-4"
                />
                <h1 className="text-3xl font-bold mb-2">{placeData.AdventureTitle}</h1>
                <h2 className="text-lg font-medium text-gray-600 mb-4">
                    {placeData.CategoryName}
                </h2>
                <p className="text-gray-700 mb-6">{placeData.ShortDescription}</p>
                <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="flex items-center space-x-2">
                        <FaMapMarkerAlt className="text-green-500" />
                        <p>{placeData.Location}</p>
                    </div>
                    <div className="flex items-center space-x-2">
                        <FaClock className="text-blue-500" />
                        <p>{placeData.Duration}</p>
                    </div>
                    <div className="flex items-center space-x-2">
                        <FaTree className="text-green-700" />
                        <p>{placeData.AdventureLevel}</p>
                    </div>
                    <div className="flex items-center space-x-2">
                        <FaUsers className="text-orange-500" />
                        <p>{`Max Group Size: ${placeData.MaxGroupSize}`}</p>
                    </div>
                </div>
                <h3 className="text-xl font-bold mb-2">Included Items</h3>
                <ul className="list-disc pl-6 mb-4">
                    {placeData.IncludedItems.map((item, index) => (
                        <li key={index}>{item}</li>
                    ))}
                </ul>
                <h3 className="text-xl font-bold mb-2">Eco-Friendly Features</h3>
                <ul className="list-disc pl-6 mb-4">
                    {placeData.EcoFriendlyFeatures.map((feature, index) => (
                        <li key={index}>{feature}</li>
                    ))}
                </ul>
                <h3 className="text-xl font-bold mb-2">Special Instructions</h3>
                <ul className="list-disc pl-6 mb-6">
                    {placeData.SpecialInstructions.map((instruction, index) => (
                        <li key={index}>{instruction}</li>
                    ))}
                </ul>
                <div className="flex justify-between items-center">
                    <p className="text-lg font-semibold text-gray-800">
                        Cost: {placeData.AdventureCost} TK
                    </p>
                    <button onClick={talkWithExpert} className="btn bg-indigo-500 text-white hover:bg-indigo-600">
                        Talk with Expert
                    </button>
                </div>
            </div>
        </div>
    );
};

export default AdventurePage;